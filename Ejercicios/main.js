
let koders = [
    {
      name: "Said Barrera",
      generation: 12,
      score: 9.2,
    },
    {
      name: "Helena Fuentes",
      generation: 8,
      score: 8.7,
    },
    {
      name: "Gerardo Cabrera",
      generation: 12,
      score: 9.9,
    },
    {
      name: "Brenda Guerrero",
      generation: 8,
      score: 8.4,
    },
    {
      name: "Alejandro Fuentes",
      generation: 7,
      score: 8.6,
    },
    {
      name: "Sandra Tellez",
      generation: 9,
      score: 9.9,
    },
];
  
/*
1.- Entregar el promedio general del score de los koders
2.- Obtener una nueva lista que contenga únicamente aquellos koders cuyo score sea mayor que 9
3.- Saber cuantos koders hay de alguna generación específica:
1 -> no hay koders de esta generación
9 -> hay 1 koder de la generación 9
12 -> hay 2 koders de la generación 12
*/

function calcularPromedio(koders) {
    let sumaCalificaciones = 0;
    for (let i = 0; i < koders.length; i++) {
        sumaCalificaciones += koders[i].score;
    }
    return sumaCalificaciones / koders.length;
}
          
let promedio = calcularPromedio(koders);
console.log("1.- Promedio general del score de los koders: " + promedio);

/*2.- Obtener una nueva lista que contenga únicamente aquellos koders cuyo score sea mayor que 9*/

function kodersMayorNueve(koders) {
    let nombres = [];
    for (let i = 0; i < koders.length; i++) {
        if (koders[i].score > 9) {
            nombres.push(koders[i].name);
        }
    }
    return nombres;
}      
let nombresMayorNueve = kodersMayorNueve(koders);
console.log("Koders con Score Mayor a 9:", nombresMayorNueve);
          
/*3.- Saber cuantos koders hay de alguna generación específica:
1 -> no hay koders de esta generación
9 -> hay 1 koder de la generación 9
12 -> hay 2 koders de la generación 12*/

function KodersPorGeneracion(koders, generacion) {
    let contador = 0;
    for (let i = 0; i < koders.length; i++) {
        if (koders[i].generation === generacion) {
            contador++;
        }
    }
    return contador;
}
          
let generacion1 = KodersPorGeneracion(koders, 1);
let generacion9 = KodersPorGeneracion(koders, 9);
let generacion12 = KodersPorGeneracion(koders, 12);
          
console.log("Generación 1: " + generacion1 + " koder(s)");
console.log("Generación 9: " + generacion9 + " koder(s)");
console.log("Generación 12: " + generacion12 + " koder(s)");

//////FUNCIONES FLECHA

function getTriangleArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

function checkIfIsEven(number) {
  let result = number % 2 === 0;
  return result;
}

function getRandomKoder(kodersArray) {
  let number = Math.floor(Math.random() * kodersArray.length);
  let koder = kodersArray[number];
  return koder;
}

const getTriangleArea = (base, height) => (base * height) / 2;
const checkIfIsEven = (number) => number % 2 === 0;
const getRandomKoder = (kodersArray, number) => { (number = Math.floor (Math.random()) * kodersArray.length);(koders = kodersArray[number]); return koder}

          


          