function Carro() {
    // private
    var Marca;
    var Modelo;

    // methods
    function setMarca(marca) {
        Marca = marca;
    }

    function getMarca() {
        return Marca;
    }

    function setModelo(modelo) {
        Modelo = modelo;
    }

    function getModelo() {
        return Modelo;
    }
}

var carro = new Carro();
carro.Marca = 'Fiat';
carro.Modelo = 'Mobi';
console.log(carro);

carro.setMarca('VW');
carro.setModelo('Gol');
console.log(carro);