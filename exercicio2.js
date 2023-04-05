let targetNumber = 35; //Número a ser verificado!

let numbers = [0, 1];

for(let i = 1; numbers[i] < targetNumber; i++){
    let numberA = numbers[i-1];
    let numberB = numbers[i];
    let numberC = numberA + numberB;
    numbers.push(numberC)
}

let found = numbers.find(element => element == targetNumber);

if(found == undefined){
    console.log('O número não se encontra na sequência de Fibonacci')
}

if(found == targetNumber){
    console.log(`O número ${targetNumber} se encontra na sequência de Fibonacci!`)
}