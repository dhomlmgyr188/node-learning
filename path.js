import path from "path";

const notes = '/users/dhomlmgyr/notes.txt'

console.log(path.dirname(notes));
 
console.log(path.basename(notes));

console.log(path.extname(notes));

const name = 'abdulrahman'

console.log(path.join('/', 'users', name, 'index.js'))

console.log('-------------------');

console.log(path.parse(notes))