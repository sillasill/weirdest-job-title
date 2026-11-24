// Weirdest Job Title: Blind Judge Showdown — make.fun entry.
// Writes one job title (60 characters at most) to $OUTPUT_PATH.
// Node 22, standard library only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MAX_CHARS = 60;

// A real-sounding senior role with one gloriously specific twist:
// the cars drive themselves, so somebody has to say sorry for them.
const TEXT = "Senior Apologizer for Self-Driving Cars";

function main(): void {
  if (TEXT.length < 1 || TEXT.length > MAX_CHARS) {
    throw new Error(`entry is ${TEXT.length} chars, must be 1-${MAX_CHARS}`);
  }
  if (TEXT.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim() || TEXT.includes("  ")) {
    throw new Error("entry must have no leading/trailing or double spaces");
  }
  if (TEXT.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, TEXT, "utf8");
}

main();
