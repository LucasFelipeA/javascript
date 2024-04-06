function contar() {
    var initxt = document.getElementById('initxt')   
    var fimtxt = document.getElementById('fimtxt')
    var passotxt = document.getElementById('passtxt')
    var ini = Number(initxt.value)
    var fim = Number(fimtxt.value)
    var passo = Number(passotxt.value)
    var res = document.getElementById('res')
    res.textContent = ``
    if (initxt.value.length == 0 || passotxt.value.length == 0 || fimtxt.value.length == 0){
        alert("[ERROR] Valores invalidos [ERROR]")
        if(passotxt.value.length == 0){
            alert("Passo = 0 alterando para Passo = 1")
            passo = 1
        }
    }
    if(ini<fim){
        for(c = ini; c<=fim;c+=passo){
            res.textContent += ` ${c} 👉`
    }}else{
        for(c = ini; c>=fim;c-=passo){
            res.textContent += ` ${c} 👉`
        }   
    }
    res.textContent += `🏁`
}
