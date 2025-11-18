// #1

let names: string[] = ["Alice", "Bob"];
let grades: number[] = [90, 85, 78];
let statusList: boolean[] = [true, false];

// Wrong pushes
// names.push(123); 
// grades.push("A+"); 
// statusList.push("true");


// Correct way
names.push("Charlie");
grades.push(92);
statusList.push(false)

// #2
// Javascript version
let products1 = ["Phone", "Laptop", 99]; // mixed values

products1.push(99); 


// TypeScript version
let products: string[] = ["Phone", "Laptop"];

products.push("Tablet");

// #3

let locations: [string, number, number] = ["Nairobi", 1863, 3608];

// wrong tuple order
// locations = [123, "Nairobi", true];

// correct tuple order
locations = ["Mombasa", 435, 682];




