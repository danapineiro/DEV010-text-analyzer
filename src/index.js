import analyzer from "./analyzer.js";
//TODO: escuchar eventos del DOM e invocar los metodos del objeto "analyzer"
const userInput = document.querySelector('textarea');//asigna la variable userinput para buscar el valor del textarea
const wordCount = document.querySelector('[data-testid="word-count"]');//asigna la variable contar palabras para buscar el valor y esto permite manipular el elemento con el conteo de palabras en la web.
const characterCount = document.querySelector('[data-testid="character-count"]');//asigna la variable contar caracteres para buscar el valor y con esto poder ver en tiempo real cuando el usuario escriba cada caracter.
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');//asigna la variable caracteres sin espacios para poder calcular cuantas palabras sin espacios escribe.
const numberCount = document.querySelector('[data-testid="number-count"]');//
const numberSum = document.querySelector('[data-testid="number-sum"]');//
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');//

userInput.addEventListener('keyup', calcular);
function calcular() {
  const text = userInput.value;
  //const words = text.match(/\b\w+\b/g).length;
  //const numbers = text.match(/\d+/g) || [];
  //const numbersSum = text.split('').reduce((acc, num) => acc + parseInt(num), 0);
  /*
  const charactersNoSpaces = text.trim().length;
  const characters= text.length;
  const words = text.split(' ');
  const wordLengths = words.map(word => word.length);
  const wordlengthsSum = wordLengths.reduce((acc, len) => acc + len, 0);
  const wordLengthsAverage = wordLengths.length ? (wordlengthsSum / wordLengths.length).toFixed(2) : 0;
*/
  wordCount.textContent = `Recuento de palabras: ${analyzer.getWordCount(text)}`;
  characterCount.textContent = `Recuento de caracteres: ${analyzer.getCharacterCount(text)}`;
  characterNoSpacesCount.textContent = `Recuento de caracteres sin espacio: ${analyzer.getCharacterCountExcludingSpaces(text)}`;
  numberCount.textContent = `Recuento de números: ${analyzer.getNumberCount(text)}`;
  numberSum.textContent = `Suma total de números: ${analyzer.getNumberSum(text)}`;
  wordLengthAverage.textContent = `Promedio longitud: ${analyzer.getAverageWordLength(text)}`;
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {   // Obtener el contenido de las métricas
  const wordCountText = wordCount.textContent;
  const characterCountText = characterCount.textContent;
  const characterNoSpacesCountText = characterNoSpacesCount.textContent;
  const numberCountText = numberCount.textContent;
  const numberSumText = numberSum.textContent;
  const wordLengthAverageText = wordLengthAverage.textContent;


  let modificarMetricas = false;// Variable para indicar si alguna métrica ha sido modificada

  // Reiniciar las métricas solo si no están vacías (es decir, diferentes de los valores iniciales)
  
  if (wordCountText !== 'Recuento de palabras:') {
    wordCount.textContent = 'Recuento de palabras:';
    modificarMetricas = true;
  }

  if (characterCountText !== 'Recuento de caracteres:') {
    characterCount.textContent = 'Recuento de caracteres:';
    modificarMetricas = true;
  }

  if (characterNoSpacesCountText !== 'Recuento de caracteres sin espacio:') {
    characterNoSpacesCount.textContent = 'Recuento de caracteres sin espacio:';
    modificarMetricas = true;
  }

  if (numberCountText !== 'Recuento de números:') {
    numberCount.textContent = 'Recuento de números:';
    modificarMetricas = true;
  }

  if (numberSumText !== 'Suma total de números:') {
    numberSum.textContent = 'Suma total de números:';
    modificarMetricas = true;
  }

  if (wordLengthAverageText !== 'Promedio longitud:') {
    wordLengthAverage.textContent = 'Promedio longitud:';
    modificarMetricas = true;
  }

  userInput.value = ''; // Limpiar el contenido del textarea

  // Mostrar mensaje en la consola según si las métricas han sido modificadas o no
  if (modificarMetricas) {
    ('valores reiniciados.');
  } else {
    alert('Ningún valor ha sido modificado.');
  }
});

