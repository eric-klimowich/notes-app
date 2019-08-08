const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'Your notes....'
}

const removeNote = function(title) {
    const notes = loadNotes()
    const editedNotes = notes.filter(function(note) {
        return note.title !== title
    })

    if (editedNotes.length < notes.length) {
        saveNotes(editedNotes)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('Did not find a note with the title ' + title + '!'))
    }
    // console.log(notes)
    // console.log(editedNotes)
}

const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        // console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }

    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
// module.exports = getNotes