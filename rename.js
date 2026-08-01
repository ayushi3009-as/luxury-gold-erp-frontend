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
      
      // Replace image tags for ZOIAS logo with text
      const imgRegex = /<img[^>]*src="\/zoias-logo\.png"[^>]*>/g;
      content = content.replace(imgRegex, '<span className="text-lg md:text-xl font-serif tracking-widest text-[#111] font-bold uppercase">MICROTECHNIQUE IT</span>');
      
      // Replace text mentions of ZOIAS
      content = content.replace(/ZOIAS/g, 'Microtechnique IT');
      content = content.replace(/Zoias/g, 'Microtechnique IT');
      content = content.replace(/zoias/g, 'microtechnique'); // e.g. for instagram handles or emails
      
      fs.writeFileSync(fullPath, content);
      console.log('Updated ' + fullPath);
    }
  }
}

walkAndReplace(dir);
