import * as path from "@std/path";

export function convertJsonToSql(inputFile) {

    if (!inputFile) {
        console.error('Input file is required.');
        return;
    }

    // JSON.parse() require whole file content to be read.
    // so, reading file as asynchronous is useless.

    const decoder = new TextDecoder("utf-8");
    const bytes = Deno.readFileSync(inputFile);
    const text = decoder.decode(bytes);
    const data = JSON.parse(text);

    const tableName = path.basename(inputFile, path.extname(inputFile));
    const columns = Object.keys(data[0]);
    const values = data.map(row =>
        `(${columns.map(col => `'${row[col]}'`).join(', ')})`
    ).join(',\n');

    const sqlInsert = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES\n${values};`;
    console.log(sqlInsert);
}

