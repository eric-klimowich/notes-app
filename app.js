const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Adding a new note!', argv)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        console.log('Listing out all notes!')
    }
})

// add, remove, read, list

yargs.parse()
// console.log(yargs.argv)


// const notes = getNotes()

// console.log(chalk.green.inverse.bold('Success!'))
// console.log(notes)

// console.log(process.argv)
// console.log(yargs.argv)

// const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }