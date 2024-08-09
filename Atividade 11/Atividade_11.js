//Função do primeiro exercício maior utilizando ifs
function maiorNumeroIfs(vNum1, vNum2, vNum3, vNum4) {
    let maior = vNum1;
    if (vNum2 > maior) {
        maior = vNum2;
    }
    if (vNum3 > maior) {
        maior = vNum3;
    }
    if (vNum4 > maior) {
        maior = vNum4;
    }
    return maior;
}

//Função do segundo exercício maior utilizando Math.max
function maiorNumeroMathMax(vNum1, vNum2, vNum3, vNum4) {
    return Math.max(vNum1, vNum2, vNum3, vNum4);
}

//Função do terceiro exercício organizar em ordem crescente
function ordenarNumerosCrescente(vNum1, vNum2, vNum3) {
    let numerosCrescente = [vNum1, vNum2, vNum3];
    numerosCrescente.sort(function(x, y) {
        return x - y;
    });
    return numerosCrescente;
}