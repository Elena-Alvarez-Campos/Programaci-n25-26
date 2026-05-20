/*
Crea un tablero de ajedrez (8x8) colocando sobre él una pieza de cada tipo (total de 6 piezas) de forma aleatoria y que indique qué piezas pueden comer a qué piezas
*/


/**
 * Solución del AJEDREZ
 * @author Teresa <rteresa@aulaestudio.es>
 * @version 1.0.0
 * @date 2024-03-15
 */
'use strict';
/**
 * el tablero es un array bidimensional de strings o null
 * @type {[[string | null]]}
 */
const tablero = [];
// primer nivel del array
for (let i = 0; i < 8; i++) {
    // creo un array en el primer nivel
    tablero[i] = [];
    // segundo nivel del array
    for (let j = 0; j < 8; j++) {
        // meto un null en la 2ª dimensión
        tablero[i][j] = null;
    }
}

/**
 * array de piezas
 */
const piezas = ['T', 'C', 'A', 'P', 'K', 'Q'];

/**
 * función que imprime el tablero de forma "bonita"
 */
function impresora() {
    /**
     * creo el string que voy a imprimir
     */
    let salida = '  0 1 2 3 4 5 6 7' + '\n'; // la fila de números de arriba y un salto de línea
    for (let i = 0; i < 8; i++) {
        salida += i + '|'; // el número de la izquierda (para la columna de números) y un separador
        for (let j = 0; j < 8; j++) {
            salida += (tablero[i][j] || ' ') + '|'; // coloco la ficha o un espacio en blanco y el separador
            // (null || 10) siempre pondrá 10 porque null es false. Es una forma de ahorrarse un IF
        }
        salida += '\n'; // le hago un salto de línea para ir a la siguiente
    }
    console.log(salida); // por último se imprime
}
//impresora(); // ahora imprimo el tablero para visualizarlo

// ahora vamos a colocar las piezas
for (const pieza of piezas) {
    /** variable de control para saber si la he puesto */
    let colocada = false;
    while (!colocada) { // mientras la pieza no esté colocada
        let x = Math.floor(Math.random() * 8); // x aleatoria
        let y = Math.floor(Math.random() * 8); // y aleatoria
        if (!tablero[x][y]) { // compruebo que no haya nada (null da false en el IF)
            tablero[x][y] = pieza; // coloco la pieza
            colocada = true; // cambio la variable de control
        }
    }
}
impresora(); // ahora imprimo el tablero para visualizarlo

// recorro el tablero
for (let i = 0; i < 8; i++) { // dimensión 1
    for (let j = 0; j < 8; j++) { // dimensión 2
        if (tablero[i][j]) { // si hay una pieza
            let comidas = []; // array de piezas comidas
            switch (tablero[i][j]) {
                case 'T': // la torre
                    comidas = comeHorizontalVertical(i, j);
                    break;
                case 'A': // el alfil
                    comidas = comeDiagonal(i, j);
                    break;
                case 'Q': // la reina
                    comidas = comeHorizontalVertical(i, j);
                    comidas = comidas.concat(comeDiagonal(i, j)); // concat concatena 2 arrays y los devuelve como uno solo
                    break;
                case 'K': // el rey
                    comidas = comeHorizontalVertical(i, j, true); // este come con límite
                    comidas = comidas.concat(comeDiagonal(i, j, true));
                    break;
                case 'P': // el peón
                    // el peón sólo come hacia arriba, por lo que no usaré el comeDiagonal
                    comidas = comePiezas(i, j, -1, 1, true);
                    comidas = comidas.concat(comePiezas(i, j, -1, -1, true));
                    break;
                case 'C': // el caballo
                    // como el caballo es único, no es necesario meterlo en una función, pero tampoco pasaría nada en caso
                    // de hacerlo
                    comidas = comePiezas(i, j, 1, 2, true);
                    comidas = comidas.concat(comePiezas(i, j, 1, -2, true));
                    // a partir de aquí sigo concatenando arrays igual
                    comidas = comidas.concat(comePiezas(i, j, -1, 2, true));
                    comidas = comidas.concat(comePiezas(i, j, -1, -2, true));
                    comidas = comidas.concat(comePiezas(i, j, 2, 1, true));
                    comidas = comidas.concat(comePiezas(i, j, 2, -1, true));
                    comidas = comidas.concat(comePiezas(i, j, -2, 1, true));
                    comidas = comidas.concat(comePiezas(i, j, -2, -1, true));
                    break;
            }
            // imprimo el resultado:
            let texto = "El " + tablero[i][j]; // menciono la pieza
            if (comidas.length) {
                texto += ' come a ' + comidas.join(', ') // digo a cuáles come
            } else {
                texto += ' no come a nadie';
            }
            console.log(texto);
        }
    }
}
/**
 * función que comprueba qué puede comer en horizontal y vertical. 
 * 
 * Se ha metido en una función porque hay varias piezas (torre, reina y rey) 
 * que hacen exactamente estos movimientos. De esta forma no repetimos código
 * 
 * @param {number} i posición x
 * @param {number} j posición y
 * @param {boolean} limite si tiene límite de 1 o no
 * @returns 
 */
