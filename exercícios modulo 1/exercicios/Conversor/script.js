var numtxt = document.querySelector('input#numtxt')
var select = document.getElementById('sel')
var res = document.getElementById('res')
function conv(){
    res.textContent = ''
    var num = Number(numtxt.value)
    if(select.value == 'c'){
        let teste = num*9/5+32
        res.textContent = `A conversão de ${num} Cº é ${teste} Fº.`
        if(num > 30){
            document.body.style.backgroundColor = 'var(--quente)'
            var make = document.createElement('video')
            make.src = 'calor.mp4'
            make.setAttribute('width','300px')
            make.setAttribute('autoplay','')
            res.appendChild(make)
        }else if(num < 10){
            document.body.style.backgroundColor = 'var(--frio)'
            var make = document.createElement('video')
            make.src = 'frio.mp4'
            make.setAttribute('width','300px')
            make.setAttribute('autoplay','')
            res.appendChild(make)
        }else{
            document.body.style.backgroundColor = 'var(--neutro)'
        }
    }else if(select.value == 'f'){
        res.textContent = ''
        let teste = (num -32)*5/9
        res.textContent = `A conversão de ${num} Fº é ${teste.toFixed(2)} Cº.`
        if(num > 86){
            document.body.style.backgroundColor = 'var(--quente)'
            var make = document.createElement('video')
            make.src = 'calor.mp4'
            make.setAttribute('width','300px')
            make.setAttribute('autoplay','')
            res.appendChild(make)
        }else if(num < 50){
            document.body.style.backgroundColor = 'var(--frio)'
            var make = document.createElement('video')
            make.src = 'frio.mp4'
            make.setAttribute('width','300px')
            make.setAttribute('autoplay','')
            res.appendChild(make)
        }else{
            document.body.style.backgroundColor = 'var(--neutro)'
        }
    }
    numtxt.value = ''
    numtxt.focus()
}
function mudar(){
    var title = document.getElementById('title')
    if(select.value == 'c'){
        title.textContent = "Celsius para Fahrenheit"
        document.body.style.backgroundColor = 'var(--neutro)'
        numtxt.value = ''
        numtxt.focus()
        res.textContent = ''
    }else{
        title.textContent = "Fahrenheit para Celsius"
        document.body.style.backgroundColor = 'var(--neutro)'
        numtxt.value = ''
        numtxt.focus()
        res.textContent = ''
    }
}