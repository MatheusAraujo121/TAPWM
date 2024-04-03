        var nome = prompt("Digite seu nome: ");
        var vN1 = parseFloat(prompt("Digite sua primeira nota: "));
        var vN2 = parseFloat(prompt("Digite sua segunda nota: "));
        var vN3 = parseFloat(prompt("Digite sua terceira nota: "));
        var vTotal;

        vTotal = (vN1 + vN2 + vN3) / 3;


   
            alert(nome + " sua média aritmética é " + vTotal.toFixed(2));