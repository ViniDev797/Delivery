// ======================================
// RELÓGIO DO SISTEMA
// ======================================

function atualizarRelogio() {

    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    const segundos = String(agora.getSeconds()).padStart(2, "0");

    document.getElementById("relogio").textContent =
        horas + ":" + minutos + ":" + segundos;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();


// ======================================
// TEMPO DOS PEDIDOS
// ======================================

function atualizarPedidos() {

    const pedidos = document.querySelectorAll(".pedido");

    pedidos.forEach(function (pedido) {

        // ==================================
        // SE JÁ ESTÁ PRONTO, NÃO ATUALIZA
        // ==================================

        if (pedido.dataset.finalizado === "true") {
            return;
        }


        // Pega o tempo atual do pedido
        let segundos = parseInt(pedido.dataset.tempo);


        // Adiciona 1 segundo
        segundos++;


        // Salva o novo tempo
        pedido.dataset.tempo = segundos;


        // ==================================
        // CONVERTER PARA MINUTOS E SEGUNDOS
        // ==================================

        const minutos = Math.floor(segundos / 60);

        const segundosRestantes = segundos % 60;


        const tempoFormatado =
            String(minutos).padStart(2, "0")
            + ":"
            + String(segundosRestantes).padStart(2, "0");


        // Mostra o tempo na tela
        const campoTempo =
            pedido.querySelector(".tempo-real");


        if (campoTempo) {
            campoTempo.textContent = tempoFormatado;
        }


        // ==================================
        // PEDIDO ATRASADO
        // ==================================

        // 15 minutos = 900 segundos

        if (segundos >= 900) {

            pedido.classList.add("atrasado-pedido");


            const status =
                pedido.querySelector(".status");


            if (status) {

                status.textContent = "ATRASADO";


                status.classList.remove("preparo");

                status.classList.add("atrasado");

            }

        }

    });


    atualizarQuantidadePedidos();

}


// Atualiza os pedidos a cada 1 segundo
setInterval(atualizarPedidos, 1000);


// ======================================
// QUANTIDADE DE PEDIDOS
// ======================================

function atualizarQuantidadePedidos() {

    const quantidade =
        document.querySelectorAll(".pedido").length;


    const contador =
        document.getElementById("totalPedidos");


    if (!contador) {
        return;
    }


    if (quantidade === 1) {

        contador.textContent = "1 pedido";

    } else {

        contador.textContent =
            quantidade + " pedidos";

    }

}


// ======================================
// MARCAR PEDIDO COMO PRONTO
// ======================================

function marcarPronto(botao) {

    // Encontra o pedido
    const pedido =
        botao.closest(".pedido");


    if (!pedido) {
        return;
    }


    // ==================================
    // CONGELA O TEMPO
    // ==================================

    // IMPORTANTE:
    // A partir daqui o atualizarPedidos()
    // não vai mais alterar o tempo.

    pedido.dataset.finalizado = "true";


    // ==================================
    // PEGA O STATUS
    // ==================================

    const status =
        pedido.querySelector(".status");


    if (status) {

        status.textContent = "PRONTO";


        status.classList.remove(
            "preparo",
            "atrasado"
        );


        status.classList.add("pronto");

    }


    // ==================================
    // MUDA A BORDA DO PEDIDO
    // ==================================

    pedido.classList.remove(
        "atrasado-pedido"
    );


    pedido.style.borderLeftColor =
        "#525a60";


    // ==================================
    // MUDA O BOTÃO
    // ==================================

    botao.textContent =
        "✓ PRONTO";


    botao.disabled = true;


    botao.style.background =
        "#525a60";


    botao.style.cursor =
        "default";


    // ==================================
    // MOSTRA NO CONSOLE
    // ==================================

    const numero =
        pedido.querySelector(
            ".pedido-cabecalho strong"
        );


    if (numero) {

        console.log(
            "Pedido finalizado:",
            numero.textContent
        );

    }

}