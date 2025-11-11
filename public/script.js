function carregaPersonagem(){
  let id = document.getElementById("procurador").value;
  let url = `http://localhost:3000/Personagens`;
  let url2 = `http://localhost:3000/Habilidades`;
  let url3 = `http://localhost:3000/Comidas`;
  let url4 = `http://localhost:3000/Armamento`;
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

    fetch(url4)
    .then((response) => {
      return response.json();
    })

    .then((Armamento) => {
      
  console.log(Armamento)
  let FK_nome_armamento= "Armamento: " + Armamento[id].nome
  nome_armamento.innerHTML = FK_nome_armamento
  
})
  
  fetch(url3)
    .then((response) => {
      return response.json();
    })

    .then((Comidas) => {
      
  console.log(Comidas)
  let FK_nome_comidas = "Comida: " + Comidas[id].nome
  nome_comidas.innerHTML = FK_nome_comidas
  
})
  
  fetch(url2)
    .then((response) => {
      return response.json();
    })

    .then((Habilidades) => {
      
  console.log(Habilidades)
  let FK_nome_habilidades = "Habilidade: " + Habilidades[id].nome
  nome_habilidades.innerHTML = FK_nome_habilidades
  
})

  
  fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((Personagens) => {
      

  console.log(Personagens)
  nome_personagem.innerHTML = "Nome: " + Personagens[id].nome
  vida.innerHTML = "Vida: " + Personagens[id].vida
  suco.innerHTML = "Suco: " + Personagens[id].suco
  ataque.innerHTML = "Ataque:" + Personagens[id].ataque
  defesa.innerHTML = "Defesa: " + Personagens[id].defesa
  velocidade.innerHTML = "Velocidade: " + Personagens[id].velocidade
  sorte.innerHTML = "Sorte: " + Personagens[id].sorte
  aniversario.innerHTML ="Aniversário: " + Personagens[id].aniversario
      
  
    
})

    .catch((error) => {
      console.log("erro no carregamento do personagem");
    });
}

function criarPersonagem(){
  const nomeadicao = document.getElementById("nomeadicao").value
  const vidaadicao = document.getElementById("vidaadicao").value
  const sucoadicao = document.getElementById("nomeadicao").value
  const ataqueadicao = document.getElementById("ataqueadicao").value
  const defesaadicao = document.getElementById("defesaadicao").value
  const velocidadeadicao = document.getElementById("velocidadeadicao").value
  const sorteadicao = document.getElementById("sorteadicao").value
  const aniversarioadicao = document.getElementById("aniversarioadicao").value
  const habilidadesadicao = document.getElementById("habilidadesadicao").value
  const comidasadicao = document.getElementById("comidasadicao").value
  const armamentoadicao = document.getElementById("armamentoadicao").value

   fetch("/Personagens", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({nomeadicao, vidaadicao, sucoadicao, ataqueadicao, defesaadicao, velocidadeadicao, sorteadicao, aniversarioadicao, habilidadesadicao, comidasadicao, armamentoadicao }), // manda o objeto js para o banco como json
  });

  
  carregaPersonagem(); // atualiza lista
};

// Carrega ao abrir a página
carregaPersonagem();
