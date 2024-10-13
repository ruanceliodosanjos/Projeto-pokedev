const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        EsconderCartaoPokedev();
        const idPokedevSelecionado = MostrarCartaoPokedev(pokedev);
        DesativarPokedevNaListagem();
        ativarPokedevNaListagem(idPokedevSelecionado);

    })
})
function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function DesativarPokedevNaListagem() {
    const pokedvAtivoNaListagem = document.querySelector(".ativo");
    pokedvAtivoNaListagem.classList.remove("ativo");
}

function MostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const CartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    CartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function EsconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

