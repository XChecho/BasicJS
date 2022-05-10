//Código del cuadrado, se declaran las funciones para calculo de perímetro y área del cuadrado.

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

// Código del triángulo, se declaran las funciones para calculo de perímetro y área del cuadrado.

function perimetroTriangulo(lado1, lado2, base) {
    return (Number(lado1) + Number(lado2) + Number(base)); //Se transforma cada valor en número con comando "Number", dado que JS reconoce como string el valor de los números.
}

//Funcion para triangulo isoceles. Si el triangulo no es isoceles, no se puede aplicar está función.
function areaTriangulo(lado,base) {
    return ((Math.sqrt(Math.pow(lado, 2) + Math.pow(base / 2, 2))) * base) / 2;
}

// Código del circulo, se declaran las funciones para calculo de perímetro y área del circulo.

function perimetroCirculo(radio) { 
    return Math.PI * radio * 2;
}

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio , 2);
}

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

//Funcion para realizar los calculos con el triangulo.


function calcularperimetroTriangulo() { //En esta primera vamos a calcular el perimetro del triangulo.
    
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");
    
    const valor1 = input1.value;
    const valor2 = input2.value;
    const valor3 = input3.value;

    if (valor1 == valor2){
        const perimetro = perimetroTriangulo(valor1,valor2,valor3);
        alert(perimetro);
    }else {
        alert("Este no es un trianguelo isoceles, recuerde, el triangulo ddebe tener los dos lados del mismo valor");
    }
}

function calcularareaTriangulo() {

    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");
    
    const valor1 = input1.value;
    const valor2 = input2.value;
    const valor3 = input3.value;

    if (valor1 == valor2){ //Se declara condicional para verificar si es triangulo isoceles.
        const altura = (Math.sqrt(Math.pow(valor1, 2) + Math.pow(valor3 / 2, 2))).toFixed(3); //Se aplica teorema de pitagoras para hallar altura, se configura a 3 decimales.
        const area = areaTriangulo(valor1,valor3).toFixed(3); //teniendo los valores, internamente se halla la altura, y se calcula el área.
        alert("La altura del triangulo es " + altura + " y la el área es: " + area);
    }else {
        alert("Este no es un trianguelo isoceles, recuerde, el triangulo ddebe tener los dos lados del mismo valor");
    }
}
