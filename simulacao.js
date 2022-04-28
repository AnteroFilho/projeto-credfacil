
const margem = document.getElementById("margem").value
const botao = document.getElementById("botao")
const props = document.getElementById("result")


botao.addEventListener("click", ()=> {
    const nome = document.getElementById("nome").value
    const margem = document.getElementById("margem").value    
    let margem1 = parseFloat(margem)
    let mformatado = margem1.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    let cred = margem1 * 37.07;
    let formatado = cred.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    let resposta = `${nome} o  crédito liberado com uma margem de ${mformatado} é de aproximadamente ${formatado} em 84 parcelas de ${mformatado}.`
    props.value = resposta
})
