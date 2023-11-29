//###-------------------------------Prática 1

/* let soma = 0;
let aux = 1;

const solicitaNumeros = () =>{
    while(aux != 0){
        aux = Number(prompt("Digite um número qualquer ou 0 pra sair:"));
        soma += aux;
        //console.log(soma);
    }
}

if (soma === 0){
    solicitaNumeros();
}
console.log(soma); */

//###-------------------------------Prática 2

let num = prompt(`Digite um número: `);

const contador = (cont) => {
    for (let x = 0; x <= cont; x++){
    console.log(x);
    }
}

contador(num);