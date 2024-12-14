// מגישים: 
// יבגני נמצ'נקו 
// שמיאקין לאוניד  
// כיתה 48-5

const fs = require('fs');

/**
* Function to merge the contents of three files according to the specified rule.
* @param {string} file1 - Name of the first file.
* @param {string} file2 - Name of the second file.
* @param {string} file3 - Name of the third file.
* @param {string} outputFile - Name of the output file.
*/
function mergeFiles(file1, file2, file3, outputFile) {
    const file1Lines = fs.readFileSync(file1, 'utf8').split('\n');
    const file2Lines = fs.readFileSync(file2, 'utf8').split('\n');
    const file3Lines = fs.readFileSync(file3, 'utf8').split('\n');

    let maxLength = Math.max(file1Lines.length, file2Lines.length, file3Lines.length);
    let mergedContent = '';

    let lineCount = 1;
    while (lineCount <= maxLength) {
        for (let i = 0; i < lineCount; i++) {
            if (lineCount - 1 < file1Lines.length) {
                mergedContent += file1Lines[lineCount - 1 + i] + '\n';
            }
            if (lineCount - 1 < file2Lines.length) {
                mergedContent += file2Lines[lineCount - 1 + i] + '\n';
            }
            if (lineCount - 1 < file3Lines.length) {
                mergedContent += file3Lines[lineCount - 1 + i] + '\n';
            }
        }
        
        lineCount++;
    }

    fs.writeFileSync(outputFile, mergedContent.trim(), 'utf8');
    console.log(`File ${outputFile} successfully created.`);
}

// File names & output file name
const file1 = 'file1.txt'; 
const file2 = 'file2.txt'; 
const file3 = 'file3.txt'; 
const outputFile = 'output.txt'; 

mergeFiles(file1, file2, file3, outputFile);
