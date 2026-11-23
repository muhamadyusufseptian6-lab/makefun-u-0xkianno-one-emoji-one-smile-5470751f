// One Emoji, One Smile — make.fun entry
// Writes exactly one emoji to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic, stdlib-only, Node 22.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The one emoji: heart hands (U+1FAF6) — two hands shaping a heart
// and offering it to whoever is looking. Warm at first glance,
// universal, a deliberate pick rather than the first smiley that
// comes to mind, and fine coming from a stranger: an offering,
// not an intimacy.
const EMOJI = "\u{1FAF6}";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), EMOJI, "utf8");
