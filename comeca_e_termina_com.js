/* 
* ^ -> começa com
* $ -> termina com
* [^] -> negação
* m -> multiline
*/

const { cpfs, cpfs2 } = require('./base')

const cpf = '254.224.877-45'

const regExp1 = /(\d{3}\.){2}\d{3}-\d{2}/g
console.log(cpf.match(regExp1))

const regExp2 = /^(\d{3}\.){2}\d{3}-\d{2}$/g //Começa e termina exatamente com...
console.log(cpf.match(regExp2))
console.log(cpfs.match(regExp2))
console.log(cpfs2.match(regExp2))

const regExp3 = /^(\d{3}\.){2}\d{3}-\d{2}$/gm //checagem por linha
console.log(cpfs2.match(regExp3))