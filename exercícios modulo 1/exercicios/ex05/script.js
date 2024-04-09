let vetor = []
var section = document.getElementById('info')
var select = document.getElementById('caixa')
function finalizar(){
    if(vetor.length == 0){
        alert('Coloque um número antes de finalizar')
    }else{
        vetor.sort(function(a,b){return a-b})
        let menor = vetor.slice()
        vetor.reverse()
        let media = soma()/vetor.length
        section.innerHTML = `Ao todo temos, ${vetor.length} números cadastrados.<br>O maior valor informado foi ${vetor[0]}.<br>O menor valor informado foi ${menor[0]}.<br>Somando todos os valores, temos ${soma()}.<br>A média dos valores digitados é ${media}`
    }
}
function adicionar(){
    var numtxt = document.getElementById('numtxt')
    var num = Number(numtxt.value)
    if(numtxt.value.length == 0){
        alert(`Coloque um número`)
    }else if(num < 1 || num > 100){
        alert(`Número colocado é maior que o permitido!`)
    }
    else if(vetor.indexOf(num) == -1){
        var valor = document.createElement('option')
        vetor.push(num)
        valor.textContent = `Valor ${num} adicionado.`
        select.appendChild(valor)
    }else{
        alert(`Número atualmente presente na lista, coloque outro número`)
    }
    section.innerHTML = ``
}
function limpar(){
    if(vetor.length == 0){
        alert('Não há nada a ser limpo!')
    }else{
        remover()
        }
        section.innerHTML = ``
     }

function remover(){
    for(c in vetor){
        let valor = document.getElementsByTagName('option')[0]
        select.removeChild(valor)
        vetor = []
}}

function soma(a = 0){
        for (c in vetor){
            a += vetor[c]
        }
        return a
}