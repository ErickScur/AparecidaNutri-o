//! calcula o imc

var pacientes = document.querySelectorAll(".paciente")
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i]
    var peso = (paciente.querySelector(".info-peso")).textContent
    var altura = (paciente.querySelector(".info-altura")).textContent
    var tdIMC = paciente.querySelector(".info-imc")

    var pesoValido = validaPeso(peso)
    var alturaValida = validaAltura(altura)

    if (!pesoValido) {
        console.log("peso invalido")
        pesovalido = false;
        tdIMC.textContent = "Peso Invalido"
        paciente.classList.add("paciente-invalido")
    }
    if (!alturaValida) {
        alturavalida = false;
        console.log("altura invalida")
        tdIMC.textContent = "Altura Invalida"
        paciente.classList.add("paciente-invalido")
    }
    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura)
        tdIMC.textContent = imc
    }

}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 500) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true
    } else {
        return false
    }

}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura)
    return imc.toFixed(2)
}