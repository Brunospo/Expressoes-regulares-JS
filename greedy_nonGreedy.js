/* o . representa qualquer caractere exceto uma quebra de linha */

const { html } = require('./base')

//Selecionar qualquer tag dentro de <>, seu conteudo e o fechamento </>
console.log(html.match(/<.+>.+<\/.+>/g)) //Geedy (guloso) -> Seleciona o máximo possivel
console.log(html.match(/<.+?>.+?<\/.+?>/g)) //non-Geedy (não guloso) -> Seleciona o minimo possivel