
const fs = require('fs').promises;
const path = require('path');

async function sync(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const e of entries) {
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);

    if (e.isDirectory()) {
      await sync(s, d);
    } else {
      const sStat = await fs.stat(s);
      const dStat = await fs.stat(d).catch(() => null);
      if (!dStat || sStat.mtime > dStat.mtime) {
        await fs.copyFile(s, d);
        console.log('Synced:', e.name);
      }
    }
  }
}

const [,, src, dest] = process.argv;
sync(src, dest);
