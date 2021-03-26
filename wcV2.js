const fs = require('fs')

if (process.argv.length === 3){
  if (
    process.argv[2] !== '-l' ||
    process.argv[2] !== '-w' ||
    process.argv[2] !== '-c' ){
      console.log('usage: node wcV2.js -l or -w or -c file.txt')
      process.exit(1)
    } 
}

let text = fs.readFileSync(process.argv[3], 'utf-8')

let line = text.split('\n').length
let word = text.split(' ').length
let caractere = text.length

switch (process.argv[2]) {
  case '-l':
    console.log(line + ' ' + process.argv[3])
  break
  case '-w':
    console.log(word + ' ' + process.argv[3])
  break
  case '-c':
    console.log(caractere + ' ' + process.argv[3])
  break
}
