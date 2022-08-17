/* 
 * [abc] -> conjunto 
 * [^] -> negação 
 * [^abc] -> Tudo que nao está aqui dentro
 * [-] -> Range. Tem que ser crescente, Ex: [0-9] de 0 a 9 ou [a-s], se colocar com o + no final, retorna a sequencia
*/

const { alfabeto } = require('./base')

console.log(alfabeto.match(/[0-9]/g))
console.log(alfabeto.match(/[0-9]+/g))
//ou
console.log(alfabeto.match(/\d/g)) //Pra negar, basta colocar a letra em maiusculo
console.log(alfabeto.match(/\d+/g))

console.log(alfabeto.match(/[a-z]/g))
console.log(alfabeto.match(/[A-Z]+/g))


console.log(alfabeto.match(/[a-zA-Z0-9]+/g))
console.log(alfabeto.match(/[a-zA-Z0-9]/g))
//ou
console.log(alfabeto.match(/\w+/g))
console.log(alfabeto.match(/\w/g))


console.log(alfabeto.match(/[^0-9]+/g))
console.log(alfabeto.match(/[^a-z]+/g))
console.log(alfabeto.match(/[^A-Z]+/g))
console.log(alfabeto.match(/[^'a-zA-Z0-9]+/g))


console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)) //unicode