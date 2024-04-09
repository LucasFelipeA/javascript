var n1txt = document.getElementById('n1')
var n2txt = document.getElementById('n2')
var n3txt = document.getElementById('n3')
var res = document.getElementById('res')
function calc(){
    var n1 = Number(n1txt.value)
    var n2 = Number(n2txt.value)
    var n3 = Number(n3txt.value)
    var mediafinal = (n1*2 + n2*3 + n3*5)/10
    res.innerHTML = `A média das três notas apresentadas é de ${mediafinal.toFixed(2)} pontos.<br>`
    res.innerHTML += `Baseado nas suas notas você esta: ${mediafinal>=5 ?
    "aprovado" :"reprovado"}.`
}