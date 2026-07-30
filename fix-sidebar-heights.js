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
      if (file.endsWith('Sidebar.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./app').concat(walk('./components'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Change h-screen to h-[calc(100vh-78px)] ONLY for secondary sidebars
  // MainSidebar is fixed inset-y-0 so it's fine.
  if (!file.includes('MainSidebar.tsx')) {
    if (content.includes('h-screen')) {
      content = content.replace(/h-screen/g, 'h-[calc(100vh-78px)]');
      changed = true;
    }
  }

  // Hide scrollbar globally for the aside/div
  if (content.includes('overflow-y-auto') && !content.includes('[&::-webkit-scrollbar]:hidden')) {
    content = content.replace(/overflow-y-auto/g, 'overflow-y-auto [&::-webkit-scrollbar]:hidden');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed sidebar styling in:', file);
  }
});
