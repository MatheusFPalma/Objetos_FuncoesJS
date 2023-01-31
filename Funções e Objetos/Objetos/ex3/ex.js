// Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

let alunos = [];

let aluno1 = {
  nome: "",
  notas: [],
  media: 0
};

let aluno2 = {
  nome: "",
  notas: [],
  media: 0
};

aluno1.nome = prompt("Insira o nome do primeiro aluno:");
aluno1.notas.push(Number(prompt("Insira a primeira nota do primeiro aluno:")));
aluno1.notas.push(Number(prompt("Insira a segunda nota do primeiro aluno:")));
aluno1.media = (aluno1.notas[0] + aluno1.notas[1]) / 2;

aluno2.nome = prompt("Insira o nome do segundo aluno:");
aluno2.notas.push(Number(prompt("Insira a primeira nota do segundo aluno:")));
aluno2.notas.push(Number(prompt("Insira a segunda nota do segundo aluno:")));
aluno2.media = (aluno2.notas[0] + aluno2.notas[1]) / 2;

alunos.push(aluno1);
alunos.push(aluno2);

console.log("Informações do primeiro aluno:");
console.log("Nome: " + aluno1.nome);
console.log("Notas: " + aluno1.notas);
console.log("Média: " + aluno1.media);

console.log("Informações do segundo aluno:");
console.log("Nome: " + aluno2.nome);
console.log("Notas: " + aluno2.notas);
console.log("Média: " + aluno2.media);

let mediaTurma = (aluno1.media + aluno2.media) / 2;
console.log("Média da turma: " + mediaTurma);