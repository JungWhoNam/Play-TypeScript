// let message: string = "Hello, World!";
let message: string = "Hello World!";

// process the message
let len: number = message.length;
let overFive: boolean = len > 5;

// show the message
let heading = document.createElement('h1');
heading.textContent = 
`
${message} has ${len} character(s) and 
it's ${overFive ? "" : " not "} over five characters.
`;
document.body.appendChild(heading);

// a function annotation (with the parameter type, the return type annotations)
let greeting: (name: string) => string;
// assigns a function 
greeting = function (name: string) {
    return `Hello ${name}`;
}

// optional tuple elements
let bgColor: [number, number, number, number?];
bgColor = [255, 0, 0, 0];
bgColor = [255, 0, 0];

// enum
enum Day { Mon, Tu, Wed, Th, Fri, Sat, Sun};
let day = Day.Wed;
let dayStr = Day[day];
console.log(day, dayStr);

// union type
function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log("add", add(10,20));
// console.log(add(10, "ten")); // throws an error

// dealing with optional parameters
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log("multiply", multiply(10,2,3));

// rest type
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log("get total", getTotal(10,20,30));