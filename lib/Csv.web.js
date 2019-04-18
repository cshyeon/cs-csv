import Csv from './Core/Csv';

class CsvWeb extends Csv {
  static test() {
    console.log('i\'m web csv');
  }

  static writeCsv(csvString, fileName) {
    const csvBlob = new Blob(['\uFEFF', csvString], { type: 'text/csv; charset=utf-8' });
    const csvBlobUrl = URL.createObjectURL(csvBlob);
    this.downloadURI(csvBlobUrl, fileName);
  }

  static downloadURI(uri, name) {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    link.click();
  }

  static readCsvToAoa(fileBlob) {
    return new Promise((resolve, reject) => {
      CsvWeb.readCsv(fileBlob).then((csvString) => {
        if (csvString.match(/^[\ufeff]/)) {
          csvString = csvString.replace(/^[\ufeff]/, '');
        }

        const lines = csvString.split('\n');
        const aoa = lines.map(line => line.split(',')).filter(lineArr => !!lineArr[0]);

        resolve(aoa);
      }).catch(err => reject(err));
    });
  }

  static readCsv(fileBlob) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.readAsText(fileBlob);
      fr.onload = () => {
        resolve(fr.result);
      };
      fr.onerror = (err) => {
        reject(err);
      };
    });
  }
}

export default CsvWeb;
