"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.584848;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - string
const firstName = "Fabio";
console.log(firstName.toLocaleUpperCase());
let fullName;
const lastName = "Furlan";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e annotation
let ann = "Teste";
let inf = "Teste";
console.log("Testando");
// 1 Crie uma variavel que recebe um numero
// 2 Converta este número para string em uma nova variavel
// 3 Esta variavel de conversão deve estar tipada por inferencia
// 4 Imprima este número em uma string maior, ultilizando o recurso de template string ou concatenação
const n1 = 10;
const b = n1.toString();
const imprimirNumero = `O número impresso é ${b}`;
console.log(imprimirNumero);
