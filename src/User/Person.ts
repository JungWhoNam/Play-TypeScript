export default class Person {
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