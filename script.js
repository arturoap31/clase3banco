<<<<<<< HEAD
//el .reduce para acumular tdos los numero de un arry

function sumArray (array) {
    return array.reduce((acc, num) => acc + num, 0);

}

console.log(sumArray([10,5,9,0]))



function reverseString (cadena){

        let arrayCaracteres = cadena.split('');
    
        let arrayInvertido = arrayCaracteres.reverse();
        
        let cadenaInvertida = arrayInvertido.join('');
        
        return cadenaInvertida;

}

let texto = "Hola Mundo";
let resultado = reverseString(texto);
console.log(resultado);  


function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Ejemplo de uso
let gradosCelsius = 25;
let gradosFahrenheit = celsiusAFahrenheit(gradosCelsius);
console.log(`${gradosCelsius}°C es igual a ${gradosFahrenheit}°F`);



function contarVocales(texto) {
    
    texto = texto.toLowerCase();
    

    const vocales = 'aeiou';
    

    let contador = 0;
    

    for (let i = 0; i < texto.length; i++) {
        
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    
    return contador;
}

// Ejemplo de uso
let texto1 = "Hola Mundo";
let numeroDeVocales = contarVocales(texto);
console.log(`El número de vocales en "${texto1}" es ${numeroDeVocales}`);


const mayuscula = (texto) => {

  resultado = texto.toUpperCase()
  return resultado

}

console.log(mayuscula("hola mundo"))

const extraerNombres = (array) => array.map(objeto => objeto.name);

// Ejemplo de uso
const personas = [
    { name: 'Juan', age: 30 },
    { name: 'Ana', age: 25 },
    { name: 'Pedro', age: 40 }
];

const nombres = extraerNombres(personas);
console.log(nombres)


// funcion dentro 
=======
//FUNCIONES ESTÁNDAR 


    //Ejemplo

// function suma(a,b){
//     return a+b;
// }

/* 
Escribe una función llamada sumArray que tome un array de números 
como argumento y devuelva la suma de todos sus elementos.
*/

function summArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

console.log(summArray([2, 2, 3, 4])); //resultado: 11

/*
Crea una función llamada reverseString que invierta una cadena dada

*/

//cosole.log(reverseString('holamundo')); //resultado: odnumaloh

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('javascript'));


/*
Escribe una función llamada celsiusToFarenheit que convierte una temperatura
de celsius a Fahrenheit. 
*/

function celsiusToFarenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFarenheit(30)); 86

/*
Crea una función llamada "countVowels" que reciba una cadena y cuente cuántas vocales contiene
*/


function countVowels (str){
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

console.log(countVowels('Hello World')); //resultado: 3


//FUNCIONES DE FLECHA

/*
Define una función de flecha llamada toUpperCase que reciba una cadena y la convierta 
a mayúsculas.
*/

const toUpperCase = str => str.toUpperCase();
console.log(toUpperCase('javascript')); 


/*
Escribe una función de flecha llamada extracNames que reciba una array de objetos con
las propiedades name y age, y devuelva un array de solo los nombres.
*/








>>>>>>> 4058c04499ae9796ccbe583191d1cd8b2e935d63
