let mensagem = 'Bem-vindo á calculadora de calorias'
let porcao = prompt('Informe o número de porções de frango: ')

let calorias = 274 * porcao; // cal
let carboidratos = 20 * porcao; // gramas
let gorduras = 20 * porcao; // miligramas
let sodio = 213 * porcao; //miligramas 


alert('o total foi:' + '\n' + calorias + 'Kcal ' + '\n' + carboidratos + 'g ' + '\n' + gorduras + 'mg ' + '\n' + sodio + 'mg' + '\n');

let vd = ((274 *100)/14) * 0.25;

if(vd < calorias) {
    alert('Consuma outros alimentos:');
}
else {
    alert('Tudo certo');
}