const fs = require('fs')

let n = 10

lastElement = process.argv[process.argv.length -1]

if (!fs.existsSync(lastElement)) {
  console.log(`Error: ${lastElement} does not exist`)
  process.exit(1)
}

const stats = fs.statSync(lastElement)
if (!stats.isFile()) {
  console.log(`Error: ${lastElement} is not a file`)
  process.exit(1)
}

let text = fs.readFileSync(lastElement, 'utf-8')
const lineT = text.split('\n')

//check if flag is active
if (process.argv.length === 5){
  if (process.argv[2] !== '-n' || isNaN(Number(process.argv[3]))){
    console.log('usage: node tailv2.js -n 20 file.txt')
    process.exit(1)
  } else {
    n = Number(process.argv[3])
  }
}

console.log(lineT.slice(lineT.length - n).join('\n'))

