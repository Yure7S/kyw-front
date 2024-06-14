import { GenerateValidationMessagesService as gvms } from "src/app/core/utils/generate-validation-messages.service";

export const validationErrorMessages = {
   default: gvms.default('Campo'),
   name: gvms.default('Nome'),
   title: gvms.default('Título'),
   email: gvms.default('E-mail'),
   cpf: {
      ...gvms.default('CPF'),
      invalidCpfFormat: "* O CPF não tem um formato válido"
   },
   password: {
      required: "* Senha obrigatória",
      minlength: "* Sua senha deve conter no mínimo 8 caracteres",
   },
   confirmPassword: {
      required: "* Confirme sua senha",
      passwordNoMatch: "* As senhas não coincidem."
   },
   phoneNumber: gvms.default('Telefone'),
   fullName: gvms.default('Nome'),
}