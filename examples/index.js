const Csv = require('../dist/Csv');
Csv.test()
// Csv.writeCsv && Csv.writeCsv(csvStr, 'test.csv');

// if (window) { // if detect browser
//   const form = document.querySelector('.upload-form');
//   const fileInput = form.querySelector('.upload-input');

//   function addEventListenerMultiple(el, events, fn) {
//     events.split(' ').forEach(event => el.addEventListener(event, fn));
//   }
//   addEventListenerMultiple(form, 'drag dragstart dragend dragover dragenter dragleave drop', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   });

//   fileInput.addEventListener('change', (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       Csv.readCsvToAoa(file).then((data) => {
//         console.log('read csv from input file!!!', data);
//       });
//     }
//   });

//   form.addEventListener('drop', (e) => {
//     const file = e.dataTransfer.files[0];
//     console.log('file', file);

//     Csv.readCsvToAoa(file).then((data) => {
//       console.log('read csv file!!!', data);
//     });
//   });
// }
// console.log(csvStr);
