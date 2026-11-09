/*
 * ============================================================
 * Gera as capturas de tela do site usadas no README.
 *
 * Uso (com o servidor rodando em outro terminal: npm run dev):
 *   npm run screenshots
 *
 * Não precisa instalar nada: usa o Edge ou o Chrome que já estão
 * no computador, controlados pelo DevTools Protocol.
 *
 * Variáveis opcionais:
 *   SITE_URL=http://localhost:3000   (endereço do site)
 *   BROWSER_PATH=C:\...\chrome.exe   (navegador específico)
 * ============================================================
 */

import { spawn } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000";
const OUT_DIR = join(process.cwd(), "docs", "screenshots");
const PORT = 9333;

// Nome do arquivo para cada seção (pelo id do elemento)
const SECTIONS = {
  home: "01-hero",
  about: "02-about",
  divisions: "03-divisions",
  projects: "04-projects",
  philosophy: "05-philosophy",
  contact: "06-contact",
  footer: "07-footer",
};

// ------------------------------------------------------------
// Localiza o navegador
// ------------------------------------------------------------

function findBrowser() {
  const candidates = [
    process.env.BROWSER_PATH,
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/microsoft-edge",
  ];
  const found = candidates.find((path) => path && existsSync(path));
  if (!found) {
    throw new Error("Edge/Chrome não encontrado. Defina BROWSER_PATH com o caminho do navegador.");
  }
  return found;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ------------------------------------------------------------
// Cliente mínimo do DevTools Protocol
// ------------------------------------------------------------

async function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });

  let nextId = 1;
  const pending = new Map();
  const listeners = new Map();

  ws.addEventListener("message", (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    } else if (msg.method && listeners.has(msg.method)) {
      listeners.get(msg.method)(msg.params);
      listeners.delete(msg.method);
    }
  });

  return {
    send(method, params = {}) {
      const id = nextId++;
      ws.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    once(method) {
      return new Promise((resolve) => listeners.set(method, resolve));
    },
    close() {
      ws.close();
    },
  };
}

async function evaluate(page, expression) {
  const { result, exceptionDetails } = await page.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (exceptionDetails) throw new Error(exceptionDetails.text);
  return result.value;
}

// Espera imagens e fontes carregarem
const WAIT_ASSETS = `
  (async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map((img) =>
      img.complete ? null : new Promise((r) => { img.onload = img.onerror = r; })
    ));
    await new Promise((r) => setTimeout(r, 800));
    return true;
  })()
`;

async function open(page, { width, height, scale, mobile }) {
  await page.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: scale,
    mobile,
  });
  const loaded = page.once("Page.loadEventFired");
  await page.send("Page.navigate", { url: SITE_URL });
  await loaded;
  await evaluate(page, WAIT_ASSETS);
}

async function capture(page, file, clip) {
  // Com clip: captura a área pedida (mesmo fora da tela).
  // Sem clip: captura só o que aparece na tela.
  const { data } = await page.send("Page.captureScreenshot", {
    format: "png",
    ...(clip ? { clip, captureBeyondViewport: true } : {}),
  });
  writeFileSync(join(OUT_DIR, file), Buffer.from(data, "base64"));
  console.log(`  ✓ docs/screenshots/${file}`);
}

// ------------------------------------------------------------
// Execução
// ------------------------------------------------------------

async function main() {
  // Confere se o site está no ar
  try {
    await fetch(SITE_URL);
  } catch {
    throw new Error(`Não consegui abrir ${SITE_URL}. Rode "npm run dev" em outro terminal primeiro.`);
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const profileDir = mkdtempSync(join(tmpdir(), "neovox-shots-"));
  const browser = spawn(
    findBrowser(),
    [
      "--headless=new",
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${profileDir}`,
      "--hide-scrollbars",
      "--no-first-run",
      // Linux rodando como root (containers) exige --no-sandbox
      ...(process.getuid?.() === 0 ? ["--no-sandbox"] : []),
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  try {
    // Aguarda o navegador abrir a porta de depuração
    let targets;
    for (let i = 0; i < 50 && !targets; i++) {
      try {
        targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      } catch {
        await sleep(200);
      }
    }
    const target = targets?.find((t) => t.type === "page");
    if (!target) throw new Error("O navegador não respondeu.");

    const page = await connect(target.webSocketDebuggerUrl);
    await page.send("Page.enable");

    console.log("Desktop (1440px):");
    await open(page, { width: 1440, height: 900, scale: 1, mobile: false });

    const rects = await evaluate(
      page,
      `[...document.querySelectorAll("main > section, main > footer")].map((el) => {
        const r = el.getBoundingClientRect();
        return { id: el.id || el.tagName.toLowerCase(), x: 0, y: r.top + scrollY, width: r.width, height: r.height };
      })`,
    );

    for (const { id, ...rect } of rects) {
      const name = SECTIONS[id];
      if (name) await capture(page, `${name}.png`, { ...rect, scale: 1 });
    }

    // Visão geral da página inteira, reduzida
    const fullHeight = await evaluate(page, "document.documentElement.scrollHeight");
    await capture(page, "00-full-page.png", { x: 0, y: 0, width: 1440, height: fullHeight, scale: 0.35 });

    console.log("Mobile (390px):");
    await open(page, { width: 390, height: 844, scale: 2, mobile: true });
    await capture(page, "08-mobile.png");

    page.close();
    console.log("Pronto!");
  } finally {
    browser.kill();
    await sleep(500);
    try {
      rmSync(profileDir, { recursive: true, force: true });
    } catch {
      // o perfil temporário às vezes ainda está em uso no Windows
    }
  }
}

main().catch((error) => {
  console.error(`Erro: ${error.message}`);
  process.exit(1);
});
