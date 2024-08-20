function VerificaSubConjunto(palavraUm,palavraDois){

    if (!palavraUm||!palavraDois){
        return "Erro";
    }
    
    
    if (palavraUm.includes(palavraDois)){
        return "É um subconjunto";
    }
    else{
        return "Não é um subconjunto";
    }
}