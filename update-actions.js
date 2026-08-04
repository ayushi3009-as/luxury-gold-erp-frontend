const fs = require('fs');
const path = require('path');

const qcf = [
  'FailedQC.tsx', 'PassedQC.tsx', 'ReworkQC.tsx'
];

const basePath = 'c:/Users/hp/Downloads/GOLD_ERP/components/manufacturing-manager';

const qcDeleteMethod = `
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Delete Quality Check?");
    if (!confirmDelete) return;
    try {
      await api.delete(\`/quality-checks/\${id}\`);
      alert("Quality Check Deleted Successfully");
      fetchQualityChecks();
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };
`;

const prodDeleteMethod = `
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Delete Production Order?");
    if (!confirmDelete) return;
    try {
      await api.delete(\`/production-orders/\${id}\`);
      alert("Production Order Deleted Successfully");
      fetchProductionOrders();
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };
`;

const matDeleteMethod = `
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Delete Material Record?");
    if (!confirmDelete) return;
    try {
      await api.delete(\`/material-consumptions/\${id}\`);
      alert("Material Record Deleted Successfully");
      fetchMaterials();
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };
`;

function processFile(file, type) {
  let content = fs.readFileSync(file, 'utf8');

  // Skip if already has Trash2
  if (content.includes('Trash2')) return;

  // 1. Add imports
  if (!content.includes('import Link')) {
    content = content.replace('import api from "@/lib/api";', 'import Link from "next/link";\nimport api from "@/lib/api";');
  }
  
  if (content.includes('from "lucide-react"')) {
    content = content.replace(/import {([^}]+)} from "lucide-react";/, (match, p1) => {
      return `import { ${p1.trim()}, Eye, Pencil, Trash2 } from "lucide-react";`;
    });
  } else {
    content = content.replace('import api from "@/lib/api";', 'import api from "@/lib/api";\nimport { Eye, Pencil, Trash2 } from "lucide-react";');
  }

  // 2. Add handleDelete
  const fetchMethodRegex = type === 'qc' ? /const fetchQualityChecks = async \(\) => {[\s\S]*?};\s*/ :
                           type === 'prod' ? /const fetchProductionOrders = async \(\) => {[\s\S]*?};\s*/ :
                           /const fetchMaterials = async \(\) => {[\s\S]*?};\s*/;
                           
  const deleteMethod = type === 'qc' ? qcDeleteMethod : type === 'prod' ? prodDeleteMethod : matDeleteMethod;
  content = content.replace(fetchMethodRegex, match => match + deleteMethod);

  // 3. Add column header
  content = content.replace(/<th className="px-6 py-4([^"]*)">\s*Status\s*<\/th>/, match => match + '\n          <th className="px-6 py-4 text-center text-text-secondary">\n            Actions\n          </th>');

  // 4. Add column body
  const linkBase = type === 'qc' ? '/manufacturing-manager/quality-check' :
                   type === 'prod' ? '/manufacturing-manager/production' :
                   '/manufacturing-manager/material';
                   
  const actionsHtml = `
              <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                  <Link
                    href={\`${linkBase}?tab=details&id=\${item.id}\`}
                    className="rounded-lg bg-background-tertiary p-2 text-blue-400 hover:bg-blue-500 hover:text-text-primary"
                  >
                    <Eye size={18} />
                  </Link>
                  <Link
                    href={\`${linkBase}?tab=edit&id=\${item.id}\`}
                    className="rounded-lg bg-background-tertiary p-2 text-yellow-400 hover:bg-yellow-500 hover:text-text-primary"
                  >
                    <Pencil size={18} />
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-lg bg-background-tertiary p-2 text-red-400 hover:bg-red-500 hover:text-text-primary"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
`;

  // Insert before the end of the table row
  content = content.replace(/<\/tr>\s*\)\)/g, match => actionsHtml + match);

  // Note: some files use <tr key={item.id}> directly inside map
  // we need to be careful. In the TSX, it's `</tr>\n\n          ))`
  fs.writeFileSync(file, content);
  console.log('Updated', file);
}

// Quality Checks
qcf.forEach(f => processFile(path.join(basePath, 'quality-check', f), 'qc'));

// Production
['CompletedProduction.tsx', 'WorkInProgress.tsx'].forEach(f => processFile(path.join(basePath, 'production', f), 'prod'));

// Material
['DiamondConsumption.tsx', 'SilverConsumption.tsx', 'StoneConsumption.tsx'].forEach(f => processFile(path.join(basePath, 'material-consumption', f), 'mat'));
