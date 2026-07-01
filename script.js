// Função para o Modo Escuro
const btnTema = document.getElementById('btn-tema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Validação do Quiz
const formQuiz = document.getElementById('form-quiz');
const resultado = document.getElementById('resultado');

formQuiz.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de recarregar
    
    const resposta = formQuiz.q1.value;
    
    if (!resposta) {
        resultado.innerHTML = "<p style='color: orange;'>Por favor, selecione uma opção!</p>";
        return;
    }
    
    if (resposta === "certo") {
        resultado.innerHTML = "<p style='color: green; font-weight: bold;'>Correto! Nem todo vídeo ruim é deepfake, e as deepfakes reais são feitas por IA.</p>";
    } else {
        resultado.innerHTML = "<p style='color: red; font-weight: bold;'>Incorreto. Tente ler mais sobre como a IA manipula os pixels do vídeo.</p>";
    }
});
