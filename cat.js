const fs = require('fs')

if (process.argv.length !== 3) {
  console.log(`usage: node cat.js file`)
  process.exit(1) 
}

if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} does not exist`)
  process.exit(1)
}

const stats = fs.statSync(process.argv[2])
if (!stats.isFile()) {
  console.log(`Error: ${process.argv[2]} is not a file`)
  process.exit(1)
}

let text = fs.readFileSync(process.argv[2], 'utf-8')

console.log(text)