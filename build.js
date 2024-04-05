#!/usr/bin/env node

"use strict";
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const pkgPath = path.resolve(process.cwd(), 'package.json');
if (!fs.existsSync(pkgPath)) {
    throw new Error("package.json not found");
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

if (!(pkg.name &&
    pkg.version &&
    pkg.description &&
    pkg.publisher)) {
    throw new Error(`You must specify name, version, description, and publisher in package.json file`);
}

let versions = pkg.version.split('.');
versions.push(parseInt(versions.pop()) + 1);
let latest = versions.join(".");
pkg.version = latest;

fs.writeFileSync(pkgPath, JSON.stringify(pkg));

try {
    execSync(`git commit -asm "v${latest}"`);
    execSync('git push');
    execSync('npm publish');
} catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
}
