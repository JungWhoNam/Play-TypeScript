import Person from './Person';

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

    // overriding the method
    public describe(): string {
        return super.describe() + ` And I am a ${this.jobTitle}.`;
    }

    public static getCount():number {
        return Employee.count;
    }
}

export { Employee };