const fs = require('fs');
const path = '/var/www/gold-erp/app/pos/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const target = /<div className="flex flex-col flex-1">[\s\S]*?<\/div>\s*<\/div>\s*\)\)/;
const replacement = <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h1>{product.name}</h1>
      <p>{product.productCode}</p>
      <p>{String(product.sellingPrice)}</p>
      <p>{product.inventory?.quantity}</p>
    </div>
  </div>
));

content = content.replace(target, replacement);
fs.writeFileSync(path, content);
