const chalk = require('chalk')
const validator = require('validator')
const getNotes = require('./notes.js')
// const add = require('./utils.js')
// const name = require('./utils.js')
// require('./utils.js')

// const name = 'Eric'

// const sum = add(4, -2)

const notes = getNotes()

console.log(chalk.green.inverse.bold('Success!'))
// console.log(validator.isEmail('eric@example.com'))
// console.log(validator.isEmail('example.com'))
console.log(notes)
// console.log(sum)
// console.log(name)


// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
// fs.writeFileSync('notes.txt', 'My name is Eric.')

// fs.appendFileSync('notes.txt', ' I now live in Cortlandt Manor, NY.')