/*
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  // Obtener el contenido de las métricas
  const wordCountText = wordCount.textContent;
  const characterCountText = characterCount.textContent;
  const characterNoSpacesCountText = characterNoSpacesCount.textContent;
  const numberCountText = numberCount.textContent;
  const numberSumText = numberSum.textContent;
  const wordLengthAverageText = wordLengthAverage.textContent;

  // Reiniciar las métricas solo si no están vacías (es decir, diferentes de los valores iniciales)
  if (wordCountText !== 'Recuento de palabras:') {
    wordCount.textContent = 'Recuento de palabras:';
  }

  if (characterCountText !== 'Recuento de caracteres:') {
    characterCount.textContent = 'Recuento de caracteres:';
  }

  if (characterNoSpacesCountText !== 'Recuento de caracteres sin espacio:') {
    characterNoSpacesCount.textContent = 'Recuento de caracteres sin espacio:';
  }

  if (numberCountText !== 'Recuento de números:') {
    numberCount.textContent = 'Recuento de números:';
  }

  if (numberSumText !== 'Suma total de números:') {
    numberSum.textContent = 'Suma total de números:';
  }

  if (wordLengthAverageText !== 'Promedio longitud:') {
    wordLengthAverage.textContent = 'Promedio longitud:';
  }

  // Limpiar el contenido del textarea
  userInput.value = '';
});

/*
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  // Reiniciar las métricas (setear valores en 0)
  userInput.value = ''; // Limpiar el contenido del textarea
  wordCount.textContent = 'Recuento de palabras:'; // Reiniciar el conteo de palabras
  characterCount.textContent = 'Recuento de caracteres:'; // Reiniciar el conteo de caracteres
  characterNoSpacesCount.textContent = 'Recuento de caracteres sin espacio:'; // Reiniciar el conteo de caracteres sin espacios
  numberCount.textContent = 'Recuento de números:'; //Reiniciar el conteo de numeros
  numberSum.textContent = 'Suma total de números:'; //Reiniciar la suma de numeros
  wordLengthAverage.textContent = 'Promedio longitud:'; //Reiniciar longitud
});

/*
resetButton.classList.add('clicked');
function removeClickedClass() {
  resetButton.classList.remove('clicked');
}
  
resetButton.addEventListener('click', () => {
  Limpiartexto();
  
  // Remover la clase 'clicked' después de 300 milisegundos (0.3 segundos)
  setTimeout(removeClickedClass, 300);
});
/*
function calcular(elemento) {
  getWordCount(elemento);
  getCharacterCount(elemento);
  getCharacterCountExcludingSpace(elemento);
  getNumbersCount(elemento);
  getAverageWordLength(elemento);
  getNumberSum(elemento);

}
function getWordCount(elemento){
  const texto = elemento.value;
  const palabras = texto.split(/\s+/).filter(word => word !== "");
  return
}
/*
// Obtener el elemento <textarea> y la lista desordenada (ul)
let textarea = document.getElementById("miTextarea");
let ulRecuentos = document.querySelector(".Recuentos");

// Función para actualizar las métricas
function actualizarMetricas() {
  const texto = textarea.value;
  const palabras = texto.split(/\s+/).filter(word => word !== "");

  const wordCountElement = document.querySelector('[data-testid="word-count"]');
  const characterCountElement = document.querySelector('[data-testid="character-count"]');
  const characterNoSpacesCountElement = document.querySelector('[data-testid="character-no-spaces-count"]');
  const numberCountElement = document.querySelector('[data-testid="number-count"]');
  const numberSumElement = document.querySelector('[data-testid="number-sum"]');
  const wordLengthAverageElement = document.querySelector('[data-testid="word-length-avarage"]');

  wordCountElement.textContent = "Recuento de palabras: " + palabras.length;
  characterCountElement.textContent = "Recuento de caracteres: " + texto.length;
  characterNoSpacesCountElement.textContent = "Recuento de caracteres sin espacios: " + texto.replace(/\s+/g, "").length;

  const numbers = texto.match(/\d+/g);
  const numbersCount = numbers ? numbers.length : 0;
  const numbersSum = numbers ? numbers.reduce((acc, curr) => acc + parseInt(curr), 0) : 0;
  numberCountElement.textContent = "Recuento de números: " + numbersCount;
  numberSumElement.textContent = "Suma total de números: " + numbersSum;

  const wordLengthSum = palabras.reduce((acc, word) => acc + word.length, 0);
  const wordLengthAverage = palabras.length > 0 ? wordLengthSum / palabras.length : 0;
  wordLengthAverageElement.textContent = "Longitud media de palabras: " + wordLengthAverage.toFixed(2);
}

const textarea = document.querySelector('[name="user-input"]');
textarea.addEventListener("keyup", function () {
  calcular(textarea);
})

const reset = document.getElementById("reset-button");
reset.addEventListener("click", LimpiarTexto);

/*

function getWordCount(elemento){
  let resultado = analizer.getWordCount (elemento);
  let liCollection = document.querySelector('[data-testid="word-count"]');
  if (liPalabras.length > 0){
    liPalabras[0].innerHTML = "Recuento de palabras: " + resultado;
  }
}

function getCharacterCount(elemento){
  const liCollection = document.getElementsByTagName("li")
  if (liCollection.length > 0) {
    liCollection[0].innerHTML = "Recuento de caracteres: " + elemento.value.length;
  }
}
*/