const fs = require('fs');
const files = [
  'app/ai-assistant/page.tsx',
  'app/analytics/business-analytics/page.tsx',
  'app/audit-logs/page.tsx',
  'app/backup/page.tsx',
  'app/gold-rate/page.tsx',
  'app/notifications/system-notifications/page.tsx',
  'app/reports/sales/add/page.tsx',
  'app/reports/sales/page.tsx'
];

files.forEach(f => {
  try {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/if\s*\(\s*res\.status\s*===\s*401\s*\)\s*\{[\s\S]*?window\.location\.href\s*=\s*['"].*?login['"];?[\s\S]*?\}/g, 'if (res.status === 401) { console.warn("Unauthorized fetch"); }');
    fs.writeFileSync(f, content);
    console.log('Fixed', f);
  } catch(e) {
    console.log('Error on', f, e.message);
  }
});
