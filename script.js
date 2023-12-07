//###-------------------------------Prática 1

let soma = 0;
let aux = 1;

const solicitaNumeros = () => {
  while (aux != 0) {
    aux = Number(prompt("Digite um número qualquer ou 0 pra sair:"));
    soma += aux;
    //console.log(soma);
  }
}

if (soma === 0) {
  solicitaNumeros();
}
console.log(soma);

//###-------------------------------Prática 2

/* let num = prompt(`Digite um número: `);

const contador = (cont) => {
  for (let x = 0; x <= cont; x++) {
    console.log(x);
  }
}

contador(num); */

//###-------------------------------Prática 3

/* const imprimeArray = () => {
  const arrayNumeros = [0, 1, 2, 3, 4, 5, 6];
  for (let i = 0; i < arrayNumeros.length; i++) {
    console.log(`O elemento do índice ${i} é ${arrayNumeros[i]}`);
  }
}

imprimeArray(); */
