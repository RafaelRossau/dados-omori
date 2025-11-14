const express = require("express"); // Framework para criar servidor e rotas
const mysql = require("mysql2"); // Biblioteca para conectar no MySQL
const path = require("path"); // Módulo nativo do Node para lidar com caminhos

const app = express(); // Cria a aplicação Express

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Middleware para servir arquivos estáticos (HTML, CSS, JS da pasta public/)
app.use(express.static(path.join(__dirname, "public")));

// Conexão com o banco MySQL (via XAMPP)
const db = mysql.createConnection({
  host: "localhost", // Servidor do MySQL
  user: "root", // Usuário padrão do XAMPP
  password: "", // Senha (geralmente vazia no XAMPP)
  database: "DataOmori", // Nome do banco que você criou
});

// ---------- ROTAS ----------

// GET /usuarios → retorna todos os usuários do banco
app.get("/Personagens", (req, res) => {
  db.query("SELECT * FROM Personagens", (err, results) => {
    if (err) throw err; // Se der erro na query, interrompe
    res.json(results); // Envia o resultado como JSON para o front
  });
});

app.get("/Habilidades", (req, res) => {
  db.query("SELECT * FROM Habilidades", (err, results) => {
    if (err) throw err; // Se der erro na query, interrompe
    res.json(results); // Envia o resultado como JSON para o front
  });
});

app.get("/Comidas", (req, res) => {
  db.query("SELECT * FROM Comidas", (err, results) => {
    if (err) throw err; // Se der erro na query, interrompe
    res.json(results); // Envia o resultado como JSON para o front
  });
});

app.get("/Armamento", (req, res) => {
  db.query("SELECT * FROM Armamento", (err, results) => {
    if (err) throw err; // Se der erro na query, interrompe
    res.json(results); // Envia o resultado como JSON para o front
  });
});

app.get("/PersonagensTESTE", (req, res) => {
  db.query("SELECT * FROM PersonagensTESTE", (err, results) => {
    if (err) throw err; // Se der erro na query, interrompe
    res.json(results); // Envia o resultado como JSON para o front
  });
});
// POST /usuarios → insere um novo usuário no banco
// app.post("/Personagens", (req, res) => {
//   const {nomeadicao, vidaadicao, sucoadicao, ataqueadicao, defesaadicao, velocidadeadicao, sorteadicao, aniversarioadicao, habilidadesadicao, comidasadicao, armamentoadicao} = req.body; // Extrai os dados enviados pelo front
//   db.query(
//     "INSERT INTO Personagens (ID_personagens, nome, vida, suco, ataque, defesa, velocidade, sorte, aniversario, FK_habilidades, FK_Comidas, FK_Armamento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", // Query SQL com placeholders
//     [nomeadicao, vidaadicao, sucoadicao, ataqueadicao, defesaadicao, velocidadeadicao, sorteadicao, aniversarioadicao, habilidadesadicao, comidasadicao, armamentoadicao], // Valores que substituem os "?"
//     (err, result) => {
//       if (err) throw err;
//       res.json({ message: "Personagem adicionado com sucesso!" }); // Retorno de sucesso
//     }
//   );
// });
app.post("/PersonagensTESTE", (req, res) => {
   const {nomeAdicaoTeste, nascimentoAdicaoTeste, ataqueAdicaoTeste, defesaAdicaoTeste} = req.body; // Extrai os dados enviados pelo front
  db.query(
    "INSERT INTO PersonagensTESTE (nome, nascimento, ataque, defesa) VALUES (?, ?, ?, ?)", // Query SQL com placeholders
    [nomeAdicaoTeste, nascimentoAdicaoTeste, ataqueAdicaoTeste, defesaAdicaoTeste], // Valores que substituem os "?"
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Personagem adicionado com sucesso!" }); // Retorno de sucesso
    }
  );
 });


// Inicia o servidor na porta 3000
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000/")
)