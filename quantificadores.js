/*
* {0,} ou * 0 ou n vezes
* {1,} ou + 1 ou n vezes
* {0,1} ou ? 0 ou 1 vez
* {m,n} minimo e maximo EX: {10,} min 10 e max n, {,10} de 0 a 10, {5,10} de 5 a 10 ou especifico {10}
*/

const { arquivos } = require('./base')

for (const arquivo of arquivos) {
  console.log(arquivo,arquivo.match(/\.jpe?g/gi))
  console.log(arquivo,arquivo.match(/\.jpe{0,1}g/gi))
}