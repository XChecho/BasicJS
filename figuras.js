//Código del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}


console.groupEnd();

// Código del triángulo

console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladobase = 4;
// const alturaTriangulo = Math.sqrt(Math.pow(ladoTriangulo1, 2) + Math.pow(ladobase / 2, 2));

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1 + lado2 + base);
}

//Funcion para triangulo isoceles.
function areaTriangulo(lado,base) {
    return ((Math.sqrt(Math.pow(lado, 2) + Math.pow(base / 2, 2))) * base) / 2;
}

console.groupEnd();

// Código del ciruclo

console.group("Circulos");

// const radiocirculo = 4;
// const diametroCirculo = radiocirculo * 2;
// const PI = Math.PI;

function perimetroCirculo(radio) {
    return Math.PI * radio * 2;
}

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio , 2);
}

console.groupEnd();

//Aquí interactuamos con HTML
//Cuadrado

function calcularperimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    console.log(value);
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularareaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo

function calcularperimetroTriangulo() {

    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");
    
    const valor1 = input1.value;
    const valor2 = input2.value;
    const valor3 = input3.value;
    
    const perimetro = perimetroTriangulo(valor1,valor2,valor3);
    alert(perimetro);
}

// function calcularareaTriangulo() {

//     const input1 = document.getElementById("InputTrianguloLado1");
//     const input2 = document.getElementById("InputTrianguloLado2");
//     const input3 = document.getElementById("InputTrianguloBase");
    
//     const value = input.value;
    
//     const area = areaTriangulo(value);
//     alert(area);
// }

//Circulo