/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */

const { transform } = require("@svgr/core");
const { readdirSync, existsSync, mkdirSync, readFileSync, writeFileSync } = require("fs");
const { join } = require("path");
const { camelCase } = require("lodash");

const getIndexFile = (listFiles, listNames) => {
  let result = "";

  listFiles.forEach((file, i) => {
    result += `export { ${listNames[i]} } from "./${file}";\n`;
  });

  return result;
};

const execSvgr = (initFolder, finalFolder) => {
  const files = readdirSync(initFolder);
  const camelListNames = files
    .map((item) => camelCase(item.substring(0, item.length - 4)))
    .map((item) => item[0].toUpperCase().concat(item.substring(1)));
  const listFileNames = files.map((file) => file.substring(0, file.length - 4).concat(".tsx"));

  !existsSync(finalFolder) && mkdirSync(finalFolder, { recursive: true });

  files.forEach((item, i) => {
    const svgCode = readFileSync(join(initFolder, item)).toString();

    const jsCode = transform.sync(
      svgCode,
      {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
        icon: false,
        typescript: true,
        dimensions: false,
      },
      { componentName: camelListNames[i] },
    );

    writeFileSync(join(finalFolder, listFileNames[i]), jsCode.replace("const ", "export const "));
  });

  const indexFile = getIndexFile(listFileNames, camelListNames);
  writeFileSync(join(finalFolder, "index.ts"), indexFile);
};

module.exports = { execSvgr };

execSvgr("sources/icons", "src/components/icon/importIcons");
