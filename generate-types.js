const fse = require("fs-extra");

const moduleName = "shared";

const tempTypesFile = "./tempTypes.d.ts";

console.log("Generating module definition file");

const writeToFile = (filePath, data) => {
  fse.writeFile(filePath, data, function (err) {
    if (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  });
};

const removeTempFile = () => {
  fse.remove(tempTypesFile, (err) => {
    if (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  });
};

const modifyFile = () => {
  const filename = tempTypesFile;
  let result = "";
  fse.readFile(filename, "utf8", function (err, data) {
    if (err) {
      console.error(JSON.stringify(err, null, 2));
    }
    // replace 'declare module "' with 'declare module "mf_one/"'
    const lines = data.split("\n");
    lines.forEach((line) => {
      if (line.includes('declare module "')) {
        line = line.replace(
          'declare module "',
          `declare module "${moduleName}/`
        );
        line = line.replace('/index"', '"');
      }
      result += line + "\n";
    });
    // create public folder if doesn't exist
    fse.ensureDir(`./static`, (err) => {
      if (err) {
        console.error(JSON.stringify(err, null, 2));
      }
    });
    writeToFile(`static/${moduleName}.d.ts`, result);
    removeTempFile();
  });
};

modifyFile();
