const fs = require('fs');
const paths = [
  'C:/Users/hp/Downloads/GOLD_ERP/app/store/[domain]/layout.tsx',
  'C:/Users/hp/Downloads/GOLD_ERP/app/store/[domain]/page.tsx'
];

paths.forEach(p => {
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/\/products\?category=([a-zA-Z0-9_-]+)/g, '/collections/$1');
  content = content.replace(/"\/products"/g, '"/collections"');
  content = content.replace(/\/products\?sort=([a-zA-Z0-9_-]+)/g, '/collections?sort=$1');
  fs.writeFileSync(p, content);
  console.log('Updated ' + p);
});
