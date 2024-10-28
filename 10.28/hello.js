// console.log('Hello World')

// let i = 1
// let intervalID = setInterval(() => {
// 	console.log(i++)
// 	if (i == 6) clearInterval(intervalID)
// }, 1000)

//pobieranie z pliku
const fs = require('fs')

fs.readFile('example.txt', 'utf-8', (err, data) => {
    if(err) console.log("Blad podczas odczytu pliku: ", err);
    else console.log(data);
})