function comeHorizontalVertical(i, j, limite = false) {
    let comidas = comePiezas(i, j, 1, 0, limite);
    comidas = comidas.concat(comePiezas(i, j, 0, 1, limite));
    comidas = comidas.concat(comePiezas(i, j, -1, 0, limite));
    comidas = comidas.concat(comePiezas(i, j, 0, -1, limite));
    return comidas;
}
/**
 * función que comprueba qué puede comer en diagonal. 
 * 
 * Se ha metido en una función porque hay varias piezas (alfil, reina y rey) 
 * que hacen exactamente estos movimientos. De esta forma no repetimos código
 * 
 * @param {number} i posición x
 * @param {number} j posición y
 * @param {boolean} limite si tiene límite de 1 o no
 * @returns 
 */
function comeDiagonal(i, j, limite = false) {
    let comidas = comePiezas(i, j, 1, 1, limite);
    comidas = comidas.concat(comePiezas(i, j, 1, -1, limite));
    comidas = comidas.concat(comePiezas(i, j, -1, 1, limite));
    comidas = comidas.concat(comePiezas(i, j, -1, -1, limite));
    return comidas;
}

/**
 * función que recibe la posición de la pieza a chequear y cómo vamos a moverla.
 * 
 * Para moverla:
 *      - Horizontal a la derecha: se le pasará suma_x = 1 y suma_y = 0
 *      - Horizontal a la izquierda: se le pasará suma_x = -1 y suma_y = 0
 *      - ...
 * 
 * De esta forma controlamos exactamente el movimiento que queremos hacer
 * 
 * @param {number} x posición x original
 * @param {number} y posición y original
 * @param {0 | 1 | -1} suma_x cómo avanzamos en la x
 * @param {0 | 1 | -1} suma_y cómo avanzamos en la y
 * @param {boolean} limite si tiene límte de 1 o no
 * @returns {string[]} le indico el tipo porque al haber nulls en el tablero el código interpreta que puedo devolver nulls
 */
function comePiezas(x, y, suma_x, suma_y, limite = false) {
    x += suma_x; // primero cambio la x (si suma_x es 0 no varía)
    y += suma_y; // cambio la y
    let comidas = []; // array donde guardaré las piezas comidas
    // MIENTRAS:
    //  * x >= 0
    //  * x < tablero.length
    //  * y >= 0
    //  * y < tablero[x].length
    // Es decir: mientras la x y la y sigan dentro del tablero
    while (x >= 0 && x < tablero.length && y >= 0 && y < tablero[x].length) {
        if (tablero[x][y]) { // comprobamos si hay algo
            comidas.push(tablero[x][y]); // lo añadimos al array de comidas
            break; // dejamos de buscar, porque ya hemos comido
        }
        if (limite) { // si tiene límite dejamos de movernos
            break;
        }
        // volvemos a movernos para la siguiente en caso de no haber comido
        x += suma_x;
        y += suma_y;
    }
    return comidas; // devuelvo las comidas
}