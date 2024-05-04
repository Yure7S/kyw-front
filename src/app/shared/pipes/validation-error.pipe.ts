import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validationError'
})
export class ValidationErrorPipe implements PipeTransform {

  transform(validateMessage: any, controlErrors: object) {
    return validateMessage[Object.keys(controlErrors)[0]]
  }
}
