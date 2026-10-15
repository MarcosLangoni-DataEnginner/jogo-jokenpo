
const opcoes = ["pedra", "papel", "tesoura"];

let vitorias = 0;
let derrotas = 0;
let empates = 0;

// Captura os elementos da página
const botoes = document.querySelectorAll(".opcao");
const mensagem = document.getElementById("mensagem");
const jogadaJogador = document.getElementById("jogada-jogador");
const jogadaComputador = document.getElementById("jogada-computador");

// Adiciona eventos de clique aos botões
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const escolhaJogador = botao.dataset.escolha;
        jogar(escolhaJogador);
    });
});

// Função principal do jogo
function jogar(escolhaJogador) {

    // Computador escolhe aleatoriamente
    const numeroAleatorio = Math.floor(Math.random() * 3);
    const escolhaComputador = opcoes[numeroAleatorio];

    jogadaJogador.textContent = "Sua jogada: " + escolhaJogador;
    jogadaComputador.textContent =
        "Jogada do computador: " + escolhaComputador;

    // Verifica o resultado
    if (escolhaJogador === escolhaComputador) {
        mensagem.textContent = "Empate! 🤝";
        empates++;

    } else if (
        (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
        (escolhaJogador === "tesoura" && escolhaComputador === "papel")
    ) {
        mensagem.textContent = "Você venceu! 🎉";
        vitorias++;

    } else {
        mensagem.textContent = "Computador venceu! 😢";
        derrotas++;
    }

    // Atualiza o placar
    document.getElementById("vitorias").textContent = vitorias;
    document.getElementById("derrotas").textContent = derrotas;
    document.getElementById("empates").textContent = empates;

    // Reinicia a animação do resultado
    mensagem.style.animation = "none";
    void mensagem.offsetWidth;
    mensagem.style.animation = "aparecer 0.5s ease";
}

// Botão para reiniciar o jogo
document.getElementById("reiniciar").addEventListener("click", () => {

    vitorias = 0;
    derrotas = 0;
    empates = 0;

    document.getElementById("vitorias").textContent = 0;
    document.getElementById("derrotas").textContent = 0;
    document.getElementById("empates").textContent = 0;

    jogadaJogador.textContent = "Sua jogada: -";
    jogadaComputador.textContent = "Jogada do computador: -";
    mensagem.textContent = "Faça sua escolha!";
});
