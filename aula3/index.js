 const calculadora  = require ('./calculadora')
 const minimist = require ('minimist')

 var argv = minimist(process.argv.slice(2))

 console.log(argv={nome:"Kathellin", idade:16})
  
 const nome = argv["nome"]
 const idade  = argv["idade"]

 console.log(`nome: ${nome} | idade: ${idade}`)
