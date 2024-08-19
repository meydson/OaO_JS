class ContaBanco {
    construtor() {
        this.nome = "nome";
        this.dtnasc = "dtnasc";
        this.tel = "tel";
        this.saldo = 0;
    }
}

function teste() {
    let conta1 = new ContaBanco();
    conta1.nome = prompt("nome");
    conta1.dtnasc = prompt("data nascimento");
    conta1.tel = prompt("telefone");
    conta1.saldo = parseFloat(prompt("saldo"))

    console.log(conta1);
}