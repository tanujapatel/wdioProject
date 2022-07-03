var csvTestData = function () {
    let fs = require('fs');
    const parse = require('csv-parse/sync');
    const { resolve } = require('path');

    this.getCSVData = function (csvFile) {
        let tdFile = fs.readFileSync(csvFile);
        const testdata = parse.parse(tdFile, {
            columns: true,
            skip_empty_lines: true
        });
        console.log(testdata);
        return testdata;
    }
};

module.exports = new csvTestData();