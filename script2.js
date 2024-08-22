let Contas = [];
let numeroConta = 1;

class ContaBanco {
    constructor(nome, telefone, dataNascimento, saldo, numConta) {
        this.nome = nome;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.saldo = saldo;
        this.numConta = numConta;
    }

    credito(valor) {
        this.saldo += valor;
        alert("Novo saldo R$ "+this.saldo);
    }

    debito(valor) {
        if (valor > this.saldo) {
            alert("Saldo insuficiente!");
        } else {
            this.saldo -= valor;
            alert("Novo saldo R$ "+this.saldo);
        }
    }

    Exibir() {
        alert("Nome: "+this.nome+", Telefone: "+this.telefone+", data de nascimento: "+this.dataNascimento+", saldo: R$ "+this.saldo+', Número da conta: '+this.numConta);
    }
}

Contas.push(new ContaBanco("Meydson","81 987654321", "10/01/2014", 1000, 1));
Contas.push(new ContaBanco("Bryan", "81 123456789", "12/06/2017", 1000, 2));

function criarConta() {
    nome = prompt("Informe o nome");
    telefone = prompt("Informe o telefone");
    dataNascimento = prompt("Informe a data de Nascimento");

    Contas.push(new ContaBanco(nome, telefone, dataNascimento, 1000, numeroConta));
    numeroConta++;
}

function exibirConta() {
    let contaUsuario = parseInt(prompt("Informe a conta para consulta!"))
    let validar = true;
    Contas.forEach(i => {if(i.numConta == contaUsuario) {
        i.Exibir();
        validar = false;
    }})
    if (validar) {
        alert("Conta inexistente");
    }
}

function creditoConta() {
    let contaUsuario = parseInt(prompt("Informe o número da conta para depósito!"));
    let valor = parseFloat(prompt("Informe o valor para depósito!"));
    let validar = true;
    Contas.forEach(i => {if(i.numConta == contaUsuario) {
        i.credito(valor);
        validar = false;
    }})
    if (validar) {
        alert("Conta inexistente")
    }
}

function debitoConta() {
    let contaUsuario = parseInt(prompt("Informe o número da conta para depósito!"));
    let valor = parseFloat(prompt("Informe o valor para débito!"));
    let validar = true;
    Contas.forEach(i => {if(i.numConta == contaUsuario) {
        i.debito(valor);
        validar = false;
    }})
    if (validar) {
        alert("Conta inexistente!")
    }
}

function transferirConta() {
    let contaOrigem = parseInt(prompt("Informe a conta de origem!"));
    let validarOrigem = true;
    let validarDestino = true;
    let posContaOrigem;
    let posContaDestino;
    
    Contas.forEach(i => {if(i.numConta == contaOrigem) {
        posContaOrigem = i;
        validarOrigem = false;
    }})
    if (validarOrigem) {
        alert("Conta de origem inexistente");
        return;
    }
    let contaDestino = parseInt(prompt("Informe a conta de destino!"));
    Contas.forEach(i => {if(i.numConta == contaDestino) {
        posContaDestino = i;
        validarDestino = false;
    }})
    if (validarDestino) {
        alert("Conta de destino inexistente");
        return;
    }
    let valor = parseFloat(prompt("Informe o valor da transferência!"));
    posContaOrigem.debito(valor);
    posContaDestino.credito(valor);


}