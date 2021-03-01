const fs = require("fs");

const readFile = (fileName, callback) => {
  fs.readFile(fileName, "utf-8", (error, data) => {
    // console.log(fileName); // "./input-file.txt"
    if (error) {
      console.log("Error", error);
    } else {
      callback(data);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, error => {
    // console.log(fileName); // "./output-file.json"
    if (error) {
      console.log("Error", error);
    } else {
      callback();
    }
  });
};

readFile("./input-file.txt", fileContent => {
  const objectContent = {
    originalContent: fileContent,
    changedContent: fileContent.toUpperCase(),
    textLength: fileContent.length
  };
  
  const newFileContent = JSON.stringify(objectContent);

   writeFile("./output-file.json", newFileContent, () => {
     console.log("The file has been copied :)");
   })
});
