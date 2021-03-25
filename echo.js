if (process.argv.length < 3) {
  console.log(`usage: node echo.js expression`)
  process.exit(1)
}

let expression = process.argv.slice(2).join(' ')

console.log(expression)