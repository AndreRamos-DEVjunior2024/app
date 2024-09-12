// let meta = {
//     value: 'Ler um livro por mês',
//     checked:false,
// }

// let metas = [
//     meta,
//     {
//         value: "Caminhar 20 minutos todos os dias",
//         checked:false
//     }
// ]

// console.log (metas[0].value)

const start = ( ) => {
    
    while (true){
        let opcao = "sair"
        switch(opcao){
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return    
        }
    }

}

start()