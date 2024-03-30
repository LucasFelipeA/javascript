function contar() {
    var initxt = document.getElementById('initxt')   
    var fimtxt = document.getElementById('fimtxt')
    var passotxt = document.getElementById('passtxt')
    var ini = Number(initxt.value)
    var fim = Number(fimtxt.value)
    var passo = Number(passotxt.value)
    var res = document.getElementById('res')
    res.textContent = ``
    if (ini < fim){
        do{
            if(passo == 0 || passo == ''){
                alert(`Passo = 0, Impossível contar. Passo = 1 `)
                passo = 1
                continue
            }
            else if (initxt.value == ''){
                res.innerHTML += `<p>[ERROR] Início não determinado [ERROR]</p>`
                break
            }
            if(ini < fim){
                res.textContent += `${ini} 👉`
                ini += passo
                if(ini > fim){
                res.textContent += ` 🏁`
                }
            }else{
                res.textContent += `${ini} 🏁`
                ini += passo
            }
            }while(ini <= fim)
    }
    else{
        do{
            if(passo == 0 || passo == ''){
                alert(`Passo = 0, Impossível contar. Passo = 1 `)
                passo = 1
                continue
            }
            else if (initxt.value == ''){
                res.innerHTML += `<p>[ERROR] Início não determinado [ERROR]</p>`
                break
            }
            if(ini > fim){
                res.textContent += `${ini} 👉`
                ini -= passo
                if(ini < fim){
                res.textContent += ` 🏁`
                }
            }else{
                res.textContent += `${ini} 🏁`
                ini -= passo
            }
            }while(ini >= fim)
    }
}
