const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://main-zoias.vercel.app/', { waitUntil: 'networkidle0' });

    const data = await page.evaluate(() => {
      function simplifyElement(el) {
        if (el.nodeType === Node.TEXT_NODE) {
          const text = el.textContent.trim();
          return text ? { text } : null;
        }
        if (el.nodeType !== Node.ELEMENT_NODE) return null;

        // Skip script/style tags
        if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'PATH'].includes(el.tagName)) return null;

        const obj = {
          tag: el.tagName.toLowerCase(),
        };

        if (el.className) obj.class = el.className;
        if (el.tagName === 'IMG') obj.src = el.src;
        if (el.tagName === 'A') obj.href = el.href;

        const children = [];
        for (let child of el.childNodes) {
          const simple = simplifyElement(child);
          if (simple) children.push(simple);
        }
        if (children.length > 0) obj.children = children;

        return obj;
      }
      return simplifyElement(document.body);
    });

    console.log(JSON.stringify(data, null, 2));
    await browser.close();
  } catch (err) {
    console.error(err);
  }
})();
