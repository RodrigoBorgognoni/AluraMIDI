//document.querySelectorAll(".tecla");
const listaTeclas = document.getElementsByClassName("tecla");

for (let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];

    //armazena a segunda classe do array listaTecla[i]
    const instrumento = tecla.classList[1];

    //constrói a cada iteração do while uma string representando
    //o id de cada som
    const idAudio = `som_${instrumento}`;

    tecla.onclick = function () {
        tocarSom(idAudio);
    };
    tecla.onkeydown = function (evento) {
        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.add("ativa");
        }
    };
    tecla.onkeyup = function (evento) {
        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.remove("ativa");
        }
    };
}

function tocarSom(som) {
    const element = document.getElementById(som);
    if (element && element instanceof Audio) {
        element.play();
    } else {
        return alert("Elemento não encontrado");
    }
}
