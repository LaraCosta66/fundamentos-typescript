interface Pessoa {
  nome: string;
  idade: number;
  profissao?: string; // '?' Torna a propriedade opcional
}
const pessoa: Pessoa = {
  nome: "Lara",
  idade: 22,
};

const anotherPerson: Pessoa = {
  nome: "Samila",
  idade: 21,
  profissao: "Dev frontend",
};

const arrayPessoa: Pessoa[] = [pessoa, anotherPerson];
const arrayPerson: Array<Pessoa> = [pessoa, anotherPerson];
