                        // ejercicio 1


// // 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// // Pediremos al usuario qué figura queremos calcular, su área y, según lo introducido,
// // pedirá los valores necesarios para calcular el área. Para ello has de crear un método
// // por cada figura para calcular cada área, este devolverá un número real. Muestra el
// // resultado por consola.
// // Aquí te mostramos qué necesita cada figura:
// // • Circulo: (radio^2)*PI
// // • Triangulo: (base * altura) / 2
// // • Cuadrado: lado * lado


// let figure = prompt(`Introduce la figura sobre la cual deseas calcular el área (circulo, cuadradro o triangulo)`).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");


// switch(figure) {
//     case "circulo":
//         const PI = 3.1416;
//         let radio = parseFloat(prompt("Introduce el radio del circulo"));
//         alert(`El área de un círculo de radio ${radio} es ${Math.pow(radio, 2) * PI}`);
//     break;
//     case "triangulo":
//         let triangleWidth = parseFloat(prompt("introduce la base del triángulo"));
//         let triangleHeight = parseFloat(prompt("Introduce la altura del triángulo"));
//         alert(`El área de un triángulo de base ${triangleWidth} y altura${triangleHeight} es ${(triangleWidth * triangleHeight)/2}`);
//     break;
//     case "cuadrado":
//         let side = parseFloat(prompt("Introduce el lado del cuadrado"));
//         alert(`El área de un cuadrado de lado ${side} es ${(side * side)}`);
//     break;
// }





                        //  ejercicio 2


// // // 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios
// // // introducidos por el usuario (prompt). Crea un método donde pasamos como parámetros
// // // entre qué números queremos que los genere, podemos pedirlas al usuario antes de
// // // generar los números. Este método devolverá un número entero aleatorio. Muestra
// // // estos números por consola.


// const MinMaxRoundedRandom = (min, max) => {
//     return Math.round(Math.random() * (max - min) + min);
// }

// let lowNum = parseInt(prompt(`Introduce el número límite más bajo sobre el que quieres generar aleatorios`));
// let highNum = parseInt(prompt(`Ahora, introduce el número límite más alto sobre el que quieres generar aleatorios`));
// let quantity = parseInt(prompt(`Cuántos números aleatorios quieres generar?`));

// for(let i=1 ; i<= quantity ; i++) {
//     console.log(MinMaxRoundedRandom(lowNum, highNum));
// }


                        // ejercicio 3

// // 3. Crea una aplicación que nos pida un número por prompt y con un método se lo
// // pasamos por parámetro para que nos indique si es o no un número primo, debe
// // devolver true si es primo sino false. Un número primo es aquel solo puede dividirse
// // entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin
// // embargo, 17 si es primo.

// const isPrime = num => {
//     for(let i=2; i < num; i++)
//     if(num % i === 0){
//         alert(`El número ${number} No es primo`);
//         return false;
//     }
//     alert(`El número ${number} sí es primo!`);
//     return
// }
// let number = parseInt(prompt(`Introduce un número para saber si es primo`));
// isPrime(number);


                        // ejercicio 4 

// // 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// // realizara mediante un método al que le pasamos el número como parámetro. Para
// // calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
// // ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120.

// const factoriaCalc = num => {
//     for(let i = num ; i > 1 ; i--){
//         num *= ( i - 1 );
//     }
//     return num;
// }

// let number = parseInt(prompt(`Introduce un número para calcular su factorial`));
// alert(`El factorial de ${number} es ${factoriaCalc(number)}`); 


                        // ejercicio 5

// // 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// // realizará un método al que le pasaremos el número como parámetro, devolverá un
// // String con el numero convertido a binario. Para convertir un número decimal a
// // binario, debemos dividir entre 2 el número y el resultado de esa división se divide
// // entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de
// // cada división formara el número binario, de abajo a arriba.


// const decToBin = num => {
//     let binString = "";
//     //Convierte el nummero en un numero natural
//     num = Math.abs(num);
//     //si el numero es distinto a cero
//     if (num > 0){
//         while(num >= 1){
//             //Extrae el primer módulo
//             let module = num%2;
//             //Concatenarla con la variable BIN
//             binString = binString.concat(module);
//             //Dividir por 2 para calcular y asignar a num para iterar el bucle.
//             //Redondea el resultado para el cálculo binario.
//             num = Math.floor(num / 2);
//         }
//         //invertir la cadena
//         binString = binString.split("").reverse().join("");
//         return binString;
//         //Si cero
//     }else if (num === 0) return "0";
// }
// console.log("decToBin(10)", decToBin(1989));

                        // ejercicio 6

// // // 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// // // (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// // // pasando el número por parámetro devolverá el número de cifras.
// let number = parseInt(prompt(`Introduce un número para contar sus cifras`));

// let number = parseInt(prompt(`Introduce un número para contar sus cifras`));

// const digitCounter = num => {
//     num = Math.abs(num);

//     num = num.toString();

//     return num.length;
// }
// alert(`El número ${number} tiene ${digitCounter(number)} cifras`);


                        // ejercicio 7

