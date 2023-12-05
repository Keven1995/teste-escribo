function somatorioDeNumeros(numero) {
    var somatorio = 0;

    for (var i = 1; i < numero; i++) {

        if (i % 3 === 0 || i % 5 === 0) {

            somatorio += i;
        }
    }


    return somatorio;
}


var numero = 10;
var resultado = somatorioDeNumeros(numero);
console.log(`A soma dos números divisíveis por 3 ou 5 abaixo de ${numero} é de: ${resultado}`);
