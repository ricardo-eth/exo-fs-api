const fs = require('fs')

if (process.argv.length !== 4) {
  console.log(`usage: node cp.js source.txt destination.txt`)
  process.exit(1)
}

// check if source file exists
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} does not exist`)
  process.exit(1)
}

// check if source is file
const statsSource = fs.statSync(process.argv[2])
if (!statsSource.isFile()) {
  console.log(`Error: ${process.argv[2]} is not a file`)
  process.exit(1)
}


const stats = fs.statSync(process.argv[2])
if (!stats.isDirectory()) {
  console.log(`Error: ${process.argv[2]} is not a path`)
  process.exit(1)
}



// check if destination file is file
const statsDestination = fs.statSync(process.argv[3])

if (!statsDestination.isFile()) {
  console.log(`Error: ${process.argv[3]} is not a file`)
  process.exit(1)
}

// check if destination file exists
if (fs.existsSync(process.argv[3])) {
  console.log(`Error: ${process.argv[3]} is exist`)
  process.exit(1)
}

let sourceFile = process.argv[2]
let destinationFile = process.argv[3]

fs.copyFileSync(sourceFile, destinationFile);

console.log(`${process.argv[2]} was copied to ${process.argv[3]}`);