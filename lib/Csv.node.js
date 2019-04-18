import fs from 'fs';
import path from 'path';

import Csv from './Core/Csv';


/* Path 'resolve' function */
function resolvePath(pathOrName) {
  return path.resolve(__dirname, pathOrName);
}

class CsvNode extends Csv {
  static test() {
    console.log('i\'m Node csv');
  }

  static readCsvToAoa(fileName) {
    return new Promise((resolve, reject) => {
      Csv.readCsv(fileName).then((csvString) => {
        if (csvString.match(/^[\ufeff]/)) {
          csvString = csvString.replace(/^[\ufeff]/, '');
        }

        const lines = csvString.split('\r\n');
        const aoa = lines.map(line => line.split(',')).filter(lineArr => !!lineArr[0]);

        resolve(aoa);
      }).catch(err => reject(err));
    });
  }

  static readCsv(fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile(resolvePath(fileName), 'utf8', (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });
  }

  static writeCsv(csvString, fileName) {
    return new Promise((resolve, reject) => {
      fs.writeFile(resolvePath(fileName), csvString, { encoding: 'utf8' }, (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });
  }

  static writeAoaToCsv(aoa, fileName) {
    const csvData = Csv.aoaToCsvString(aoa);
    const csvPrefix = '\ufeff';

    return Csv.writeCsv(csvPrefix + csvData, fileName);
  }

  static writeObjectArrayToCsv({ data, fileName, fields }) {
    const csvData = Csv.objectArrayToCsvString(data, fields);
    const csvPrefix = '\ufeff';

    return Csv.writeCsv(csvPrefix + csvData, fileName);
  }
}

export default CsvNode;
