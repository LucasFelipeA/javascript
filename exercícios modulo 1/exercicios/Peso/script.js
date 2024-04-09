var alttxt = document.getElementById('alt')
var sel = document.getElementsByName('radsex')
var res = document.getElementById('res')
function calc(){
    var alt = Number(alttxt.value)
    if(alt>=100){
        alt /= 100
    }else if(alt>3){
        alt /= 10
    }
    if(sel[0].checked){
        res.textContent = `Seu peso ideal seria ${(72.7*alt-58).toFixed(2)}kg`
    }else{
        res.textContent = `Seu peso ideal seria ${(62.1*alt-44.7).toFixed(2)}kg`
    }
}