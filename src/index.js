const yargs = require('yargs')
const { add, remove, list, read} = require('./notes')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            typeof: 'string'
        },
        body: {
            describe: 'Note body content',
            demandOption: true,
            typeof: 'string'
        }
    },
    handler: (argv) => {
        try {
            const {title, body} = argv
            return add(title, body)
        } catch (error) {
            console.log(error)   
        }
    } 
})

yargs.command({
   command: 'remove',
   describe: 'Remove a note',
   builder: {
    title: {
        describe: 'note title',
        demandOption: true,
        typeof: 'string'
    },
},
handler: (argv) => {
    const {title} = argv
    return remove(title)
} 
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        return list()
    } 
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            typeof: 'string'
        },
    },
    handler: (argv) => {
        const {title} = argv
        return read(title)
    } 
 })

yargs.parse()
