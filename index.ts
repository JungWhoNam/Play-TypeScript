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

// class, readonly access modifier
class Person {
    public readonly ssn: string;
    private _firstName: string;
    private _lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(firstName: string) {
        if (!firstName) throw new Error("Invalid first name.");
        this._firstName = firstName;
    }

    public get lastName() {
        return this._firstName;
    }

    public set lastName(lastName: string) {
        if (!lastName) throw new Error("Invalid last name.");
        this._lastName = lastName;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    public describe(): string {
        return `This is ${this.getFullName()}.`;
    }
}

class Employee extends Person {
    private static count: number = 0;

    // can declare properties in a constructor
    constructor(
        ssn: string,
        firstName: string,
        lastName: string, 
        private jobTitle: string) {

        super(ssn, firstName, lastName);

        Employee.count += 1;
    }

    // method overriding
    public describe(): string {
        return super.describe() + ` And I am a ${this.jobTitle}`;
    }

    public static getCount():number {
        return Employee.count;
    }
}


let person: Person = new Person('171280926', 'John', 'Doe');
// person.lastName = null;
person.lastName = "Duffy";
console.log(person.describe());

let e0: Employee = new Employee('171280926', 'John', 'Doe', 'student');
console.log(e0.describe());
console.log(`the total number of employee... ${Employee.getCount()}`);

let e1: Employee = new Employee('000000000', 'Julie', 'Dam', 'professor');
console.log(e1.describe());
console.log(`the total number of employee... ${Employee.getCount()}`);
