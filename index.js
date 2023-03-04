
// Desenvolva aqui a sua lógica
function camelCase(string) { 
    let control = '' // Variável de controle
    if(string){
        let toCamelCase = string.split(/[' ']/g); // Criando variável que receberá a string e removerá os espaços vazios entre as palavras
        for (let i in toCamelCase){ 
            if(i > 0){ // 
                control += toCamelCase[i].charAt(0).toUpperCase() + toCamelCase[i].slice(1)
            }else{
                control += toCamelCase[i].charAt(0).toLowerCase() + toCamelCase[i].slice(1)
            }
        }
    }else{
        return control
    }
    return control
}
// Testes, não precisa comentar, apenas rodar seu código e saberá o retorno!

console.log(camelCase("camel case") == "camelCase" ? '\033[32mPASS - camelCase \033' : '\033[31mFAIL - ' +  camelCase("camel case") + "\033" )
console.log(camelCase("pastel muito bom") == "pastelMuitoBom" ? '\033[32mPASS - pastelMuitoBom \033' : '\033[31mFAIL - ' +  camelCase("pastel muito bom") + "\033" )
console.log(camelCase("testando uma frase maior") == "testandoUmaFraseMaior" ? '\033[32mPASS - testandoUmaFraseMaior \033' : '\033[31mFAIL - ' +  camelCase("testando uma frase maior") + "\033" )
console.log(camelCase("CamelCase") == "camelCase" ? '\033[32mPASS - camelCase \033' : '\033[31mFAIL - ' +  camelCase("CamelCase") + "\033" )
