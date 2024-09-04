function Conta(nomeCorrentista, banco, numeroConta, saldo) {
    this.nomeCorrentista = nomeCorrentista;
    this.banco = banco;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }
  
  
  Conta.prototype.getSaldo = function() {
    return this.saldo;
  };
  
  Conta.prototype.setSaldo = function(novoSaldo) {
    this.saldo = novoSaldo;
  };
  
  Conta.prototype.mostrarDados = function() {
    alert(`Nome do Correntista: ${this.nomeCorrentista}` + `\nBanco: ${this.banco}` + `\nNúmero da Conta: ${this.numeroConta}` + `\nSaldo: R$ ${this.saldo.toFixed(2)}`);
  };
  

  function ContaCorrente(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
  
    Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
    this.saldoEspecial = saldoEspecial;
  }
  
  
  ContaCorrente.prototype = Object.create(Conta.prototype);
  ContaCorrente.prototype.constructor = ContaCorrente;
  
  
  ContaCorrente.prototype.mostrarDados = function() {
    
    Conta.prototype.mostrarDados.call(this);
    alert(`Saldo Especial: R$ ${this.saldoEspecial.toFixed(2)}`);
  };
  
 
  function ContaPoupanca(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
 
    Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
    this.juros = juros;
    this.dataVencimento = dataVencimento;
  }
  

  ContaPoupanca.prototype = Object.create(Conta.prototype);
  ContaPoupanca.prototype.constructor = ContaPoupanca;
  

  ContaPoupanca.prototype.mostrarDados = function() {

    Conta.prototype.mostrarDados.call(this);
    alert(`Juros: ${this.juros.toFixed(2)}%` + `\nData de Vencimento: ${this.dataVencimento}`);
  };
  

  const contaCorrente = new ContaCorrente('João Silva', 'Banco XYZ', '12345-6', 1500, 500);
  const contaPoupanca = new ContaPoupanca('Maria Oliveira', 'Banco ABC', '65432-1', 2000, 2.5, '2025-12-31');
  

  alert('Dados da Conta Corrente:');
  contaCorrente.mostrarDados();
  
  alert('\nDados da Conta Poupança:');
  contaPoupanca.mostrarDados();
  