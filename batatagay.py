# Saber quantos items jogador tem para transformar
#num = int(input('Quantos itens você tem ?'))
#packs = num//64
#resto = num%64
#print('Temos ',packs,' packs de itens, e ',resto,' como uns quebrados.')


# Exibição de quantos packs você tem
inventario = [["vazio" for i in range(9)]for j in range(4)]
pedra = 16
inventario[3][4] = pedra,'pedras'
pedra = 32
inventario[2][8] = pedra,'pedras'
pedra = 64
inventario[0][7] = pedra,'pedras'
vazio = 0
ocupados = 0
for i in range(4):
    print(inventario[i])
    for a in range(9):
        if inventario[i][a] != 'vazio':
            print(i,a)
            ocupados +=1
        else:
            vazio += 1
print(ocupados,vazio)