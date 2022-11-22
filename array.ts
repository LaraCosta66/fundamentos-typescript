//A variavel array recebe um tipo de array numerico
const array: Array<number> = [1, 2, 3, 4];
// indica que é um array de string
const stringArray: string[] = ["a", "b", "c"];

console.log(array.length);

//Adicionar elemento na ultiam posiçao
array.push(5);

//remove o ultimo elemento
array.pop();
const buscaNum = array.find((num) => num === 4);

console.log(buscaNum);

array.forEach((num) => {
  if (num > 2) {
    console.log(num);
  }
});
array.map((num) => {
  if (num > 2 && num % 2 === 0) {
    console.log(num);
  }
});
