const {faturamentos} = require ('./faturamentos.json');

const mesAnalise = 03;

let menorValor;
let maiorValor;
let diasFaturamento = 0;
let totalFaturamento = 0;

for(const faturamento of faturamentos){
    const data = faturamento.data.split('-');
    const mes = data[1];
    const valor = faturamento.valor;


    if(valor == 0) continue;

    if(mes != mesAnalise) continue;

    if(menorValor  == undefined || menorValor > valor) {
        menorValor = valor;
    }

    if(maiorValor  == undefined || maiorValor < valor) {
        maiorValor = valor;
    }

    diasFaturamento += 1;
    totalFaturamento += valor;

}

let mediaFaturamento = parseInt(totalFaturamento / diasFaturamento);

let found = faturamentos.filter(element => element.valor > mediaFaturamento);
let acimaDaMedia = found.length;

console.log(`O maior valor em um dia no faturamento foi de R$${maiorValor}`)
console.log(`O menor valor em um dia no faturamento foi de R$${menorValor}`)
console.log(`O total de faturamento foi de R$${totalFaturamento}, em um total de ${diasFaturamento} dias, com a média de R$${mediaFaturamento}, com um total de ${acimaDaMedia} dias ficando acima da média.`)