//Codificação de um sistema de contagem de peças
//encontro remoto 1

let pesoPecas = 300 //peso deve ser maior que 100g

let nomePecas = "disco" //tamamho do nome deve ser maior que 2 caracteres

let quantidadePecas = 9 //quantidade de pecas nao pode ser maior que 10

if (quantidadePecas < 10) {
    console.log("lista de pecas ainda tem espaco , peca pode ser cadastrada")
    
    if (nomePecas.length > 2) {
        console.log("nome ok")

        if (pesoPecas >= 100) {
            console.log("Peso ok,peca cadastrada com sucesso")
        }else{
            console.log("peso inferior a 100g, a peca nao pode ser cadastrada")
        }
    
    
    }else{
        console.log("nome da peca menor que dois caracteres, nao pode ser cadastrada")
    }


}else{
    console.log("lista de pecas ja esta completa, nao e possivel cadastrar mais pecas")
}