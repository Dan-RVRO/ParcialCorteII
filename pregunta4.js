function sumaNumerosPares(arrayNumeros) {
    let suma = 0;
    for (let numero of arrayNumeros) {
      if (numero % 2 === 0) {
        suma += numero;
      }
    }
    return suma;
  }

console.log("--------------------------------------")
console.log("Escribe un código que tome un array de números y calcule la suma de todos los números pares, luego imprime el resultado en la consola.");
console.log("--------------------------------------")

let arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 40, 101, 115, 333];
console.log("Array original:", arrayDeNumeros);
console.log("Suma resultante:",  sumaNumerosPares(arrayDeNumeros));
console.log("--------------------------------------")

 
  