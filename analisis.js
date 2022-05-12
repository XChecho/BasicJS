//Funciones utiles o Helper

function espar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
    
}

// Calculo para mediana general

const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA,salaryB){
        return salaryA - salaryB;
    }
);

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
    
}

// Funciones matemáticas.

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    
    if (espar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista [mitad];
        
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%


const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);




console.log({
    medianaGeneralCol,
    medianaTop10Col,
});