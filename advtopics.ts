
// interface as Type
interface KeyPair {
    key: number;
    value: string;
}
let pair: KeyPair = { key: 0, value: "hi" };

// interface as Function Type
interface KeyPairProcessor {
    (key: number, value: string): void;
}
function addKey(key: number, value: string) {
    console.log(`addKey... ${key} ${value}`);
}
function updateKey(key: number, value: string) {
    console.log(`updateKey... ${key} ${value}`);
}
let processor: KeyPairProcessor = addKey;
processor(10, "Bill");
processor = updateKey;
processor(10, "Bill");

// interface as Array Type
interface StringList {
    [index: number]: string;
}
let list: StringList = ["Hello", "my", "name", "is", "Bob"];
console.log(list[0]);
console.log(list[2]);

// implementing interface
interface IEmployee {
    code: number;
    name: string;
    getSalary: (code: number) => number;
}
class Emp implements IEmployee {
    code: number;
    name: string;

    constructor(code: number, name: string) {
        this.code = code;
        this.name = name;
    }

    getSalary(code: number) {
        return 20000;
    }
}
let employee: IEmployee = new Emp(23, "John");
console.log(employee.getSalary(23));

// Interaction Types
interface BusinessPartner {
    name: string;
    credit: number;
}
interface Identity {
    id: number;
    name: string;
}
interface Contact {
    email: string;
    phone: string;
}

{
    type Employee = Identity & Contact;
    let e: Employee = {
        id: 100,
        name: "John Doe",
        email: "JD@email.com",
        phone: "000-000-0000"
    }
}

type Customer = BusinessPartner & Contact;
let c: Customer = {
    name: "Tom Doy",
    credit: 100000,
    email: "TD@email.com",
    phone: "000-000-0001"
}

{
    type Employee = Identity & BusinessPartner & Contact;
    let e: Employee = {
        id: 100,
        name: "John Doe",
        email: "JD@email.com",
        phone: "000-000-0000",
        credit: 100000
    }
}

// type assertions
function getNetPrice(price:number, discount: number, format: boolean): string | number {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
{
    let netPrice = getNetPrice(100, 0.05, true) as string;
    console.log(netPrice);
}
{
    let netPrice = getNetPrice(100, 0.05, false) as number;
    console.log(netPrice);
}