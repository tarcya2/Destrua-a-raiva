// Seleciona a área do jogo e a mensagem
const gameArea = document.getElementById('game-area');
const message = document.getElementById('message');

 // Função para gerar obstáculos
 function createObstacles(quantity) {
    for (let i = 0; i < quantity; i++) {
        // Cria o elemento de obstáculo
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');

        // Define uma posição aleatória dentro da área de jogo
        const x = Math.random() * (gameArea.clientWidth - 30); // Largura do obstáculo
        const y = Math.random() * (gameArea.clientHeight - 30); // Altura do obstáculo

        // Aplica as posições
        obstacle.style.left = `${x}px`;
        obstacle.style.top = `${y}px`;

        // Adiciona evento de clique para remover o obstáculo
        obstacle.addEventListener('click', () => {
            obstacle.remove();
            checkVictory();
        });

        // Adiciona o obstáculo à área de jogo
        gameArea.appendChild(obstacle);
    }
 }

 // Verifica se todos os obstáculos foram removidos
 function checkVictory() {
    const remainingObstacles = document.querySelectorAll('.obstacle');
    if (remainingObstacles.length === 0) {
        message.textContent = 'Parabéns! Você destruiu toda sua raiva!!!';
    }
 }

// Chama a função para gerar 10 obstáculos
createObstacles(10);