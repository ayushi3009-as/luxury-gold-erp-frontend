const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let i = 0;
    (function next() {
      let file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
};

const replaceColors = (content) => {
  return content
    // Text colors
    .replace(/\btext-white\b/g, 'text-text-primary')
    .replace(/\btext-white\/90\b/g, 'text-text-primary/90')
    .replace(/\btext-white\/80\b/g, 'text-text-primary/80')
    .replace(/\btext-white\/70\b/g, 'text-text-secondary')
    .replace(/\btext-white\/60\b/g, 'text-text-secondary/80')
    .replace(/\btext-white\/50\b/g, 'text-text-secondary/60')
    .replace(/\btext-white\/40\b/g, 'text-text-secondary/50')
    .replace(/\btext-white\/30\b/g, 'text-text-secondary/40')
    .replace(/\btext-white\/20\b/g, 'text-text-secondary/30')
    .replace(/\btext-white\/10\b/g, 'text-text-secondary/20')
    .replace(/\btext-white\/5\b/g, 'text-text-secondary/10')
    // Background colors (white-based usually meant for overlays on dark bg)
    // In light mode, these should be dark overlays, so we map them to text-primary with opacity
    .replace(/\bbg-white\/5\b/g, 'bg-text-primary/5')
    .replace(/\bbg-white\/10\b/g, 'bg-text-primary/10')
    .replace(/\bbg-white\/20\b/g, 'bg-text-primary/20')
    // Background colors (black-based usually meant for dark surface backgrounds)
    // We map these to semantic backgrounds
    .replace(/\bbg-black\/10\b/g, 'bg-background-secondary')
    .replace(/\bbg-black\/20\b/g, 'bg-background-tertiary')
    .replace(/\bbg-black\/30\b/g, 'bg-background-tertiary')
    .replace(/\bbg-black\/40\b/g, 'bg-background-tertiary')
    .replace(/\bbg-black\/50\b/g, 'bg-background-primary')
    .replace(/\bbg-black\/60\b/g, 'bg-background-primary')
    .replace(/\bbg-black\/70\b/g, 'bg-background-primary')
    .replace(/\bbg-black\/80\b/g, 'bg-background-primary')
    .replace(/\bbg-black\/90\b/g, 'bg-background-primary')
    .replace(/\bbg-black\b/g, 'bg-background-primary')
    .replace(/\bbg-\[\#111111\]\b/g, 'bg-background-primary')
    // Border colors
    .replace(/\bborder-white\/5\b/g, 'border-border-theme')
    .replace(/\bborder-white\/10\b/g, 'border-border-theme')
    .replace(/\bborder-white\/20\b/g, 'border-border-theme')
    .replace(/\bborder-white\/30\b/g, 'border-border-theme')
    // Placeholder colors
    .replace(/\bplaceholder-white\/20\b/g, 'placeholder-text-secondary/50')
    .replace(/\bplaceholder-white\/30\b/g, 'placeholder-text-secondary/50')
    .replace(/\bplaceholder-white\/40\b/g, 'placeholder-text-secondary/60')
    // Divide colors
    .replace(/\bdivide-white\/5\b/g, 'divide-border-theme')
    .replace(/\bdivide-white\/10\b/g, 'divide-border-theme')
    // Hover text
    .replace(/\bhover:text-white\b/g, 'hover:text-text-primary')
    .replace(/\bgroup-hover:text-white\b/g, 'group-hover:text-text-primary')
    // from-white to-white
    .replace(/\bfrom-white\b/g, 'from-text-primary')
    .replace(/\bto-white\/70\b/g, 'to-text-secondary')
    .replace(/\bto-white\/50\b/g, 'to-text-secondary/80')
};

const dirs = [path.join(__dirname, 'app'), path.join(__dirname, 'components')];

dirs.forEach(dir => {
  walk(dir, (err, files) => {
    if (err) throw err;
    const tsxFiles = files.filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
    
    tsxFiles.forEach(file => {
      const original = fs.readFileSync(file, 'utf8');
      const updated = replaceColors(original);
      
      if (original !== updated) {
        fs.writeFileSync(file, updated);
        console.log(`Updated colors in ${file}`);
      }
    });
  });
});
