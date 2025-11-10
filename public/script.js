function carregaPersonagem(){
  let id = document.getElementById("procurador").value;
  let url = `http://localhost:3000/Personagens`;
  let url2 = `http://localhost:3000/Habilidades`;
  let nome_personagem = document.getElementById("nome_personagens");
  let vida = document.getElementById("vida");
  let suco = document.getElementById("suco");
  let ataque = document.getElementById("ataque");
  let defesa = document.getElementById("defesa");
  let velocidade = document.getElementById("velocidade");
  let sorte = document.getElementById("sorte");
  let aniversario = document.getElementById("aniversario");
  let personagensarr = `http://localhost:3000/`;
  
  let ID_habilidades = document.getElementById("ID_habilidades");
  let nome_habilidades = document.getElementById("nome_habilidades");
  let descricao_habilidades = document.getElementById("descricao");
  let fonte = document.getElementById("fonte");

  let ID_comidas = document.getElementById("ID_comidas");
  let nome_comidas = document.getElementById("nome_comidas");
  let descricao_comidas = document.getElementById("FK_habilidades");
  let vida_recuperada = document.getElementById("vida_recuperada");
  let suco_recuperado = document.getElementById("suco_recuperado");
  let preco = document.getElementById("preco");

  let ID_armamento = document.getElementById("ID_armamento");
  let nome_armamento = document.getElementById("nome_armamento");
  let descricao_armamento = document.getElementById("descricao_armamento");
  let vida_extra = document.getElementById("vida_extra");
  let suco_extra = document.getElementById("suco_extra");
  let ataque_extra = document.getElementById("ataque_extra");
  let defesa_extra = document.getElementById("defesa_extra");
  let velocidade_extra = document.getElementById("velocidade_extra");
  let sorte_extra = document.getElementById("sorte_extra");
  let chance_hit_extra = document.getElementById("chance_hit_extra");

    fetch(url2)
    .then((response) => {
      return response.json();
    })

    .then((Habilidades) => {
      
  console.log(Habilidades)
  let FK_nome_habilidades = Habilidades[id].nome
  nome_habilidades.innerHTML = FK_nome_habilidades
  
})

  
  fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((Personagens) => {
      

  console.log(Personagens)
  nome_personagem.innerHTML = Personagens[id].nome
  vida.innerHTML = Personagens[id].vida
  suco.innerHTML = Personagens[id].suco
  ataque.innerHTML = Personagens[id].ataque
  defesa.innerHTML = Personagens[id].defesa
  velocidade.innerHTML = Personagens[id].velocidade
  sorte.innerHTML = Personagens[id].sorte
  aniversario.innerHTML =Personagens[id].aniversario
      
  
    
})

    .catch((error) => {
      console.log("erro no carregamento do personagem");
    });
}