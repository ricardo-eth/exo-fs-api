const fs = require('fs')

let FILE = process.argv[process.argv.length -1]

let text = fs.readFileSync(FILE, 'utf-8')

if (process.argv.length !== 3 && process.argv.length !== 4) {
  console.log(`'usage: node wcV2.js [-l, -w, -c] file.txt`)
  process.exit(1)
}

let line = text.split('\n').length
let word = text.split(' ').length
let caractere = text.length

if (process.argv.length === 4){
  switch (process.argv[2]) {
    case '-l':
      console.log(`${line} ${FILE}`)
    break;
    case '-w':
      console.log(`${word} ${FILE}`)
    break;
    case '-c':
      console.log(`${caractere} ${FILE}`)
    break;
    default:
    console.log('usage: node wcV2.js -l or -w or -c file.txt')
  }
process.exit(1)
}

console.log(`${line} ${word} ${caractere} ${FILE}`)




