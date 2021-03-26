const fs = require('fs')

let text = fs.readFileSync(process.argv[2], 'utf-8')

let line = text.split('\n').length
let word = text.split(' ').length
let caractere = text.length

console.log(line + ' ' + word + ' ' + caractere + ' ' + process.argv[2])