import { basename, resolve, sep } from 'node:path';
import { rm } from 'node:fs/promises';

const projectRoot = resolve(process.cwd());
const outputDir = resolve(projectRoot, '_site');
if (basename(outputDir) !== '_site' || !outputDir.startsWith(`${projectRoot}${sep}`)) {
  throw new Error(`Refusing to clean outside the generated _site directory: ${outputDir}`);
}
await rm(outputDir, { recursive: true, force: true });
