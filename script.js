class ContaBanco {
    construtor() {
        this.nome = "nome";
        this.dtnasc = "dtnasc";
        this.tel = "tel";
        this.saldo = 0;
        this.limite = 0;
    }
    verificarSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
    emprestimo(valor) {
        this.limite -= valor;
        this.saldo += valor;
    }
    
    verificarLimite() {
        return this.limite;
    }


}

let conta1;

function criarConta() {
    conta1 = new ContaBanco();
    conta1.nome = prompt("nome");
    conta1.dtnasc = prompt("data nascimento");
    conta1.tel = prompt("telefone");
    conta1.saldo = parseFloat(prompt("saldo"));
    conta1.limite = 1000;
    console.log(conta1);
}

function depositoConta() {
    let valor = parseFloat(prompt("Informe o valor para depósito"));
    conta1.depositar(valor);
    console.log(conta1.saldo);
}

function sacarConta() {
    let valor = parseFloat(prompt("Informe o valor para saque"));
    conta1.sacar(valor);
    console.log(conta1.saldo)
}

function emprestimoConta() {
    let valor = parseFloat(prompt("Informe o valor do empréstimo"));
    conta1.emprestimo(valor);
    console.log(conta1.saldo);
}

function saldo() {
    console.log(conta1.verificarSaldo());
}

function limite() {
    console.log(conta1.verificarLimite());
}

function teste() {
    var meuObj = new Object(),
    str = "minhaString",
     aleat = Math.random(),
    obj = new Object();

    meuObj.tipo = "Sintaxe de ponto";
    meuObj["data de criacao"] = "String com espaco";
    meuObj[str] = "valor de String";
    meuObj[aleat] = "Numero Aleatorio";
    meuObj[obj] = "Objeto";
    meuObj[""] = "Mesmo uma string vazia";

    console.log(meuObj);
}