// // 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt
// // a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// // parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// // devolverá ningún valor, mostrará un mensaje indicando el cambio.
// // El cambio de divisas es:
// // • 0.86 libras es un 1 €
// // • 1.28611 $ es un 1 €
// // • 129.852 yenes es un 1 €

// let euros = parseFloat(prompt("Introduce la cantidad en euros"));
// let coin;
// let eurosOk;
// let coinOk;
// if (!isNaN(euros)) {
//     eurosOk = true;
//     coin = prompt("Introduce la moneda de cambio (libre, dolar o yenes)").toLowerCase();
// }else if (isNaN(euros)) {
//     eurosOk = false;
//     alert(`Por favor introduce un valor numérico para la cantidad de euros`);
// }
// if ((coin == "libra") || (coin == "dolar") || (coin == "yenes")) {
//     coinOk = true;
// }else if((coin !="libra") && (coin !="dolar") && (coin != "yenes")){
//     coin = false;
//     alert("Por favor introduce una moneda válida");
// }
// const coinConvert = (quantity, coin) => {
//     if (euros && coinOk){
//         switch(coin) {
//             case "libra":
//             alert(quantity * 0.86);
//             break;

//             case "dolar":
//             alert(quantity * 1.28611);
//             break;

//             case "yenes":
//             alert(quantity * 129.852);
//             break;
//         }
//     }
// }
// coinConvert(euros, coin);


                        // ejercicio 8

// // 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// // por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
// // rellenar valores y otro para mostrar.

// const fillArray = () => {
//     let valArray = [];
//     for(let i = 0 ; i < 10 ; i ++) {
//         let value = (prompt(`Introduce el valor nº${ i + 1 }`));
//         valArray.push(value);
//     }
//     return valArray;
// }
// const printArray = arr => {
//     for (i = 0 ; i < arr.lenght ; i ++) {
//         console.log(`El índice ${ i } corresponde al valor ${ arr[ i ]}`);
//     }
// }
// printArray(fillArray());



                        // ejercicio 9

// // 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
// // rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola
// // el valor de cada posición y la suma de todos los valores. 
// // Tareas a realizar: Haz un método para rellenar el array
// // (que tenga como parámetros los números entre los que tenga que generar) 
// // y otro para mostrar el contenido y la suma del array.


// //Declarar una función global para llamar a la acción de aviso
// const callFillArray = () => {
//     //Dentro, declara la función que hará el núcleo del ejercicio.  
//     const fillRandomArray = (low, high) => {
//         let arrSize = high - low;
//         let arr=[];
//         let numRndm=0;
//         let total=0;
//         for(let i=0 ; i<arrSize ; i++){
//             numRndm = Math.random(numRndm);
//             numRndm = numRndm*10;
//             numRndm = Math.floor(numRndm);
//             arr.push(numRndm);
//             console.log(`La posición ${i} tiene el valor ${numRndm}`);
//         }
//     // sumatorio de todos los elementos
//         total = arr.reduce((acc, num) => acc+num);
//         console.log(`La suma de todos los valores es ${total}`);
//     }
//     //Declarar la lógica para llamar al indicador. La razón de esta orden es porque si la declaración de
//     // fillRandomArray() está después, cuando es llamado por la parte del indicador, js arroja un error por haber sido llamado antes de la declaración.
//     let lowLimit = parseInt(prompt('Introduce el límite inferior'));
//     let highLimit;
//     let lowLimitOk = false;
//     let highLimitOk = false;
//     if(!isNaN(lowLimit)) {
//         highLimit = parseInt(prompt('Introduce el límite superior'));
//         lowLimitOk = true;
//     } else alert ('Por favor introduce un valor numérico para el límite inferior');
//     if((!isNaN(highLimit))&&(lowLimitOk)) {
//         highLimitOk = true;
//         fillRandomArray(lowLimit, highLimit);
//     } else if((lowLimitOk)&&(isNaN(highLimit))) {
//         alert ('Por favor introduce un valor numérico para el límite superior');
//     }   
// }
// callFillArray();


                        // ejercicio 10

// // 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá
// // números aleatorios primos entre los números deseados, por último, nos indicará cual
// // es el mayor de todos. Haz un método para comprobar que el número aleatorio es
// // primo, puedes hacer todos los métodos que necesites.

// //Función global que hará todo
// const randomPrimeFinder = (low, high) => {
//     const isPrime = num => {
//         for (let i = 2 ; i < num ; i++)
//         if(num % i === 0){
//             return false;
//         }
//         return true;
//     }
//     //este devuelve un número aleatorio entre dos límites
//     const MinMaxRoundedRandom = (min, max) => {
//         return Math.round(Math.random() * (max - min) + min);
//     }
//     let quantity = parseInt(high - low);
//     let arr = [];

