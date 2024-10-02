const alunos = [
    {
        nome: 'Pablo',
        idade: 25
    },
    {
        nome: 'José',
        idade: 19
    },
    {
        nome: 'Joao',
        idade: 23
    },
];

alunos.push({
    nome: "Lucas",
    idade: 24
});

console.log(alunos[0].idade);

const alunosFiltrados = alunos.filter((aluno) => aluno.idade === 23);
console.table(alunosFiltrados);
