let name1 = prompt('Digite o nome do primeiro veículo: ')
let speed1 = parseInt(prompt('Digite a velociade do primeiro veículo: '))
let name2 = prompt('Digite o nome do segundo veículo: ')
let speed2 = parseInt(prompt('Digite a velociade do segundo veículo: '))

if (speed1>speed2){
    alert(`O ${name1} está a ${speed1}Km/h, e está mais rápido que o ${name2}, que está a ${speed2}Km/h`)
} else if (speed1<speed2){
alert(`O ${name2} está a ${speed2}Km/h e está mais rápido que o ${name1}, que está a ${speed2}Km/h `)
} else 
    alert(`Tanto ${name1} quanto ${name2} estão na mesma velocidade de ${speed1}Km/h`)
