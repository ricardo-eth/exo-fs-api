const fs = require('fs')

if (process.argv.length < 3) {
  console.log(`usage: node cat.js file file file etc`)
  process.exit(1) 
}

let content = ''
for (let i = 2; i < process.argv.length; i++) {
  
  // check if the path exist
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Error: ${process.argv[i]} does not exist`)
    process.exit(1)
  }

  //check if the value is a file or a directory
  const stats = fs.statSync(process.argv[i])

  if (!stats.isFile(process.argv[i])) {
    console.log(`${process.argv[i]} is not a file`)
    process.exit(1)
  }

  content += fs.readFileSync(process.argv[i], 'utf-8') + ' '

}

console.log(content)