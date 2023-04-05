const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;
const totalFaturamento = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

const porcentagemSP = (faturamentoSP * 100) / totalFaturamento;
const porcentagemRJ = (faturamentoRJ * 100) / totalFaturamento;
const porcentagemMG = (faturamentoMG * 100) / totalFaturamento;
const porcentagemES = (faturamentoES * 100) / totalFaturamento;
const porcentagemOutros = (faturamentoOutros * 100) / totalFaturamento;

console.log(`O faturamento de São Paulo corresponde à ${porcentagemSP.toFixed(2)}%`);
console.log(`O faturamento do Rio de Janeiro corresponde à ${porcentagemRJ.toFixed(2)}%`);
console.log(`O faturamento de Minas Gerais corresponde à ${porcentagemMG.toFixed(2)}%`);
console.log(`O faturamento do Espirito Santo corresponde à ${porcentagemES.toFixed(2)}%`);
console.log(`O faturamento de outros estados corresponde à ${porcentagemOutros.toFixed(2)}%`);