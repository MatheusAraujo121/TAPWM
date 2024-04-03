var vE1;
var vE2;
var vencedor;
//O númerp "1" será o equivalente a Pedra
//O númerp "2" será o equivalente a Papel
//O númerp "3" será o equivalente a Tesoura
do{
    vE1 = prompt("Escolha uma opção: \n 1-Pedra \n 2-Papel \n 3-Tesoura \n4-sair");

    vE2 = Math.random();
    
    if (vE2 <= 0.33)
    {
        vE2 = 1;
    }
    else if (vE2>=0.34 && vE2 <= 0.66)
    {
        vE2 = 2;
    }
    else if (vE2>=0.67 && vE2 <= 0.99)
    {
        vE2 = 3;
    }
    if (vE1 == vE2)
    {
        alert("Empate")
    }
    else if (vE1 == 1 && vE2 == 2 )
    {
        vencedor = "CPU";
        alert("Papel cobre Pedra!\n E quem venceu foi " +vencedor)
    }
    else if (vE1 == 2 && vE2 == 1)
    {
        vencedor = "Jogador";
        alert("Papel cobre Pedra!\n E quem venceu foi " +vencedor)
    }
    else if (vE1 == 1 && vE2 == 3)
    {
        vencedor = "Jogador";
        alert("Pedra quebra Tesoura!\n E quem venceu foi " +vencedor)
    }
    else if (vE1 == 3 && vE2 == 1 )
    {
        vencedor = "CPU";
        alert("Pedra quebra Tesoura!\n E quem venceu foi " +vencedor)
    }
    else if (vE1 == 2 && vE2 == 3)
    {
        vencedor = "CPU";
        alert("Tesoura corta Papel!\n E quem venceu foi " +vencedor)
    }
    else if (vE1 == 3 && vE2 == 2)
    {
        vencedor = "Jogador";
        alert("Tesoura corta Papel! \nE quem venceu foi " +vencedor)
    }
}while(vE1<4);
    