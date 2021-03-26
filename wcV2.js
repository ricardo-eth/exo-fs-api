const fs = require('fs')

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
