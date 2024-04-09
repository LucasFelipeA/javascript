var res = document.getElementById('res')
var contatxt = document.getElementById('conta')
var saldotxt = document.getElementById('saldo')
var debitotxt = document.getElementById('debito')
var creditotxt = document.getElementById('credito')
var contaltxt = document.getElementById('contal')
var vcontas = [69696969]
var dconta = [Infinity]
function registrar(){
    var conta = Number(contatxt.value)
    var saldo = Number(saldotxt.value)
    var debito = Number(debitotxt.value)
    var credito = Number(creditotxt.value)
    if(contatxt.value.length != 8){
        alert('[ERRO] Conta sem 8 números [ERRO]')
    }else if(vcontas.indexOf(conta) != -1){
        alert('[ERRO] Impossível registrar uma conta já existente [ERRO]')
    }else{
        vcontas.push(conta)
        dconta.push(saldo-debito+credito)
    }
}
function login(){
    var contal = Number(contaltxt.value)
    contatxt.value = ''
    saldotxt.value = ''
    debitotxt.value = ''
    creditotxt.value = ''
    if(contaltxt.value.length != 8){
        alert('[ERRO] Conta sem 8 números [ERRO]')
        res.textContent = ``
    }else if(vcontas.indexOf(contal) == -1){
        alert('[ERRO] Impossível logar em uma conta inexistente [ERRO]')
        res.textContent = ``
    }else{
        res.innerHTML = `Seu saldo atual é de ${dconta[vcontas.indexOf(contal)].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.<br>`
        res.innerHTML += `Você tem saldo ${dconta[vcontas.indexOf(contal)]>=0 ?"positivo":"negativo"}`
    }
}