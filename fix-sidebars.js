const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('page.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./app');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Remove Sidebar imports
  const importRegex = /import\s+\w*Sidebar\s+from\s+['"][^'"]+['"];?\n?/g;
  if (importRegex.test(content)) {
    content = content.replace(importRegex, '');
    changed = true;
  }

  // Remove Sidebar components
  const componentRegex = /<\w*Sidebar\s*\/?>(<\/w*Sidebar>)?\n?/g;
  if (componentRegex.test(content)) {
    content = content.replace(componentRegex, '');
    changed = true;
  }
  
  // Also remove the <div className="min-h-screen bg-[#090a09] text-white"> wrapper since layout handles it
  // Actually, just removing the Sidebar component is enough to stop it from rendering.
  // The extra div might be harmless, but let's just leave it to not break the layout of the page.
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed:', file);
  }
});
