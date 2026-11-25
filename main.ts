// SPDX-License-Identifier: MIT
// Unsent: The Micro-Confession Sprint.
// Writes one two-part micro-confession to /output/entry.txt: a "To:" line
// naming who the message was meant for, followed by the unsent message
// itself on exactly one line, with no explanation after it.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 260 characters;
// the message line itself is at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = [
  "To: my older brother",
  "I still have your voicemail from the night Dad died — “call me back” — and I never did, because I don’t know how to talk to the brother who grieved alone.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${ENTRY}\n`, "utf8");
