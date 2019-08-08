const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

const notes = getNotes()

console.log(chalk.green.inverse.bold('Success!'))
console.log(notes)

console.log(process.argv)
console.log(yargs.argv)

const command = process.argv[2]

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}