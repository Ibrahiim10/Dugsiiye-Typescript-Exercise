// #1 Echo Function with Generics
function echo(input) {
    return input;
}
var username = echo("Amino");
var age = echo(28);
var items = echo(['item1', 'item2', 'item3']);
var data = echo({ name: "Ibrahim", age: 24 });
var stringApi = {
    status: "success",
    data: "completed successfully"
};
var userApi = {
    status: "success",
    data: {
        id: 1,
        name: "OmarTood"
    }
};
// #3 Generic function
function first(items) {
    return items[0];
}
// array of numbers
var firstNumber = first([1, 2, 3, 54]);
console.log(firstNumber);
// array of strings
var firstFruits = first(["Apple", "Banana", "Orange"]);
console.log(firstFruits);
// array of objects
var user = first([
    {
        id: 1,
        name: "Hamouda"
    },
    {
        id: 2,
        name: "Fatma"
    }
]);
console.log(user);
