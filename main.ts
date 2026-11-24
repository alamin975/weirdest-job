import { mkdirSync, writeFileSync } from "node:fs";

// The line below must stay byte-for-byte: a single line, no trailing newline.
const LINE = "Chief Vibe Officer";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
