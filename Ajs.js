// ======================================
// RELÓGIO
// ======================================

function atualizarRelogio() {

    const agora = new Date();

    const horas =
        String(agora.getHours()).padStart(2, "0");

    const minutos =
        String(agora.getMinutes()).padStart(2, "0");

    const segundos =
        String(agora.getSeconds()).padStart(2, "0");

    document.getElementById("relogio").textContent =
        horas + ":" + minutos + ":" + segundos;
}


setInterval(atualizarRelogio, 1000);

atualizarRelogio();


// ======================================
// ATUALIZAR MESAS
// ======================================

function atualizarMesas() {

    const mesas =
        document.querySelectorAll(".mesa.ocupada");

    const contador =
        document.getElementById("mesasOcupadas");

    if (contador) {

        contador.textContent =
            mesas.length;

    }
}


atualizarMesas();


// ======================================
// SELECIONAR MESA
// ======================================

function selecionarMesa(numero) {

    const mesa =
        document.querySelectorAll(".mesa")[numero - 1];

    if (!mesa) {
        return;
    }

    if (mesa.classList.contains("livre")) {

        const confirmar =
            confirm(
                "Deseja abrir a Mesa " +
                String(numero).padStart(2, "0") +
                "?"
            );

        if (confirmar) {

            mesa.classList.remove("livre");

            mesa.classList.add("ocupada");

            mesa.querySelector("small").textContent =
                "OCUPADA";

            atualizarMesas();

            alert(
                "Mesa " +
                String(numero).padStart(2, "0") +
                " aberta!"
            );
        }

    } else {

        alert(
            "Mesa " +
            String(numero).padStart(2, "0") +
            " já está ocupada."
        );

    }

}


// ======================================
// ABRIR MESA
// ======================================

function abrirMesa() {

    const numero =
        prompt("Digite o número da mesa:");

    if (!numero) {
        return;
    }

    const mesas =
        document.querySelectorAll(".mesa");

    const indice =
        parseInt(numero) - 1;

    if (indice < 0 || indice >= mesas.length) {

        alert("Mesa não encontrada.");

        return;
    }


    const mesa = mesas[indice];


    if (mesa.classList.contains("livre")) {

        mesa.classList.remove("livre");

        mesa.classList.add("ocupada");

        mesa.querySelector("small").textContent =
            "OCUPADA";

        atualizarMesas();

        alert(
            "Mesa " +
            String(numero).padStart(2, "0") +
            " aberta com sucesso!"
        );

    } else {

        alert("Essa mesa não está livre.");

    }

}


// ======================================
// NOVO PEDIDO
// ======================================

function novoPedido() {

    alert(
        "Tela de novo pedido será aberta aqui."
    );

}


// ======================================
// CADASTRAR MOTOQUEIRO
// ======================================

function cadastrarMotoqueiro() {

    const nome =
        prompt("Nome do motoqueiro:");

    if (!nome) {
        return;
    }


    const moto =
        prompt("Modelo da moto:");

    if (!moto) {
        return;
    }


    const placa =
        prompt("Número da placa:");

    if (!placa) {
        return;
    }


    alert(
        "Motoqueiro cadastrado!\n\n" +
        "Nome: " + nome + "\n" +
        "Moto: " + moto + "\n" +
        "Placa: " + placa
    );

}