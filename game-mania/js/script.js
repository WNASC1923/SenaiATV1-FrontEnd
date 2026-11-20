
// Abre e fecha o menu
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

if (botaoMenu) {
    botaoMenu.onclick = function() {
        menu.classList.toggle("aberto");
    };
}

// Filtra os produtos por categoria
const filtro = document.getElementById("filtro");
const produtos = document.querySelectorAll(".produto");

if (filtro) {
    filtro.onchange = function() {
        produtos.forEach(function(produto) {
            if (filtro.value == "todos" || filtro.value == produto.dataset.categoria) {
                produto.style.display = "block";
            } else {
                produto.style.display = "none";
            }
        });
    };
}

// Verifica os campos do login
const formulario = document.getElementById("form-login");

if (formulario) {
    formulario.onsubmit = function(evento) {
        evento.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;

        const erroEmail = document.getElementById("erro-email");
        const erroSenha = document.getElementById("erro-senha");
        const mensagem = document.getElementById("mensagem");

        erroEmail.textContent = "";
        erroSenha.textContent = "";
        mensagem.textContent = "";

        let valido = true;

        if (email == "") {
            erroEmail.textContent = "Digite seu e-mail.";
            erroEmail.style.color = "red";
            valido = false;
        } 
        
        else if (!email.includes("@") || !email.includes(".")) {
            erroEmail.textContent = "Digite um e-mail válido.";
            erroEmail.style.color = "red";
            valido = false;
        }

        if (senha.trim() == "") {
            erroSenha.textContent = "Digite uma senha.";
            erroSenha.style.color = "red";
            valido = false;
        }

        if (valido) {
            mensagem.textContent = "Login realizado com sucesso!";
            mensagem.style.color = "green";
            formulario.reset();
        } else {
            mensagem.textContent = "Verifique os campos e tente novamente.";
            mensagem.style.color = "red";
        }
    };
}
