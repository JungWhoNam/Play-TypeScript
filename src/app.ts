import { EmailValidator, ZipValidator } from './Validators/FormValidator';
import { Person, Employee } from './User/User';

let emailValidator = new EmailValidator();
let zipValidator = new ZipValidator();
{
    let email: string = "john.doe@email.com";
    let zipCode: string = "55455";
    console.log(`is ${email} an email? ${emailValidator.isValid(email)}`)
    console.log(`is ${zipCode} a valid zip code? ${zipValidator.isValid(zipCode)}`);
}
{
    let email: string = "john.doe@gmai@email.com";
    let zipCode: string = "123456";
    console.log(`is ${email} an email? ${emailValidator.isValid(email)}`)
    console.log(`is ${zipCode} a valid zip code? ${zipValidator.isValid(zipCode)}`);
}

let person: Person = new Person('171280926', 'John', 'Doe');
// person.lastName = null;
person.lastName = "Duffy";
console.log(person.describe());
{
    let employee: Employee = new Employee('171280926', 'John', 'Doe', 'student');
    console.log(employee.describe());
    console.log(`the total number of employee... ${Employee.getCount()}`);    
}
{
    let employee: Employee = new Employee('000000000', 'Julie', 'Dam', 'professor');
    console.log(employee.describe());
    console.log(`the total number of employee... ${Employee.getCount()}`);
}