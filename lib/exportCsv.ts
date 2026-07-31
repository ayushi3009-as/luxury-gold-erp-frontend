export function exportToCsv(filename: string, rows: any[]) {
  if (!rows || !rows.length) {
    alert("No data to export");
    return;
  }
  const separator = ',';
  
  // Extract keys taking care to skip complex objects if needed, but for simplicity we take all keys of first object
  const keys = Object.keys(rows[0]);
  
  const csvContent =
    keys.join(separator) +
    '\n' +
    rows.map(row => {
      return keys.map(k => {
        let cell = row[k] === null || row[k] === undefined ? '' : row[k];
        
        // Handle object serialization
        if (typeof cell === 'object') {
          cell = JSON.stringify(cell);
        } else {
          cell = cell.toString().replace(/"/g, '""');
        }

        if (cell.search(/("|,|\n)/g) >= 0) {
          cell = `"${cell}"`;
        }
        return cell;
      }).join(separator);
    }).join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
