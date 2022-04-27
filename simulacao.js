
const margem = document.getElementById("margem").value
const botao = document.getElementById("botao")
const props = document.getElementById("result")


botao.addEventListener("click", ()=> {
    const nome = document.getElementById("nome").value
    const margem = document.getElementById("margem").value    
    let margem1 = parseFloat(margem)
    let cred = margem1 * 37.07;
    let resposta = `${nome} o  crédito liberado com uma margem de R$ ${margem1.toFixed(2)} é de R$${cred.toFixed(2)} em 84 parcelas de R$ ${margem1.toFixed(2)}.`
    props.value = resposta
})
