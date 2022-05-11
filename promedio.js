
function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
    
}

const lista1 = [
    100,
    200,
    500,1000,2000,10,45,
    544, 115, 235,
    400,800,113,300
];

function comparar (a,b){
    return a - b;
}

lista1.sort(comparar);

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else {
        return false;
    }
}

let mediana; 
    
if(esPar(lista1.length)) {
    
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
    mediana = parseInt(promedioElemento1y2);

} else {
   mediana = lista1[mitadLista1];
}

const lista2 = [
    1,2,3,1,2,3,4,2,2,2,1
];

const lista2Count = {};

lista2.map (
    function(elemento){
        if (lista2Count[elemento]){
            lista2Count[elemento] += 1;
        } else{
            lista2Count[elemento] = 1;
        }
    }
);

// const lista2array = Object.entries(lista2Count).sort(
//     function (valorAcumulado, nuevoValor){
//         valorAcumulado - nuevoValor
//     } 
// );

const lista2array = Object.entries(lista2Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    } 
);
const moda = lista2array[lista2array.length - 1];