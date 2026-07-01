let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio';

function Console(){
    console.log("O botão foi clicado")
};

function alerta(){
    alert('Eu amo JS')
};

function perguntarCidade(){
    let cidade = prompt('Fale um nome de uma cidade do Brasil?')
    alert(`Estive em ${cidade} e lembrei de você.`)
};

function somaNumeros(){
    let n1 = prompt('Digite um número:')
    let n2 = prompt('Digite Outro número:')
    let n3 = Number(n1)+Number(n2)
    alert(`${n1} + ${n2} = ${n3}`)
}