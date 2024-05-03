const readline = require('readline');

// Leer input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;


function preguntarYVerificar() {
  rl.question('Adivina el número secreto entre 1 y 100: ', (numeroUsuario) => {
    numeroUsuario = Number(numeroUsuario);
    intentos++;

    if (numeroUsuario > numeroSecreto) {
      console.log('El número secreto es menor. Intenta de nuevo.');
      preguntarYVerificar();
    } else if (numeroUsuario < numeroSecreto) {
      console.log('El número secreto es mayor. Intenta de nuevo.');
      preguntarYVerificar();
    } else {
      console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
      rl.close();
    }
  });
}

preguntarYVerificar();
