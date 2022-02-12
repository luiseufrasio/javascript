// Classe como função
function Pessoa(nome) {
    this.Nome = nome;
}

var pessoa = new Pessoa('Luis');
var outraPessoa = new Pessoa('Ana');

console.log(pessoa.Nome);
console.log(outraPessoa.Nome);
console.log(typeof(pessoa));

// Classe como Objetos Literais
var carro = {
    marca: '',
    modelo: '',
    ano: 0,
    getDetalhes: function() {
        return this.marca + ' - ' + this.modelo + ': ' + this.ano;
    }
}

carro.marca = 'GM';
carro.modelo = 'Tracker';
carro.ano = 2021;
alert(carro.getDetalhes());
console.log(typeof(carro));