
const fs = require('fs').promises;
const [,, command, ...args] = process.argv;

async function run() {
  try {
    switch (command) {
      case 'read':
        console.log(await fs.readFile(args[0], 'utf8'));
        break;
      case 'write':
        await fs.writeFile(args[0], args.slice(1).join(" "), 'utf8');
        console.log('File written');
        break;
      case 'copy':
        await fs.copyFile(args[0], args[1]);
        console.log('File copied');
        break;
      case 'delete':
        await fs.unlink(args[0]);
        console.log('File deleted');
        break;
      case 'list':
        (await fs.readdir(args[0])).forEach(f => console.log(f));
        break;
      default:
        console.log('Invalid command');
    }
  } catch (err) {
    console.error(err.message);
  }
}
run();
