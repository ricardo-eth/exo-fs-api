const fs = require('fs')

if (process.argv.length < 3) {
  console.log(`usage: node append.js source destination`)
  process.exit(1) 
}

let content = ''

// boucle sur toutes les rentrées sauf le dernier avec - 1
for (let i = 2; i < process.argv.length - 1; i++) {

   // check if the path exist
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Error: ${process.argv[i]} does not exist`)
    process.exit(1)
  }

    // check if the value is a file
  const stats = fs.statSync(process.argv[i])

  if (!stats.isFile(process.argv[i])) {
    console.log(`${process.argv[i]} is not a file`)
    process.exit(1)
  }

  // lecture du contenu des fichiers puis les stockés dans 'content' 
  content += fs.readFileSync(process.argv[i], 'utf-8') + ' '

}


// fs.appendFileSync(path, data)
fs.appendFileSync(process.argv[process.argv.length - 1], content)
