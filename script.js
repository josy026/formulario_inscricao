document.getElementById("nome").addEventListener("input", (event) => {
    const nome = event.target.value;
    const mensagemNome = document.getElementById("mensagemNome");

    if (nome.length === 0) {
        mensagemNome.textContent = "Campo obrigatório ";
        mensagemNome.style.color = "red";
    } 
    else {
        let valido = true;
        for (let i = 0; i < nome.length; i++) {
            const char = nome[i];
        
            if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ')) {
                valido = false;
                break;
            }
        }

        
        if (valido) {
            mensagemNome.textContent = ""; 
            mensagemNome.style.color = "green";
        } else {
            mensagemNome.textContent = "Somente letras são permitidas ";
            mensagemNome.style.color = "red";
        }
    }
});
document.getElementById("data_nascimento").addEventListener("input", (event) => {
    const dataNascimento = event.target.value; 
    const mensagemIdade = document.getElementById("mensagemIdade");
    
    if (dataNascimento.trim() === "") {
        mensagemIdade.textContent = "Campo obrigatório "; 
        mensagemIdade.style.color = "red"; 
    } else {
        mensagemIdade.textContent = ""; 
    }
});

document.getElementById("cpf").addEventListener("input", (event) => {
    const cpf = event.target.value;
    const mensagemCpf = document.getElementById("mensagemCpf");

   
    if (cpf.length === 11 && !isNaN(cpf)) {
        mensagemCpf.textContent = "";
        mensagemCpf.style.color = "green";
    } else if (cpf.length === 0) {
        mensagemCpf.textContent = "Campo obrigatório";
        mensagemCpf.style.color = "red";
    } else {
        mensagemCpf.textContent = "CPF inválido";
        mensagemCpf.style.color = "red";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("email").addEventListener("input", (event) => {
        const email = event.target.value;
        const mensagemEmail = document.getElementById("mensagemEmail");

       
        if (email.includes("@") && email.includes(".")) {
            mensagemEmail.textContent = "E-mail válido ✅";
            mensagemEmail.style.color = "green";
        } else {
            mensagemEmail.textContent = "E-mail inválido ❌";
            mensagemEmail.style.color = "red";
        }
    });
});

document.getElementById("telefone").addEventListener("input", (event) => {
    const telefone = event.target.value;
    const mensagemTelefone = document.getElementById("mensagemTelefone");

    if (telefone.length === 0) {
        mensagemTelefone.textContent = "Campo obrigatório ❌";
        mensagemTelefone.style.color = "red";
        return;
    }

    let somenteNumeros = true;
    let contador = 0;

    for (let i = 0; i < telefone.length; i++) {
        if (telefone[i] >= "0" && telefone[i] <= "9") {
            contador++;
        } else {
            somenteNumeros = false;
            break;
        }
    }

    
    if (somenteNumeros && contador === 11) {
        mensagemTelefone.textContent = "";
        mensagemTelefone.style.color = "green";
    } else {
        mensagemTelefone.textContent = "Digite um telefone com 11 números ";
        mensagemTelefone.style.color = "red";
    }
});


document.getElementById("cep").addEventListener("blur", (event) => {
    const cep = event.target.value;
    const mensagemCep = document.getElementById("mensagemCep");

    if (cep.trim() === "") { 
        mensagemCep.textContent = "O CEP é obrigatório ";
        mensagemCep.style.color = "red";
    } else {
        mensagemCep.textContent = ""; 
    }
});

document.getElementById("rua").addEventListener("input", (event) => {
    const rua = event.target.value;
    const mensagemRua = document.getElementById("mensagemRua");

   
    if (rua.trim() === "") {
        mensagemRua.textContent = "Campo obrigatório"; // 
        mensagemRua.style.color = "red"; 
    } else {
        mensagemRua.textContent = ""; 
    }
});


document.getElementById("cidade").addEventListener("input", (event) => {
    const cidade = event.target.value;
    const mensagemCidade = document.getElementById("mensagemCidade");


    if (cidade.trim() === "") {
        mensagemCidade.textContent = "Campo obrigatório"; // 
        mensagemCidade.style.color = "red"; 
    } else {
       
        let valido = true;
        for (let i = 0; i < cidade.length; i++) {
            if (!((cidade[i] >= 'A' && cidade[i] <= 'Z') || (cidade[i] >= 'a' && cidade[i] <= 'z') || cidade[i] === ' ')) {
                valido = false;
                break;
            }
        }

        if (valido) {
            mensagemCidade.textContent = ""; 
        } else {
            mensagemCidade.textContent = "Apenas letras e espaços são permitidos"; 
            mensagemCidade.style.color = "red"; 
        }
    }
});

document.getElementById("numero").addEventListener("input", (event) => {
    const numero = event.target.value;
    const mensagemNumero = document.getElementById("mensagemNumero");

    
    if (numero.trim() === "") {
        mensagemNumero.textContent = "Campo obrigatório";
        mensagemNumero.style.color = "red";
        return;
    }

    let valido = true;
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] < '0' || numero[i] > '9') { 
            valido = false;
            break;
        }
    }

    if (valido) {
        mensagemNumero.textContent = ""; 
    } else {
        mensagemNumero.textContent = "Apenas números são permitidos";
        mensagemNumero.style.color = "red";
    }
});

