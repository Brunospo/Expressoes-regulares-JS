const { texto } = require('./base')

const regEx = /João/gi
const regEx1 = /João|Maria/gi

// console.log(texto.match(regEx))
// console.log(texto.match(regEx1))
// console.log(texto.replace(/João|Maria/gi, 'Marcos'))
// console.log(texto.replace(/(João|Maria)/gi, 'x===$1===x')) /* Quando está assim em grupo, o valor não é substituido, e sim acrescentado a ele tudo o que está antes e depois do $1 (ou $2 ou $3... depende da quantidade de grupos) e esse simbolo se refere ao valor*/
console.log(texto.replace(/(João|Maria)/gi, (value) => `#####${value.toLocaleUpperCase()}#####`)) /* A mesma coisa do do cima, só que esse permite mais alterações no valor */