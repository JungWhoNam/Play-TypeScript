import { EmailValidator, ZipValidator } from './FormValidator';

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