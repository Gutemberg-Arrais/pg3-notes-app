const { save, load } = require("./fileManager")

function add(title, body) {
 const data = load()
 const isExists = data.find(value => value.title === title && value.body === body)
 if(isExists) {
    return console.log('Note already exists: ', title)
 }
 data.push({title, body})
 console.log(title, body)  
 save(data) 
 console.log("New note added!")
}

function remove(title) {
    const data = load()
    const isExists = data.find(value => value.title === title)
    
    if(!isExists) {
        return console.log('Note not exists: ', title)
    }

    data.filter(value => {
        return value.title !== title
    })

    save(data)
    return console.log('Data removed: ', title)
}

function list() {
    return console.log(load())
}

function read(title) {
    const data = load()
    const found = data.find(value => value.title === title)
    if(found) return console.log(found)
    return console.log('Note not exists')
}



module.exports = {
    add, list, load, read, remove, save
}