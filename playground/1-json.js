const fs = require("fs")

// const book = {
    // title: 'Ego is the Enemy',
    // author: 'Alex Kazanski',
// }
// 
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)


const jsonBuffer = fs.readFileSync('1-json.json')
let jsonData = JSON.parse(jsonBuffer)
jsonData.name = 'Alex Kazanski'
jsonData.age = '28'
jsonData = JSON.stringify(jsonData)
fs.writeFileSync("1-json.json", jsonData)