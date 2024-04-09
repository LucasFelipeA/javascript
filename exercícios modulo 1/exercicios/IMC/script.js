var pesotxt = document.getElementById('peso')
var alttxt = document.querySelector('input#alt')
var res = document.getElementById('res')
function calc(){
    var peso = Number(pesotxt.value)
    var alt = Number(alttxt.value)
    if(alt > 99){
        alt /= 100
    }else if (alt > 3){
        alt /= 10
    }
    res.textContent = `Seu IMC é de ${(peso/alt**2).toFixed(2)}`
}