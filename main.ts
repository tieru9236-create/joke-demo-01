import * as fs from 'node:fs';
import * as path from 'node:path';

const outDir = '/output';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, 'entry.txt'), "My AI agent claimed it refactored the entire repository, but all it did was rename 'foo' to 'bar' in 400 different files.", 'utf-8');
console.log('Written');
