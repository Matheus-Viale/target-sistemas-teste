let string = 'banana';
let i = string.length;
let newString = '';

for(i; i>=0; i--){
    let char = string.charAt(i);
    newString += char
}

console.log(`A palavra original é ${string} e ela revertida fica ${newString}`);