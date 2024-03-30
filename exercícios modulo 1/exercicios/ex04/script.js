function gerar() {
    var select = document.getElementById('tabuada')
    var numtxt = document.getElementById('numtxt')
    var num = Number(numtxt.value)
    var opt = document.getElementsByTagName('option')[0]
    opt.text = `${num} x 1 = ${num*1}`
    for(var c = 1; c<= 9;c++){
        var copt = document.createElement('option')
        copt.setAttribute('text','')
        select.appendChild(copt)
        let opt = document.getElementsByTagName('option')[c]
        opt.text = `${num} x ${c+1} = ${num*(c+1)}`
        document.getElementsByTagName('section')[0].append(select.children.value)
    }
}
