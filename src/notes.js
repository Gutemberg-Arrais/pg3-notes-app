const fs = require('fs')

function loadData() {
    try {
        return JSON.parse((fs.readFileSync('./data.json')).toString())
    } catch (error) {
        return []
    }
}

function add(title, body) {
 const data = loadData()
 data.push({title, body})
 console.log(title, body)  
 saveData(data) 
 console.log("New note added!")
}

function remove(title) {
    const data = loadData()
    const isExists = data.find(value => value.title === title)
    
    if(!isExists) {
        return console.log('Note not exists: ', title)
    }

    data.filter(value => {
        return value.title !== title
    })

    saveData(data)
    return console.log('Data removed: ', title)
}

function list() {
    return console.log(loadData())
}

function read(title) {
    const data = loadData()
    return console.log(data.find(value => value.title === title))
}

function saveData(data) {
    if(!data) return
    return fs.writeFileSync('./data.json', JSON.stringify(data))
}

module.exports = {
    add, list, loadData, read, remove, saveData
}