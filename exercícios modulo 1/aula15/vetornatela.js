let valores = [8,1,7,4,2,9]
valores.sort()
/*
for(let pos = 0;pos < valores.length;pos++){
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)}
*/
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(valores.length)
valores.push(5)
console.log(valores.length)
console.log(valores)
let pos = valores.indexOf(2)
if(pos==-1){
    console.log(`[Error] O valor não foi encontrado [Error]`)
}else{
    console.log(`O valor está na posição ${pos}`)
}