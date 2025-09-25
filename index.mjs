import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";

const archivoOriginal = "./superheroes.txt";
const archivoNuevos = "./agregarSuperheroes.txt";

//Agregar nuevos superheroes
agregarSuperheroes (archivoOriginal,archivoNuevos);


//leer y mostrar la lista de super heroes ordenada
const superheroes = leerSuperheroes (archivoOriginal);
console.log ("Superheroes Ordenados: ");
console.log (superheroes);