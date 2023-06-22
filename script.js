let jogoIniciado = false;
let gameover = false; // Variável para controlar o estado de game over

window.addEventListener('keydown', function(event) {
  if (!jogoIniciado) {
    iniciarJogo();
  }
});

function iniciarJogo() {
  // Define a flag para true para evitar que o jogo seja iniciado novamente
  jogoIniciado = true;

  // Oculta a tela inicial
  document.getElementById('tela-inicial').style.display = 'none';

  const mario = document.querySelector('.mario')
  const pipe = document.querySelector('.pipe')

  const jump = () => {
    if (!gameover) { // Verifica se o jogo está em estado de game over
      mario.classList.add('jump')

      setTimeout(() => {
        mario.classList.remove('jump')
        updateScore()

      }, 500)
    }
  }

  const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ) {
      // O jogo entra em estado de game over
      
      gameover = true; // Define a variável gameover como true

      pipe.style.animation = 'none'
      pipe.style.left = `${pipePosition}px`

      mario.style.animation = 'none'
      mario.style.bottom = `${marioPosition}px`

      mario.src = "./game-over.png"
      mario.style.width = '75px'
      mario.style.marginLeft = '50px'
     
      clearInterval(loop)

      // Exibe o alerta após um pequeno atraso
setTimeout(function() {
  alert('HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA noob \n \n \n Clique em "OK" para recomeçar noob');

  // Redireciona para a tela inicial após o usuário clicar em "OK"
  window.location.href = 'index.html'; 
}, 100);

    }
  }, 10)

  document.addEventListener('keydown', jump)

  // Sistema de pontuação
  let score = 0

  function updateScore() {
    score++;
    document.getElementById('score').textContent = score;
  }

  if (pipePosition === 120) {
    updateScore();
  }

 
  
  
}
