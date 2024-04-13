var res = document.getElementById('res')
var contatxt = document.getElementById('conta')
var saldotxt = document.getElementById('saldo')
var debitotxt = document.getElementById('debito')
var creditotxt = document.getElementById('credito')
var contaltxt = document.getElementById('contal')
var nometxt = document.getElementById('nome')
let limpar = ()=>{contatxt.value = '', saldotxt.value = '', debitotxt.value = '', creditotxt.value = '',nometxt.value = ''} //? Limpa os inputs.
var vcontas = {conta: [69696969], saldo:[Infinity], nome:['Halinhu']}
function registrar(){
    var conta = Number(contatxt.value)
    var saldo = Number(saldotxt.value)
    var debito = Number(debitotxt.value)
    var credito = Number(creditotxt.value)
    var nome = nometxt.value
    if(contatxt.value.length != 8){
        alert('[ERRO] Conta sem 8 números [ERRO]')
    }else if(vcontas['conta'].indexOf(conta) != -1){
        alert('[ERRO] Impossível registrar uma conta já existente [ERRO]')
    }else{
        vcontas['conta'].push(conta), vcontas['saldo'].push(saldo-debito+credito),vcontas['nome'].push(nome)
        alert(`Conta cadastrada!`)
    }
}
function login(){
    var contal = Number(contaltxt.value)
    limpar()
    if(contaltxt.value.length != 8){
        alert('[ERRO] Conta sem 8 números [ERRO]')
        res.textContent = ``
    }else if(vcontas['conta'].indexOf(contal) == -1){
        alert('[ERRO] Impossível logar em uma conta inexistente [ERRO]')
        res.textContent = ``
    }else{
        res.innerHTML = `Olá senhor ${vcontas['nome'][vcontas['conta'].indexOf(contal)]}<br>`
        res.innerHTML += `Seu saldo atual é de ${vcontas['saldo'][vcontas['conta'].indexOf(contal)].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.<br>`
        res.innerHTML += `Você tem saldo ${vcontas['saldo'][vcontas['conta'].indexOf(contal)]>=0 ?"positivo":"negativo"}`
    }
}
//$ Criar um objeto contendo numero[i] e saldo[i], e acessa-los baseado no número da conta