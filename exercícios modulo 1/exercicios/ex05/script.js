let vetor = []
var section = document.getElementById('info')
var select = document.getElementById('caixa')
numtxt.focus()

function finalizar(){
    if(vetor.length == 0){
        alert('Coloque um número antes de finalizar')
    }else{
        vetor.sort(function(a,b){return a-b})
        let menor = vetor.slice()
        vetor.reverse()
        let media = soma()/vetor.length
        section.innerHTML = `Ao todo temos, ${vetor.length} números cadastrados.<br>O maior valor informado foi ${vetor[0]}.<br>O menor valor informado foi ${menor[0]}.<br>Somando todos os valores, temos ${soma()}.<br>A média dos valores digitados é ${media}`
        numtxt.focus()
    }
}
function adicionar(){
    var numtxt = document.getElementById('numtxt')
    var num = Number(numtxt.value)
    if(vazio(numtxt.value.length) == true || vazio(num) == true || dentro(num,vetor) == true){    
    }else{
        var valor = document.createElement('option')
        vetor.push(num)
        valor.textContent = `Valor ${num} adicionado.`
        select.appendChild(valor)
    }
    section.innerHTML = ``
    numtxt.value = ''
    numtxt.focus()
}
function limpar(){
    if(vetor.length == 0){
        alert('Não há nada a ser limpo!')
    }else{
        remover()
    }
    section.innerHTML = ``
    numtxt.focus()
     }

// Funções sem botão mas necessárias ⬇

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
function vazio(n){
    if (n == 0){
        alert('Coloque um número')
        numtxt.focus()
        return true
    }else if(n < 1 || n > 100){
        alert('Número acima ou abaixo do permitido!')
        numtxt.focus()
        return true
    }
}
function dentro(n,v){
    if(v.indexOf(n) == -1){
        return false
    }else{
        alert(`Número atualmente presente na lista, coloque outro número`)
        numtxt.focus()
        return true
    }
}