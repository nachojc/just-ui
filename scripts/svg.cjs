/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const { readdirSync, existsSync, mkdirSync } = require("fs");
const { join } = require("path");
const { camelCase } = require("lodash");

const initFolder = join(__dirname, "icons");
const finalFolder = join(__dirname, "finalIcon");

const listFileNames = readdirSync(initFolder);

const camelListNames = listFileNames.map((item) => camelCase(item.substring(0, item.length - 3)));

if (!existsSync(finalFolder)) {
  mkdirSync(finalFolder, { recursive: true });
}
console.log("--------");
console.log(camelListNames);
