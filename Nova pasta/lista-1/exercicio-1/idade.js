// Defina sua data de nascimento
const dataNascimento = new Date('09-06-2007');

// Defina o ano de referência
const anoReferencia = 2040;

// Calcule a idade em 2040
const idadeEm2040 = anoReferencia - dataNascimento.getFullYear();

// Apresente o resultado no console
console.log("Sua idade em 2040 será: " + idadeEm2040 + " anos");