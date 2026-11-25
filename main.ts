// Entry for make.fun: "Fortune Cookie Wisdom for Developers".
// Writes one fortune-cookie line for developers to the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "You will find the bug in the last place you look — because you stopped looking everywhere else first.";

// The output file holds exactly this one line plus a trailing newline,
// so every run produces the same bytes.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
console.log(`Wrote entry to ${join(outputDir, "entry.txt")}`);
