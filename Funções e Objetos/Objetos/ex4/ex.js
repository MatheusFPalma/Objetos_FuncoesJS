// em javascript Crie cinco objetos JavaScript dentro de um Array contendo
// nome(texto), idade(número), skills (array), ou seja um total de cinco
// alunos. Agora crie uma função que receba estes cinco objetos e
// mais um parâmetro skill. Dependendo da skill enviada mostrar no
// console.log(), quais alunos têm a skill enviada por parâmetro,
// mostrar todo o objeto.
// Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
// chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
// Pedro e qual mais se encaixa nessa skill

const alunos = [];

const addAluno = () => {
  const nome = prompt("Informe o nome do aluno:");
  const idade = parseInt(prompt("Informe a idade do aluno:"));
  const skills = prompt("Informe as habilidades do aluno separadas por vírgula:").split(", ");

  alunos.push({ nome, idade, skills });
};

for (let i = 0; i < 5; i++) {
  addAluno();
}

const filtroSkill = skill => {
  const alunosEncontrados = alunos.filter(aluno => aluno.skills.includes(skill));
  console.log(`Alunos encontrados com a habilidade "${skill}":`);
  console.log(alunosEncontrados);
};

const skill = prompt("Informe a habilidade que deseja buscar:");
filtroSkill(skill);