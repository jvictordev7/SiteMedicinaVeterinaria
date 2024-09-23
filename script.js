// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-fkZV3GlVyO1ajekW6_2ErjRTqe8O7SY",
  authDomain: "medicinaveterinaria-1b5ed.firebaseapp.com",
  projectId: "medicinaveterinaria-1b5ed",
  storageBucket: "medicinaveterinaria-1b5ed.appspot.com",
  messagingSenderId: "738611210683",
  appId: "1:738611210683:web:b056e608d3e65903da3c9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função para autenticar usuário
const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Sucesso na autenticação
      const user = userCredential.user;
      console.log('Usuário autenticado:', user);
      // Redireciona para home.html
      console.log('Redirecionando para home.html');
      window.location.href = 'home.html'; // Redirecionamento
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Erro ao autenticar:', errorCode, errorMessage);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    });
};

// Adicionar event listener para o formulário
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o envio padrão do formulário
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
