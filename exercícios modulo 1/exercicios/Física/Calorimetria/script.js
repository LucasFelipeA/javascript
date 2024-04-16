/*
* Determine a quantidade de calor necessária para elevar de 20°C para 100°C uma panela de ferro de 400 g que possui calor específico de 450 J/Kg.°C

$Massa: m = 400g ÷ 1000 = 0,4 Kg

$Q = m.c.ΔT

?Q = quantidade de calor;

?m = massa;

?c = calor específico;

?ΔT = variação de temperatura.

$Q = m.c.ΔT

!Q = 0,4 . 450 . 80

*Q = 14.400 J
*/
function calc(){
    var massa = Number(document.getElementById('massa').value)
    var calor = Number(document.getElementById('calor').value)
    var temp = Number(document.getElementById('temp').value)
    var res = document.getElementById('res')
    var Q = massa*calor*temp
    res.textContent = `A resposta dessa equação é: ${Q} J`
}