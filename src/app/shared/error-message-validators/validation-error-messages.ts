import { GenerateValidationMessagesService as gvms } from "src/app/core/utils/generate-validation-messages.service";

export const validationErrorMessages = {
   default: gvms.default('Campo'),
   name: gvms.default('Nome'),
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
   birthDate: {
      ...gvms.default('Data de nascimento', 'a'),
      invalidMinimumAge: "* Você deve ter mais de 18 anos"
   },
   motherName: gvms.default('Nome da mãe'),
   fatherName: gvms.default('Nome do pai'),
   nationality: gvms.default('Nacionalidade', 'a'),
   naturalness: gvms.default('Naturalidade', 'a'),
   race: gvms.default('Raça', 'a'),
   sex: gvms.default('Sexo'),
   maritalStatus: gvms.default('Estado Civil'),
   cep: gvms.default('CEP'),
   number: gvms.default('Número'),
   street: gvms.default('Logradouro'),
   city: gvms.default('Município'),
   state: gvms.default('Estado'),
   neighbourhood: gvms.default('Bairro'),
   complement: gvms.default('Complemento'),
   rg: gvms.default('RG'),
   rgExpeditionDate: gvms.default('Data RG'),
   rgIssuingOrganization: gvms.default('Órgão Expedidor'),
   rgIssuingState: gvms.default('UF'),
   reservistCard: gvms.default('Estado'),
   electoralCard: gvms.default('Número do Título'),
   electoralCardSection: gvms.default('Seção do Título'),
   electoralCardZone: gvms.default('Zona do Título'),
}