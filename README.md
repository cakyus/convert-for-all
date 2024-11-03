# convert-for-all

[![npm](https://img.shields.io/npm/v/convert-for-all.svg?style=flat-square)](https://www.npmjs.com/package/convert-for-all)
[![license](https://img.shields.io/github/license/thesuhu/convert-for-all?style=flat-square)](https://github.com/thesuhu/convert-for-all/blob/master/LICENSE)

Easily transform data between CSV, JSON, SQL, and other formats with ease.

## Installation

To install this package globally, use the following command:

```sh
npm install -g convert-for-all
```

## Usage
The main command provided by this package is convert. Below are the available commands and their usage:

- Convert JSON to SQL INSERT statements.
- More conversion features (CSV, XML, etc.) coming soon

### Convert JSON to SQL INSERT

```sh
cv json2sql <inputFile> [outputFile]
```

- `<inputFile>`: Path to the input JSON file.
- `[outputFile]`: (Optional) Path to the output SQL file. If not provided, the output file will be created in the same directory as the input file with the same name but with a `.sql` extension.

#### Example

```sh
cv json2sql data.json data.sql
```

If `data.sql` is not provided, the output will be saved as `data.sql` in the same directory as `data.json`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/thesuhu/convert-for-all).

If you find this useful, please ⭐ the repository. Any feedback is welcome.

You can contribute or you want to, feel free to [**Buy me a coffee! :coffee:**](https://saweria.co/thesuhu), I will be really thankfull for anything even if it is a coffee or just a kind comment towards my work, because that helps me a lot.

## License

This project is licensed under the [MIT](https://github.com/thesuhu/convert-for-all/blob/master/LICENSE) License - see the LICENSE file for details.

## Bugs and Issues

If you encounter any bugs or issues, please report them on the [GitHub Issues](https://github.com/thesuhu/convert-for-all/issues) page.