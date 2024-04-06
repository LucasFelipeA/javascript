function gerar() {
    var select = document.getElementById('tabuada')
    var numtxt = document.getElementById('numtxt')
    var num = Number(numtxt.value)
    var opt = document.getElementsByTagName('option')
    if (numtxt.value.length == 0){
        alert('Digite um número')
    }else{
    for(var c = 0; c<= 9;c++){
        if (select.children.length < 10){
            var copt = document.createElement('option')
            select.appendChild(copt)
        }
        let opt = document.getElementsByTagName('option')[c]
        opt.text = `${num} x ${c+1} = ${num*(c+1)}`
        }
    }
}