//! quando clica no botao
var botaoAdd = document.querySelector("#adicionar-paciente")
botaoAdd.addEventListener("click", function(event) {
    event.preventDefault()
    var form = document.querySelector("#form-adiciona")
    var paciente = pegarDados(form)
    console.log(paciente);

    var erros = validaPaciente(paciente)

    if (erros.length > 0) {
        exibeErro(erros)
        return
    }

    addPaciente(paciente)
    form.reset()
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""
})

//! pega os dados do form
function pegarDados(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

//! cria tr
function criarTr(paciente) {
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function addPaciente(paciente) {
    var pacienteTr = criarTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

}
//! cria a td
function criarTd(dado, classe) {
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)
    return td
}

//! valida o formulario
function validaPaciente(paciente) {
    var erros = []
    if (paciente.nome.length == 0) erros.push("Nome não pode estar em branco")
    if (!validaPeso(paciente.peso)) erros.push("Peso inválido")
    if (!validaAltura(paciente.altura)) erros.push("Altura inválida")
    if (paciente.gordura.length == 0) erros.push("Gordura não pode estar em branco")
    if (paciente.peso.length == 0) erros.push("Peso não pode estar em branco")
    if (paciente.altura.length == 0) erros.push("Altura não pode estar em branco")

    return erros;

}

//! exibe os erros
function exibeErro(erros) {
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""
    erros.forEach(function(erro) {
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
}