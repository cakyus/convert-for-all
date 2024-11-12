import { convertJsonToSql } from "./json.ts";

// Ambil argumen dari command line
const [, , command, inputFile, outputFile] = process.argv;

if (!command || !inputFile) {
    console.error('Usage: \x1b[35mcv\x1b[0m \x1b[32m<command>\x1b[0m \x1b[33m<inputFile>\x1b[0m [\x1b[33moutputFile\x1b[0m]');
    process.exit(1);
}

switch (command) {
    case 'json2sql':
        convertJsonToSql(inputFile, outputFile);
        break;
    default:
        console.error(`Unknown command: ${command}`);
        process.exit(1);
}
