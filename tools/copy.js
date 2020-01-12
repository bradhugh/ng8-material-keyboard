const fs = require('fs');

if (process.argv.length !== 4) {
    console.error("Usage: node copy.js <source> <target>");
    process.exit(1);
}

const source = process.argv[2];
const target = process.argv[3];

console.log(`Copying ${source} -> ${target}`);
fs.copyFileSync(source, target);