
module.exports = {
    command: 'test [options]',
    describe: 'test output a+b',
    builder: {
        'a': {
            alias: 'a',
            default: 1,
            description: 'description a'
        },
        'b': {
            alias: 'b',
            default: 2,
            description: 'description b'
        }
    },
    handler: function (argv) {
        console.log(`test:a=${argv.a}, b=${argv.b},result=${argv.a + argv.b}`)
    }
}

