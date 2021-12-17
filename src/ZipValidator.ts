import { Validator as StringValidator } from './Validator';

class ZipValidator implements StringValidator {
    isValid(s: string): boolean {
        const regex = /^[0-9]+$/;
        return s.length === 5 && regex.test(s);
    }
}

export { ZipValidator };