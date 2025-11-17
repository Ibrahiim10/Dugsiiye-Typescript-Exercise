// #1 Declare Variables with Explicit Types
var productName = "Laptop";
var price = 999.99;
var discountAvailable = true;
// productName = 123; 
// price = "1000"; 
// discountAvailable = "false";
productName = "MacBook Air";
price = 1000;
discountAvailable = false;
// #2 Fix this Broken JavaScript
function getDiscount(price, discount) {
    return price - price * discount;
}
console.log(getDiscount(100, 0.5));
// #3 Dangerous any – Fixing It Safely
