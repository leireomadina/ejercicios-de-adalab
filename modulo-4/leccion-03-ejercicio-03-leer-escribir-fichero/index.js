const fs = require('fs'); 

const handleFile = (error, fileContent) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("El contenido del fichero es:", fileContent);
  }
}

fs.readFile("input-file.txt", "utf-8", handleFile);