// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD-fkZV3GlVyO1ajekW6_2ErjRTqe8O7SY",
  authDomain: "medicinaveterinaria-1b5ed.firebaseapp.com",
  projectId: "medicinaveterinaria-1b5ed",
  storageBucket: "medicinaveterinaria-1b5ed.appspot.com",
  messagingSenderId: "738611210683",
  appId: "1:738611210683:web:b056e608d3e65903da3c9e"
};

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Função para autenticar o usuário
const login = (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Usuário autenticado com sucesso
      const user = userCredential.user;
      console.log('Usuário autenticado:', user);
      // Redireciona para a página home.html
      window.location.href = 'home.html';
    })
    .catch((error) => {
      // Exibe erro em caso de falha no login
      console.error('Erro ao fazer login:', error.code, error.message);
      alert('Erro: ' + error.message);
    });
};

// Lida com o envio do formulário de login
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();  // Evita o comportamento padrão do formulário
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Valida se os campos de email e senha estão preenchidos
  if (email && password) {
    login(email, password);
  } else {
    alert('Preencha todos os campos!');
  }
});
