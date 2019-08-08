const chalk = require('chalk')
const getNotes = require('./notes.js')

const notes = getNotes()

console.log(chalk.green.inverse.bold('Success!'))

console.log(notes)


// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
// fs.writeFileSync('notes.txt', 'My name is Eric.')

// fs.appendFileSync('notes.txt', ' I now live in Cortlandt Manor, NY.')