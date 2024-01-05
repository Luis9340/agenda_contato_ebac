function validarEAdicionarContato() {
    var nome = document.getElementById('inputNome').value;
    var telefone = document.getElementById('inputTelefone').value;

    var nomeValido = validarNome(nome);
    var telefoneValido = validarTelefone(telefone);

    exibirErro('nomeError', !nomeValido, '*Por favo, insira um nome válido.');
    exibirErro('telefoneError', !telefoneValido, '*Por favor, insira um número de telefone válido.');

    if (nomeValido && telefoneValido) {
        adicionarContato(nome, telefone);
    }
}

function validarNome(nome) {
    var regexNome = /^[a-zA-ZÀ-ú\s]+$/;
    return regexNome.test(nome);
}

function validarTelefone(telefone) {
    var regexTelefone = /^\d{10,}$/;
    return regexTelefone.test(telefone);
}

function adicionarContato(nome, telefone) {
    var tabela = document.getElementById('corpoTabela');
    var novaLinha = tabela.insertRow();

    var colunaNome = novaLinha.insertCell(0);
    colunaNome.innerHTML = nome;

    var colunaTelefone = novaLinha.insertCell(1);
    colunaTelefone.innerHTML = telefone;

    var colunaAcoes = novaLinha.insertCell(2);
    colunaAcoes.innerHTML = '<button onclick="confirmarExclusao(this)">Excluir</button>';
    
    limparCampos();
}

function limparCampos() {
    document.getElementById('inputNome').value = '';
    document.getElementById('inputTelefone').value = '';
}

function confirmarExclusao(botao) {
    var confirmacao = confirm("Deseja excluir este contato?");
    if (confirmacao) {
        excluirContato(botao);
    }
}

function excluirContato(botao) {
    var linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}

function exibirErro(id, mostrar, mensagem) {
    var elemento = document.getElementById(id);
    elemento.innerHTML = mostrar ? mensagem : '';
}