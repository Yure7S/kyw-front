import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class GenerateValidationMessagesService {

  public static default(element: string = 'Campo', termination: string = 'o'): object {
    return ({
      required: `* ${element} obrigatóri${termination}`,
      maxlength: `* ${element} inválid${termination}`,
      minlength: `* ${element} inválid${termination}`,
      email: `* ${element} inválid${termination}`,
    })
  }
}
