let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p // Autorreferência ao próprio objeto
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}.`)
amigo['gay'] = 'sim' 
console.log(`Ele é ? Ele ${amigo.gay} é`)
console.log(amigo)

let text = "Você está estudando JavaScript."

const intoArray1 = text.split(" ")
console.log(intoArray1) //     ↑ Use este separador para DIVIDIR a STRING em PALAVRAS.

const intoArray2 = text.split("")
console.log(intoArray2) //     ↑ Use este separador para DIVIDIR a STRING em CARACTERES.

const intoArray3 = text.split("", 9)
console.log(intoArray3) //        ↑ Use este parâmetro para LIMITAR a QUANTIDADE de DIVISÕES.