import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export abstract class CustomValidators {

   static identicalPassword(passwordControlName: string): ValidatorFn | null {
      return (control: AbstractControl): ValidationErrors | null => {
         return control.parent?.get(passwordControlName)?.value !== control.value
            ? { passwordNoMatch: true }
            : null;
      };
   }

   static cpfFormat(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
         const validateCpf = (cpf: string): boolean => {
            if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

            const digits = cpf.split('').map(Number);

            let sum1 = digits.slice(0, 9).reduce((acc, digit, index) => acc + digit * (10 - index), 0);
            let checkDigit1 = sum1 % 11;
            checkDigit1 = (checkDigit1 < 2) ? 0 : (11 - checkDigit1);

            if (checkDigit1 !== digits[9]) return false;

            let sum2 = digits.slice(0, 10).reduce((acc, digit, index) => acc + digit * (11 - index), 0);
            let checkDigit2 = sum2 % 11;
            checkDigit2 = (checkDigit2 < 2) ? 0 : (11 - checkDigit2);

            return checkDigit2 === digits[10];
         };
         return !validateCpf(control.value)
            ? { invalidCpfFormat: true }
            : null
      }
   }
}

