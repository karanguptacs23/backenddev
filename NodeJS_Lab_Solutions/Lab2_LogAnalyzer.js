
const fs = require('fs');
const readline = require('readline');

let total = 0, errors = 0, warnings = 0;

const rl = readline.createInterface({
  input: fs.createReadStream('app.log'),
  crlfDelay: Infinity
});

rl.on('line', line => {
  total++;
  if (line.includes('ERROR')) errors++;
  if (line.includes('WARN')) warnings++;
});

rl.on('close', () => {
  console.log('Total lines:', total);
  console.log('Errors:', errors);
  console.log('Warnings:', warnings);
});
