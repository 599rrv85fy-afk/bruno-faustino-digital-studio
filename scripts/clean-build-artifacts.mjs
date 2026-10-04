import { readdir, unlink } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

// Only the generated project dist; never follow directory symlinks.
const dist = fileURLToPath(new URL("../dist/", import.meta.url));
async function clean(directory) {
  let removed = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) removed += await clean(path);
    else if (entry.name === ".DS_Store") {
      await unlink(path);
      removed++;
    }
  }
  return removed;
}
console.log(`Build hygiene: removed ${await clean(dist)} .DS_Store file(s).`);
