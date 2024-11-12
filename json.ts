const fs = require('fs');
const path = require('path');

function convertJsonToSql(inputFile, outputFile) {
    if (!inputFile) {
        console.error('Input file is required.');
        return;
    }

    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the input file:', err);
            return;
        }

        const jsonData = JSON.parse(data);
        const tableName = path.basename(inputFile, path.extname(inputFile));
        const columns = Object.keys(jsonData[0]);
        const values = jsonData.map(row =>
            `(${columns.map(col => `'${row[col]}'`).join(', ')})`
        ).join(',\n');

        const sqlInsert = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES\n${values};`;

        const outputFilePath = outputFile || path.join(path.dirname(inputFile), `${tableName}.sql`);
        fs.writeFile(outputFilePath, sqlInsert, 'utf8', (err) => {
            if (err) {
                console.error('Error writing the output file:', err);
                return;
            }
            console.log(`SQL INSERT statements have been written to ${outputFilePath}`);
        });
    });
}

module.exports = { convertJsonToSql };