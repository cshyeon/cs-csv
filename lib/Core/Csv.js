class Csv {
  constructor() {
  }

  /* Static */
  static aoaToObjArray(aoa) { // array of array형태의 csv 데이터를 => object array로 변환
    const fields = aoa[0];
    const values = aoa.slice(1); // field들은 제외한 순수 데이터
    const objArr = [];

    values.forEach((record) => {
      const dataObj = {};
      record.forEach((value, index) => {
        const fieldName = fields[index];
        dataObj[fieldName] = value;
      });

      objArr.push(dataObj);
    });

    return objArr;
  }

  /* Convert */
  static objectArrayToCsvString(arr, customFields) {
    const fields = customFields || [];
    if (!customFields) {
      for (const field in arr[0]) {
        fields.push(field);
      }
    }

    const aoa = arr.map((data) => {
      const line = [];
      fields.forEach((field) => { line.push(data[field]); });
      return line;
    });
    aoa.unshift(fields);

    return Csv.aoaToCsvString(aoa);
  }

  static aoaToCsvString(aoa) {
    return aoa.map(line => line.join(',')).join('\n');
  }
}

export default Csv;
