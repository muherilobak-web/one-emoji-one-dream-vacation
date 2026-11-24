// One Emoji, One Dream Vacation — entry for the make.fun bounty.
// Output contract: /output/entry.txt holds exactly one emoji, a single
// Unicode code point (within the 1–8 character gate), no words, no spaces,
// and no trailing newline. The write is deterministic: every run produces
// the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🏝";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
