

var foo = require('./foo'),
    base = require('./base.html'),
    header = require('./header/index');

document.write(header);
document.write(base);
document.write('hello world: ' + foo + ' baz');
