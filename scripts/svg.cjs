/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } = require("fs");
const { join } = require("path");
const { camelCase } = require("lodash");

const initFolder = join(__dirname, "icons");
const finalFolder = join(__dirname, "finalIcon");

const templateFile = join(__dirname, "svg-template.tsx");
const svgComponentTemplate = "__SVG__";
const nameComponentTemplate = "__NAME__";

const listFileNames = readdirSync(initFolder);
const camelListNames = listFileNames
  .map((item) => camelCase(item.substring(0, item.length - 4)))
  .map((item) => item[0].toUpperCase().concat(item.substring(1)));

if (!existsSync(finalFolder)) {
  mkdirSync(finalFolder, { recursive: true });
}
if (existsSync(templateFile)) {
  const template = readFileSync(templateFile, { encoding: "utf8" });

  const finalFilesName = listFileNames.map((file) => file.substring(0, file.length - 4).concat(".tsx"));
  const nameReg = new RegExp(nameComponentTemplate, "g");
  const svgReg = new RegExp(svgComponentTemplate, "g");
  listFileNames.forEach((file, i) => {
    const initSvg = readFileSync(join(initFolder, file)).toString();
    writeFileSync(
      join(finalFolder, finalFilesName[i]),
      template.replace(nameReg, camelListNames[i]).replace(svgReg, initSvg.replace(">", " {...props}>")),
    );
    // console.log(camelListNames[i]);
  });
} else {
  throw new Error("No template file");
}
