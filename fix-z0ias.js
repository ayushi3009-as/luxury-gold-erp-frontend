const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/hp/Downloads/GOLD_ERP/app/store/[domain]';

function walkAndReplace(currentDir) {
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const fullPath = path.join(currentDir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkAndReplace(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace z0ias
      content = content.replace(/z0ias/g, 'microtechnique');
      
      // Fix footer logo color in layout.tsx
      if (file === 'layout.tsx') {
        const lastIndexOfSpan = content.lastIndexOf('<span className="text-lg md:text-xl font-serif tracking-widest text-[#111] font-bold uppercase">MICROTECHNIQUE IT</span>');
        if (lastIndexOfSpan !== -1) {
          content = content.substring(0, lastIndexOfSpan) + content.substring(lastIndexOfSpan).replace('text-[#111]', 'text-white');
        }
      }
      
      fs.writeFileSync(fullPath, content);
      console.log('Updated ' + fullPath);
    }
  }
}

walkAndReplace(dir);
