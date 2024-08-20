function SomaArray(array){
   var soma = Array.prototype.reduce.apply(array, [(acc, curr) => acc + curr, 0]);

   return soma;
}
function QuadradodoPrimeiro(array) {
   var quadradoPrimeiro = Math.pow.apply(null, [array[0], 2]);

   return quadradoPrimeiro;
}
function QuadradodoSegundo(array) {
   var quadradoSegundo = Math.pow.apply(null, [array[1], 2]);

   return quadradoSegundo;
}

