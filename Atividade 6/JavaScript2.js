var nome = prompt("Digite seu nome: ");
var vN1 = parseFloat(prompt("Digite seu primeiro número: "));
var vN2 = parseFloat(prompt("Digite seu segundo número: "));

var vTotalSoma;
var vTotalSub;
var vTotalProd;
var vTotalDiv;
var vTotalResDiv;

vTotalSoma = (vN1 + vN2);
vTotalSub = (vN1 - vN2);
vTotalProd = (vN1 * vN2);
vTotalDiv = (vN1 / vN2);
vTotalResDiv = (vN1 % vN2);

    alert(nome + " os resultados da suas operações são: \nSoma: " + vTotalSoma.toFixed(2) + 
    "\nSubtração: " + vTotalSub.toFixed(2) + "\nProduto: " + vTotalProd.toFixed(2) + 
    "\nDivisão: " + vTotalDiv.toFixed(2) + "\nResto da divisão: " + vTotalResDiv.toFixed(2));