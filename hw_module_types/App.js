const fs = require('fs');
const path = require('path');

console.log("We are starting..........");

const pathToTheFiles = path.join(__dirname, 'test'); 

// geting the array of the files in the directory
let inputArr = [];
try {
    inputArr = fs.readdirSync(pathToTheFiles).filter(file => file.endsWith('.txt')); 
} catch (err) {
  console.error(`There is some problems with reading the Directory ${pathToTheFiles}: ${err.message}`);
}

const writeToFile = 'output.txt';

/**
 * Copies specified number of lines from each file in the input array to the output file.
 *
 * @param {string} dirPath - path to the directory with the files
 * @param {string[]} inputFiles - array of file names
 * @param {string} outputFile - name of the output file
 */
async function copyLinesFromFiles(dirPath, inputFiles, outputFile) {
  const writeStream = fs.createWriteStream(outputFile, { flags: 'w' });

  for (let i = 0; i < inputFiles.length; i++) {
    const fileName = inputFiles[i];
    const numLinesToCopy = i + 1;

    try {
      const filePath = path.join(dirPath, fileName);
      const fileContent = await fs.promises.readFile(filePath, 'utf8');
      const lines = fileContent.split('\n');

      // Copy the specified number of lines from the file to the output file
      for (let j = 0; j < Math.min(numLinesToCopy, lines.length); j++) {
        writeStream.write(lines[j] + '\n');
      }
    } catch (err) {
      console.error(`There is some problems with processing the file ${fileName}: ${err.message}`);
    }
  }

  writeStream.end();
  console.log(`The copy process is completed. Result file: ${outputFile}`);
}

// Starting the process
inputArr.length === 0 ? 
console.error(`In this directory ${pathToTheFiles}, no files txt found.`)
 : copyLinesFromFiles(pathToTheFiles, inputArr, writeToFile);


