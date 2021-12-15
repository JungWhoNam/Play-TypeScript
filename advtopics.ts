
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