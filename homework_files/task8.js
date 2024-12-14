// מגישים: 
// יבגני נמצ'נקו 
// שמיאקין לאוניד  
// כיתה 48-5

const fs = require('fs');


/**
* Function for reading a JSON file, counting the number of users and writing their names and numbers to separate files.
* @param {string} inputFile - Name of the JSON file with user information.
* @param {string} userCountFile - Name of the file where the number of users will be written.
* @param {string} userNamesFile - Name of the file where all user names will be written.
*/
function processUserFile(inputFile, userCountFile, userNamesFile) {
    try {
        const data = fs.readFileSync(inputFile, 'utf8');
        const users = JSON.parse(data);

        if (!Array.isArray(users)) {
            throw new Error('The JSON file should contain an array of users..');
        }

        const userCount = users.length;
        const userNames = users.map(user => user.name).filter(Boolean); // Extract usernames

       // Write the number of users to the file
        fs.writeFileSync(userCountFile, `Number of users: ${userCount}`, 'utf8');
        console.log(`The number of users is written to the file: ${userCountFile}`);

        // We write the names of all users to a file
        fs.writeFileSync(userNamesFile, userNames.join('\n'), 'utf8');
        console.log(`User names are written to the file: ${userNamesFile}`);
    } catch (error) {
        console.error(`Error processing file: ${error.message}`);
    }
}

// File names & output file name
const inputFile = 'users.json'; 
const userCountFile = 'user_count.txt'; 
const userNamesFile = 'user_names.txt';

processUserFile(inputFile, userCountFile, userNamesFile);
