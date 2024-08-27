class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }
    get nomeCorrentista() {
        return this._nomeCorrentista;
    }
    set nomeCorrentista(nomeCorrentista) {
        this._nomeCorrentista = nomeCorrentista;
    }
    get banco() {
        return this._banco;
    }
    set banco(banco) {
        this._banco = banco;
    }
    get numeroConta() {
        return this._numeroConta;
    }
    set numeroConta(numeroConta) {
        this._numeroConta = numeroConta;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(saldo) {
        this._saldo = saldo;
    }
    mostrarDados() {
        return `Nome do Correntista: ${this.nomeCorrentista}\nBanco: ${this.banco}\nNúmero da Conta: ${this.numeroConta}\nSaldo: ${this.saldo}`;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }
    get saldoEspecial() {
        return this._saldoEspecial;
    }
    set saldoEspecial(saldoEspecial) {
        this._saldoEspecial = saldoEspecial;
    }
    mostrarDados() {
        return `${super.mostrarDados()}\nSaldo Especial: ${this.saldoEspecial}`;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }
    get juros() {
        return this._juros;
    }
    set juros(juros) {
        this._juros = juros;
    }
    get dataVencimento() {
        return this._dataVencimento;
    }
    set dataVencimento(dataVencimento) {
        this._dataVencimento = dataVencimento;
    }
    mostrarDados() {
        return `${super.mostrarDados()}\nJuros: ${this.juros}%\nData de Vencimento: ${this.dataVencimento}`;
    }
}


const contaCorrente = new Corrente('Carlos Manuel', 'Inter', '12345-6', 1500.00, 500.00);
const contaPoupanca = new Poupanca('Fulano de Tal', 'Neon', '78901-2', 3000.00, 0.5, '01/01/2025');

alert('Dados da Conta Corrente: \n' + contaCorrente.mostrarDados());
alert('Dados da Conta Poupança: \n' + contaPoupanca.mostrarDados());
