// #1 Echo Function with Generics

function echo<T>(input: T): T {
    return input;
}

const username = echo("Amino")
const age = echo(28)
const items = echo(['item1', 'item2', 'item3']);
const data = echo({ name: "Ibrahim", age: 24})


// #2 Generic Interface

interface ApiResult<T> {
    status: string;
    data: T;
}

const stringApi : ApiResult<string> = {
    status: "success",
    data: "completed successfully"
}

const userApi : ApiResult<{ id: number, name: string }> = {
    status: "success",
    data: {
        id: 1,
        name: "OmarTood"
    }
}

// #3 Generic function

function first<T>(items: T[]): T {
    return items[0];
}
// array of numbers
const firstNumber = first([1,2,3,54]);
console.log(firstNumber)

// array of strings
const firstFruits = first(["Apple", "Banana", "Orange"])
console.log(firstFruits);

// array of objects

const user = first([
    {
        id: 1,
        name: "Hamouda"
    },
    {
        id: 2,
        name: "Fatma"
    }
])

console.log(user);

