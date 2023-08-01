# **Bienvenido a mi Analizador de Texto**

Esta app de análisis de textos ofrece a los usuarios información sobre el texto que escriban, Puede ser una herramienta útil para los escritores y traductores para que puedan calcular presupuestos. Las funcionalidad de mi analizador son las siguientes:

- Recuento de palabras.
- Recuento de caracteres.
- Recuento de caracteres sin espacios.
- Recuento de números.
- Suma total de números.
- Promedio longitud.
- Un botón para limpiar métricas.

# Contenido
 1. Prototipo.
 2. Vista previa.
 3. Características generales
 4. Características de cada función.
5. Tecnologías utilizadas

## 1. Prototipo.

<a href="https://ibb.co/S09TvL9"><img src="https://i.ibb.co/NpHhY4H/Prototipo.jpg" alt="Prototipo" border="0"></a>

## 2. Vista previa.

Demo

**Imagen**
<a href="https://ibb.co/2ZBst0F"><img src="https://i.ibb.co/dmyL2sf/Analizador-de-texto-Dariana.jpg" alt="Analizador-de-texto-Dariana" border="0"></a>
**Video**
<div>
    <a href="https://www.loom.com/share/7e277fe8e29443d4a1a0c08721fa5044">
      <p>Analizador de texto </p>
    </a>
    <a href="https://www.loom.com/share/7e277fe8e29443d4a1a0c08721fa5044">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/7e277fe8e29443d4a1a0c08721fa5044-with-play.gif">
    </a>
  </div>

## 3. Características generales.
Este proyecto consta de 4 documentos principales.
**index.html,  index.js, style.css y analyzer.js.**

## 4. Características de cada función.
**Analyzer.js**
analyzer.getWordCount(text): esta función retorna el recuento de palabras que se encuentren en el área de texto.

analyzer.getCharacterCount(text): esta función retorna el recuento de caracteres que se encuentran en el área de texto, incluyendo espacios y signos de puntuación.

analyzer.getCharacterCountExcludingSpaces(text): esta función retorna al recuento de caracteres sin espacios que se encuentran en el área de texto. Esta función excluye espacios y signos de puntuación. Elimina todos los caracteres que no sean letras y números utilizando expresión regular para dejar solo letras.

analyzer.getnumberCount(text): esta función retorna al recuento de números validos que se encuentran en el área de texto, incluyendo números decimales.

analyzer.getNumberSum(text): esta función retorna a la suma de números validos que se encuentren en el área de texto, incluyendo decimales.

analyzer.getAverageWordLength(text): esta función retorna a la longitud media de cada palabra. Divide el texto en palabras, después suma las longitudes de todas las palabras y finalmente divide la suma por número total de palabras para así obtener el promedio longitud.

## 5. Tecnologías utilizadas.

**JavaScript**: ejecuta la funcionalidad para analizar el texto y de está manera mostrar los resultados obtenidos.

**html5**: facilita la estructura de nuestra aplicación.

**css3**: determina estilo y diseño de nuestra aplicación.
