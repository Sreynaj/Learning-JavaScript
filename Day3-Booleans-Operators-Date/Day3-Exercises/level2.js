console.log("\n--- Calculate the area of triagle ---");
console.log('\nEnter the inputs: ');
const prompt=require('prompt-sync')();
let base = prompt('Enter Base:');
let height = prompt('Enter height:');


let triagle = 1/2 * base * height
console.log('\nThe area of the triagle is: ',triagle)

console.log('\n---Calculate the Perimater of the triagle ---')
let a = parseInt(prompt('Enter side a: '))
let b = parseInt(prompt('Enter side b: '))
let c = parseInt(prompt('Enter side c: '))
let P = a+b+c
console.log("The perimeter of the triangle is: ",P)