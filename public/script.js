function carregaPersonagem(){
  let id = document.getElementById("procurador").value;
  let url = `http://localhost:3000/${id}`;
  let vida = document.getElementById("vida");
  let suco = document.getElementById("suco");
  let ataque = document.getElementById("ataque");
  let defesa = document.getElementById("defesa");
  let velocidade = document.getElementById("HP");
  let sorte = document.getElementById("defesa");
  let aniversario = document.getElementById("ataque");
  let FK_Habilidades = document.getElementById("ataqueespecial");
  let FK_Comidas = document.getElementById("velocidade");
  let FK_Armamento = document.getElementById("defesaespecial");

  fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((pokemon) => {
      nome.innerHTML = pokemon.name;
      let imgPokemon = pokemon.sprites.front_default;
      imagem.src = imgPokemon;
      console.log(imgPokemon);
      tipo.innerHTML = pokemon.types[0].type.name
      id2.innerHTML = pokemon.id
      HP.innerHTML = pokemon.stats[0].base_stat
      ataque.innerHTML = pokemon.stats[1].base_stat
      defesa.innerHTML = pokemon.stats[2].base_stat
      ataqueEspecial.innerHTML = pokemon.stats[3].base_stat
      velocidade.innerHTML = pokemon.stats[5].base_stat
      defesaEspecial.innerHTML = pokemon.stats[4].base_stat
    })

    .catch((error) => {
      console.log("erro no carregamento do pokemon");
    });
}