document.getElementById("estado").addEventListener("input", (event) => {
    const estado = event.target.value;
    const mensagemEstado = document.getElementById("mensagemEstado");

    
    if (estado.trim() === "") {
        mensagemEstado.textContent = "Campo obrigatório";
        mensagemEstado.style.color = "red";
        return;
    }

    
    let valido = true;
    for (let i = 0; i < estado.length; i++) {
        let char = estado[i].toUpperCase();
        if (!(char >= 'A' && char <= 'Z')) { // Se não for uma letra
            valido = false;
            break;
        }
    }

    if (valido) {
        mensagemEstado.textContent = ""; 
    } else {
        mensagemEstado.textContent = "Apenas letras são permitidas";
        mensagemEstado.style.color = "red";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const idUsuarioInput = document.getElementById("id_usuario");
    const senhaInput = document.getElementById("senha");
    const mensagemId = document.getElementById("mensagemId");
    const mensagemSenha = document.getElementById("mensagemSenha");

   
    idUsuarioInput.addEventListener("input", (event) => {
        const idUsuario = event.target.value.trim();
        if (idUsuario === "") {
            mensagemIdUsuario.textContent = "Campo obrigatório";
            mensagemIdUsuario.style.color = "red";
        } else {
            mensagemIdUsuario.textContent = "";
        }
    })
    });



document.getElementById("senha").addEventListener("input", (event) => {
    const senha = event.target.value;
    const mensagemSenha = document.getElementById("mensagemSenha");

    if (senha.trim() === "") {
        mensagemSenha.textContent = "Campo obrigatório";
        mensagemSenha.style.color = "red";
    } else {
        mensagemSenha.textContent = "";
    }
});


document.getElementById("comprovanteResidencia").addEventListener("change", function (event) {
    const mensagemComprovante = document.getElementById("mensagemComprovante");
    if (event.target.files.length > 0) {
        mensagemComprovante.textContent = "";
    } else {
        mensagemComprovante.textContent = "Campo obrigatório";
        mensagemComprovante.style.color = "red";
    }
});

document.getElementById("documentoIdentidade").addEventListener("change", function (event) {
    const mensagemIdentidade = document.getElementById("mensagemIdentidade");
    if (event.target.files.length > 0) {
        mensagemIdentidade.textContent = "";
    } else {
        mensagemIdentidade.textContent = "Campo obrigatório";
        mensagemIdentidade.style.color = "red";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Salvamento de ID do usuário e senha
    const btnSalvar = document.getElementById("salvarDados");
    const idUsuarioInput = document.getElementById("id_usuario");
    const senhaInput = document.getElementById("senha");
    const mensagemId = document.getElementById("mensagemIdUsuario");
    const mensagemSenha = document.getElementById("mensagemSenha");

    if (btnSalvar) {
        btnSalvar.addEventListener("click", function (event) {
            event.preventDefault();
            let idUsuario = idUsuarioInput.value.trim();
            let senha = senhaInput.value.trim();
            let valido = true;

           
            mensagemId.textContent = "";
            mensagemSenha.textContent = "";

           
            if (idUsuario === "") {
                mensagemId.textContent = "Campo obrigatório";
                mensagemId.style.color = "red";
                valido = false;
            }
            if (senha === "") {
                mensagemSenha.textContent = "Campo obrigatório";
                mensagemSenha.style.color = "red";
                valido = false;
            }

            
            if (valido) {
                localStorage.setItem("idUsuario", idUsuario);
                localStorage.setItem("senha", senha);
                alert("Dados salvos com sucesso!");
            }
        });
    }

    
    const cadastroForm = document.getElementById("cadastroForm");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let idUsuario = idUsuarioInput.value;
            let senha = senhaInput.value;

            localStorage.setItem("id_usuario", idUsuario);
            localStorage.setItem("senha", senha);

            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html";
        });
    }

    const loginPage = document.getElementById("loginForm");
    if (loginPage) {
        let idUsuarioSalvo = localStorage.getItem("id_usuario");
        let senhaSalva = localStorage.getItem("senha");

        if (idUsuarioSalvo && senhaSalva) {
            document.getElementById("id_usuario").value = idUsuarioSalvo;
            document.getElementById("senha").value = senhaSalva;
        }
    }
});

const form = document.getElementById("formulario");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio automático

        const nome = document.getElementById("nome").value.trim();
        const dataNascimento = document.getElementById("data_nascimento").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const cep = document.getElementById("cep").value.trim();
        const rua = document.getElementById("rua").value.trim();
        const cidade = document.getElementById("cidade").value.trim();
        const numero = document.getElementById("numero").value.trim();

        if (
            nome !== "" && 
            dataNascimento !== "" && 
            cpf.length === 11 && 
            email.includes("@") && email.includes(".") &&
            telefone.length === 11 &&
            cep !== "" &&
            rua !== "" &&
            cidade !== "" &&
            numero !== ""
        ) {
            alert("Formulário enviado com sucesso! ✅");
            
        } else {
            alert("Por favor, preencha todos os campos corretamente! ❌");
        }
    });
}

const botaoSalvar = document.getElementById('salvarDados');
const campoIdUsuario = document.getElementById('id_usuario');  
const campoSenha = document.getElementById('senha');


botaoSalvar.addEventListener('click', salvarDados);


function salvarDados() {
   
    if (campoIdUsuario.value.trim() !== "" && campoSenha.value.trim() !== "") {
        
        localStorage.setItem('id_usuario', campoIdUsuario.value);
        localStorage.setItem('senha', campoSenha.value);

       
        alert("Informações salvas com sucesso!");

    } else {
       
        alert("Preencha todos os campos!");
    }
}

function validarLogin() {
    let campos = document.querySelectorAll('.input_login');
    let mensagemErro = document.getElementById('mensagemErro');

    let usuario = campos[0].value.trim();
    let senha = campos[1].value.trim();

    if (usuario === "" || senha === "") {
        mensagemErro.textContent =  " Preencha todos os campos.";
        mensagemErro.style.color = "red";
    } else {
        window.location.href = "formulario.html";
    }
}

  
