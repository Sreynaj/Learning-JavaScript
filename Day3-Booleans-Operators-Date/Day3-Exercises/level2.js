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

//#3
console.log('\n---Calculate the Perimater of the triagle ---')
let length = parseInt(prompt('Enter length: '))
let weight = parseInt(prompt('Enter weight: '))
let p = 2*(length+weight)
console.log("The perimeter of the triangle is: ",p)

//#4
console.log('\n---Calculate the Area and Circumference of the cricle ---')
let radius = parseInt(prompt('Enter the redius: '))
let PI = 3.14
let Area = PI * radius * radius
let Circumference = 2 * PI * radius
console.log("The area of the circle is : ",Area)
console.log("The circumference of the circle is : ",Circumference)