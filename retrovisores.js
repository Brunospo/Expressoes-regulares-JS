const { html2 } = require('./base')

console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHAHA $3 HAHAHA $4'))