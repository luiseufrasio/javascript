function Pessoa(nome) {
    this.Nome = nome;
}

var pessoa = new Pessoa('Luis');
var outraPessoa = new Pessoa('Ana');

console.log(pessoa.Nome);
console.log(outraPessoa.Nome);