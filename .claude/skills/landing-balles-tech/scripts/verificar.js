// Uso: node verificar.js <url> <pasta-saida>
// Tira prints da página em 1366px e 375px e do diagrama em 3 horários,
// e informa erros de console e rolagem horizontal.
const { chromium } = require('playwright');
const [url = 'http://localhost:8765/', out = '.'] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch();
  for (const [nome, vp, mob] of [['desktop', { width: 1366, height: 900 }, false], ['celular', { width: 375, height: 812 }, true]]) {
    const p = await b.newPage({ viewport: vp, isMobile: mob });
    const erros = [];
    p.on('pageerror', e => erros.push(e.message));
    p.on('console', m => m.type() === 'error' && erros.push(m.text()));
    await p.goto(url, { waitUntil: 'networkidle' });
    await p.evaluate(() => {
      document.querySelectorAll('.rv').forEach(e => e.classList.add('in'));
      if (typeof labIO !== 'undefined') labIO.disconnect();
      if (typeof stop === 'function') stop();
    });
    await p.screenshot({ path: `${out}/${nome}_pagina.png`, fullPage: true });
    const scene = await p.$('.lab-card');
    if (scene) {
      for (const [h, bat] of [[13, false], [11, true], [20, true]]) {
        await p.$eval('#hasBatt', (e, v) => { e.checked = v; e.dispatchEvent(new Event('change')); }, bat);
        await p.$eval('#hour', (e, v) => { e.value = v; e.dispatchEvent(new Event('input')); }, h);
        await p.waitForTimeout(800);
        await scene.screenshot({ path: `${out}/${nome}_diagrama_${h}h${bat ? '_bateria' : ''}.png` });
      }
    }
    const [sw, sh] = await p.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]);
    console.log(`${nome}: largura ${sw}px (viewport ${vp.width}), altura ${sh}px, erros: ${erros.length ? erros.join(' | ') : 'nenhum'}`);
  }
  await b.close();
})();
