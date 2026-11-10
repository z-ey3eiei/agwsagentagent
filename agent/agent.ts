import { defineAgent } from "eve";

export default defineAgent({
  "model": "nvidia/nemotron-nano-12b-v2-vl",
  "reasoning": "medium",
  "compaction": {
    "threshold": 0.7
  }
});
