function Retangulo(){
        this.Base;
        this.Altura;
}

Retangulo.Base = parseInt(prompt("Insira a Base do retângulo: "));
Retangulo.Altura = parseInt(prompt("Insira a altura do retângulo: "));

function QuadArea(){
    area = Retangulo.Base * Retangulo.Altura;
    return area;
}
alert("A área do retângulo é: " + QuadArea());