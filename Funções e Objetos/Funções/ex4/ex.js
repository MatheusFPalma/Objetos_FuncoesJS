// Crie uma função chamada calcularMedia(nota1, nota2, nota3,
// nome), que recebe 4 parâmetros sendo três inteiros e um texto
// (String). Esta função será chamada ao abrir a página e mostrará um
// alerta com a média. Exemplo: “João, sua média é 70.” A função
// também deve mostrar no console.log() as notas recebidas. Exemplo
// “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

let nome, nota1, nota2, nota3;

nome = prompt("Insira seu nome:");
nota1 = parseInt(prompt("Insira sua primeira nota:"));
nota2 = parseInt(prompt("Insira sua segunda nota:"));
nota3 = parseInt(prompt("Insira sua terceira nota:"));

function calcularMedia(nota1, nota2, nota3, nome) {
  let media = (nota1 + nota2 + nota3) / 3;
  let resultado = media >= 7 ? "Aprovado" : "Reprovado";
  console.log("Nota 1: " + nota1 + ", Nota 2: " + nota2 + ", Nota 3: " + nota3);
  alert(nome + ", sua média é " + media.toFixed(2) + " e você está " + resultado);
}

calcularMedia(nota1, nota2, nota3, nome);
  