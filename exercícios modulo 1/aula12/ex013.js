var print = console.log
var agora = new Date()
var diaSem = agora.getDay()
print(diaSem)
switch (diaSem) {
    case 0:
        print('Domingo')
        break;
    case 1:
        print('Segunda')
        break;
    case 2:
        print('Terça')
        break;
    case 3:
        print('Quarta')
        break;
    case 4:
        print('Quinta')
        break;
    case 5:
        print('Sexta')
        break;
    case 6:
        print('Sábado')
        break;
    default:
        print('[ERRO]')
        break;
}

var num = 9
switch(num){
    case 3:
    console.log('O número é 3')
      break
    case 6:      console.log('O número é 6')
break
    case 9:
      console.log('O número é 9')
      break
    default:
      console.log('O número não está na lista')
break
}