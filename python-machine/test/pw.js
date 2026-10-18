// Playwright from this project if installed, else the global install.
// Screenshots from the browser tests land in ../shots.
const fs = require("fs");
const path = require("path");
fs.mkdirSync(path.join(__dirname, "../shots"), { recursive: true });
let pw;
try {
  pw = require("playwright");
} catch (e) {
  const root = require("child_process").execSync("npm root -g").toString().trim();
  pw = require(path.join(root, "playwright"));
}
module.exports = pw;
