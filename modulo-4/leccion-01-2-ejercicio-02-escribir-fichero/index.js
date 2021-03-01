const fs = require("fs");

const textContent = "Lorem ipsum";
const objectContent = {
  originalContent: textContent,
  changedContent: textContent.toUpperCase(),
  textLenght: textContent.length,
};

// Converts a JS object or value to a JSON string 
const textData = JSON.stringify(objectContent);

const handleWriteFile = (error) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("The file has been saved");
  }
};

fs.writeFile("output.txt", textData, handleWriteFile);
