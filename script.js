// Inicializando o Vanilla Tilt
VanillaTilt.init(document.querySelector(".image-container"), {
  reverse: true,      // Ativando o tilt reverso
  max: 25,            // Grau máximo de inclinação
  speed: 400,         // Velocidade da animação
  glare: true,        // Ativando o brilho
  "max-glare": 0.5    // Intensidade máxima do brilho
});
VanillaTilt.init(document.querySelector("h1"), {
  reverse: true,      // Ativando o tilt reverso
  max: 25,            // Grau máximo de inclinação
  speed: 400,         // Velocidade da animação
  glare: true,        // Ativando o brilho
  "max-glare": 0.5    // Intensidade máxima do brilho
});


document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulando um login (apenas para fins de exemplo)
  if (email === "joao@gmail.com" && password === "123456") {
    console.log("Login bem-sucedido");
    // Redirecionando o usuário para a página Home após login bem-sucedido
    window.location.href = "home.html"; // Coloque o nome correto do arquivo da página Home
  } else {
    console.log("Erro ao realizar login");
    // Exibindo uma mensagem de erro (pode ser personalizada com alertas ou mensagens na tela)
    alert("Email ou senha incorretos. Tente novamente.");
  }
});
