const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes....'

const readNote = title => {
    console.log(title)
}

const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.blue.inverse('Your notes!'))
    return notes.forEach(note => {
        console.log(note.title)
    });
}

const removeNote = title => {
    const notes = loadNotes()
    const editedNotes = notes.filter(note => note.title !== title)

    if (editedNotes.length < notes.length) {
        saveNotes(editedNotes)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('Did not find a note with the title ' + title + '!'))
    }
    // console.log(notes)
    // console.log(editedNotes)
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
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

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
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
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
// module.exports = getNotes