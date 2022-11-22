//Estrutura de decisao
const num: number = 14;

if (num > 15) {
  console.log("numero maior que 15");
} else if (num === 15) {
  console.log("Numero igual a 15");
} else {
  console.log("numero menor que 15");
}

//objeto literal
const typeUser = {
  admin: "Seja bem-vindo admin",
  student: "Voce é um estudante",
  viewer: "voce pode visualizar",
};

function validateUser(user: string) {
  console.log(typeUser[user as keyof typeof typeUser]);
}
const usuario = "admin";

validateUser(usuario);
