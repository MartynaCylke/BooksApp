import { cp } from "node:fs/promises";

await cp("src", "dist", {
  recursive: true,
  filter(source) {
    return !source.includes("/sass") && !source.endsWith("/.gitkeep");
  },
});
