'use strict'

setTimeout(function(){
    console.log('Tarea 1'); 
}, 3000); //espera 3 seg
setTimeout(function(){
    console.log('Tarea 2'); 
}, 20000); //espera 20 seg
setTimeout(function(){
    console.log('Tarea 3'); 
}, 30000); //espera 10 seg
setTimeout(function(){
    console.log('Tarea 4'); 
}, 2000); //espera 2 seg

console.log('Tarea 5'); 
console.log(process.uptime())
console.log('Fin del programa'); 