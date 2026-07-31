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
      if (file.endsWith('route.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('app/api');

files.forEach(f => {
  try {
    let content = fs.readFileSync(f, 'utf8');
    if (!content.includes('force-dynamic')) {
      if (content.includes('export async function GET')) {
        content = content.replace('export async function GET', 'export const dynamic = "force-dynamic";\n\nexport async function GET');
        fs.writeFileSync(f, content);
        console.log('Updated ' + f);
      }
    }
  } catch(e) {
    console.log('Error reading ' + f);
  }
});