//     //Pasamos por cantidad y empujamos los resultados de la función aleatoria en arr
//     for(let i = 0 ; i < quantity ; i++){
//         arr.push(MinMaxRoundedRandom(low, high));
//     }
//     let primeArr = [];
//     //Pasamos por arr y llamamos a la función de identificador principal
//     for(let j = 0 ; j < arr.length ; j++) {
//         if (isPrime(arr[j])) {
//             primeArr.push( arr[j] );
//         }
//     }
//     // llamamos al método Math.max a toda la matriz primeArr como parámetro usando spread
//     let max = Math.max(...primeArr);
//     //Creamos un objeto que será el retorno de la función
//     const result = {
//         primesFound : primeArr,
//         maxPrime : max
//     };
//     return result;
// }
// let lowNum = parseInt(prompt(`Introduce el número límite más bajo sobre el que quieres generar aleatorios`));
// let highNum = parseInt(prompt(`Ahora, introduce el número límite mas alto sobre el que quieres generar aleatorios`));

// console.log(randomPrimeFinder(lowNum, highNum));


                        // ejercicio 11

// // 11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos
// // estará rellenado con números aleatorios y el otro apuntará al array anterior, reasigna
// // los valores del segundo array con valores aleatorios. Después, crea un método que
// // tenga como parámetros, los dos arrays y devuelva uno nuevo con la multiplicación
// // de la posición 0 del array1 con el del array2 y así sucesivamente. Por último, muestra
// // el contenido de cada array.


// // PARTE 1 DEL EJERCICIO: Generar una matriz con valores aleatorios. Asígnalos a una nueva matriz pero aleatoriamente*/

// //Esta función devuelve un número redondeado aleatorio entre dos límites.
// const MinMaxRoundedRandom = (min, max) => {
//     return Math.round(Math.random() * (max - min) + min);
// }
// let arrSize = parseInt(prompt(`Introdice el tamaño de los Arrays`));
// let arr1 = [];
// let arr2 = [];
// //Esta variable recopila los índices de arr1 que se han copiado en arr2, por lo que no se pueden realizar copias repetidas:
// let arr1IndexLog = [];
// let num;
// //Crear y llenar arr1 con números aleatorios:
// for(let i = 0 ; i < arrSize ; i++){
//     num = Math.round(Math.random(num)* 10000);
//     arr1.push(num);
// }
// //Generar índice aleatorio extraído de arr1
// const generateRandomIndex = () => {
//     let arr1RndmIndex = MinMaxRoundedRandom( 0 , arr1.length - 1);
//     return arr1RndmIndex;
// }
// let nexIndex;
// //Rellenar arr2 con números de arr1 pero distribuidos aleatoriamente. Suponemos que los valores no se pueden repetir.
// for(let j = 0 ; j < arrSize ; j++) {
//     //Guardar índice aleatorio de arr1 a una variable
//     newIndex = generateRandomIndex();
//     //Si bien el índice aleatorio generado ya está guardado, generamos otro para que no se repita.
//     while(arr1IndexLog.includes(nexIndex)){
//         newIndex = generateRandomIndex();
//     }
//     //Guardar todo el índice que se ha guardado
//     arr1IndexLog.push(newIndex);
//     // Empuje el valor de arr1 a arr2
//     arr2.push(arr1[newIndex]);
// }
// console.log(arr1, arr2);
// /********************************************************************************************************** */
// //PARTE 2: Multiplica cada posición de la matriz por las demás y devuelve una nueva matriz con los resultados.

// const arrayMultiplier = (arr1, arr2) => {
//     let resultArray = [];
//     for(i = 0 ; i < arr1.length ; i++) {
//         let result = (arr1[i] * arr2[i]);
//         resultArray.push(result);
//     }
//     return resultArray;
// }
// console.log(arrayMultiplier(arr1, arr2));

                        // ejercicio 12

// // 12. Crea un array de números de un tamaño pasado por prompt, el array contendrá
// // números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un
// // dígito que nosotros le indiquemos por prompt (debes controlar que se introduce un
// // número correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array
// //  de 10 posiciones le indicamos mostrar los números acabados en 5, podría salir
// // 155, 25, etc

// let arrSize = parseInt(prompt("Introduce el tamaño del Array"));
// let arr1 = [];
// //Esta función devuelve un número redondeado aleatorio entre dos límites.
// const MinMaxRoundedRandom = () => {
//     return Math.round(Math.random() * (300 - 1) + 1);
// }
// for(let i = 0 ; i < arrSize ; i++){
//     arr1.push(MinMaxRoundedRandom());
// }
// let digit = parseInt(prompt("Introduce el último digito"));
// let arrNew = [];
// let lastDigit;
// let arrResult = [];

// if((!isNaN(digit)) && (digit >= 0) && (digit < 10)) {
//     for(let j = 0 ; j< arrSize ; j++){
//         //Convierte cada elemento a cadena:
//         arrNew[j] = arr1[j] + "" ;
//         //Convierte la cadena en matriz
//         arrNew[j] = arrNew[j].split("");
//         //Ahora aislamos el ultimo numero para compararlo
//         lastDigit = arrNew[j] [arrNew[j].length -1];
//         if(lastDigit == digit) {
//             arrResult.push(arr1[j]);
//         }
//     }
//     console.log(arrResult);
// }   else alert("Introduce un número del 0 al 9 por favor");













































