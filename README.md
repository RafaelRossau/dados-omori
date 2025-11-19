📝 README — Projeto Omori Data Manager

Este projeto é uma aplicação simples que permite procurar, criar e deletar personagens e habilidades usando um banco de dados MySQL.
A interface é feita em HTML + JavaScript, e o backend usa Node.js com Express e MySQL2.

Tudo funciona localmente no seu computador usando XAMPP, MySQL Workbench e VS Code.

📌 Requisitos

Antes de rodar o projeto, instale:

✔ XAMPP

Usado para rodar o MySQL localmente.
Baixe no site oficial: https://www.apachefriends.org

Depois de instalar:

Abra o XAMPP Control Panel

Inicie MySQL

✔ MySQL Workbench

Usado para visualizar e editar o banco.
Baixe no site da Oracle (MySQL Workbench).

✔ Node.js + VS Code

Baixe o Node: https://nodejs.org

Baixe o VS Code: https://code.visualstudio.com

✔ Instalar as dependências no VS Code

Abra a pasta do projeto no VS Code e execute:

npm install express
npm install mysql2


Essas bibliotecas fazem o servidor funcionar:

express → cria as rotas e o servidor

mysql2 → conecta no banco de dados MySQL

📂 Estrutura do Projeto
/public
   index.html
   script.js
server.js


index.html → interface do usuário

script.js → faz requisições pro servidor

server.js → servidor backend com Express + MySQL2

🗄 Banco de Dados

Este projeto utiliza um banco MySQL chamado DataOmori.

Você não precisa criar as tabelas manualmente — basta importar o arquivo .sql que acompanha o projeto.

✔ Como importar o banco de dados

Abra o MySQL Workbench

Clique em Server > Data Import

Selecione a opção Import from Self-Contained File

Escolha o arquivo:

DataOmori.sql


Em "Default Target Schema", selecione ou crie:

DataOmori


Clique em Start Import

Pronto!
O banco virá com todas as tabelas já montadas, incluindo:

Personagens

Habilidades

Comidas

Armamento

(e quaisquer outras que o arquivo .sql já possuir)

O servidor (server.js) já está configurado para se conectar a esse banco automaticamente.

▶ Como Executar
1️⃣ Inicie o MySQL no XAMPP

Abra o XAMPP → clique em Start no MySQL.

2️⃣ Abra o projeto no VS Code

No terminal, dentro da pasta do projeto, rode:

node server.js


Se tudo deu certo, vai aparecer:

Servidor rodando em http://localhost:3000/

3️⃣ Abra o site

Basta abrir o arquivo:

public/index.html


ou acessar:

http://localhost:3000

⚙ Como o Projeto Funciona
🔍 Procurar Personagem

No script.js, a função carregaPersonagem() faz:

pega o ID digitado pelo usuário

faz um fetch para o backend:

GET http://localhost:3000/Personagens


encontra o personagem pelo índice (ID)

mostra na tela:

nome

vida

suco

ataque

defesa

velocidade

sorte

aniversário

habilidade relacionada

comida relacionada

armamento relacionado

Ele também busca as tabelas relacionadas (Habilidades, Comidas, Armamento) e mostra os nomes correspondentes.

🆕 Criar Personagem

A função criarPersonagem() envia:

POST /Personagens


Com os dados coletados dos inputs.
O servidor insere no MySQL:

INSERT INTO Personagens (...)
VALUES (...)


O mesmo acontece com habilidades usando:

POST /Habilidades

❌ Deletar Personagem / Habilidade

Ele chama:

DELETE /Personagens/:id
DELETE /Habilidades/:id


E o servidor exclui do banco.

📦 O Que o Backend Faz (server.js)

✔ Conecta ao MySQL com mysql2
✔ Retorna dados usando SELECT
✔ Cria novos personagens e habilidades usando INSERT
✔ Deleta usando DELETE
✔ Serve sua interface (index.html + script.js)

Exemplo de rota:

app.get("/Personagens", (req, res) => {
  db.query("SELECT * FROM Personagens", (err, results) => {
    res.json(results);
  });
});
