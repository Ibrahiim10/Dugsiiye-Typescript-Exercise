// #1 Declare Variables with Explicit Types

let productName: string = "Laptop";
let price: number = 999.99;
let discountAvailable: boolean = true;


// productName = 123; 
// price = "1000"; 
// discountAvailable = "false";

productName = "MacBook Air";
price = 1000;
discountAvailable = false;

// #2 Fix this Broken JavaScript

function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

console.log(getDiscount(100, 0.5));


// #3 Dangerous any – Fixing It Safely

// The problem with any
// printLength("Hello");
// printLength(123);    

// function printLength(x: any) {
//   console.log(x.length);
// }


function printLength(x: unknown) {
  if (typeof x === "string")
    console.log(x.length);
}

printLength("Hello"); 
printLength(123);     

