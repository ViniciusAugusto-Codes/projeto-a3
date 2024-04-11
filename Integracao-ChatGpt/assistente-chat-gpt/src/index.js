import React from "react";
import ReactDOM from "react-dom";
import "./chat-gpt.css";

//*Importar .env e chave ChatGPT
/*
require("dotenv").config();
const { OpenAI } = require("openai");

const express = require("express");
const app = express();
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

app.post("/pergunte-ao-chatgpt", async (req, res) => {
  const { prompt } = req.body;

  const model = "gpt-3.5-turbo";
  const role = "user";
  const max_tokens = 30;

  //comunicação com o chatGpt
  const completion = await openai.chat.completions.create({
    messages: [{ role: role, content: prompt }],
    model: model,
    max_tokens: max_tokens,
  });

  res.json({
    completion: completion.choices[0].message.content,
  });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Em execução na porta ${PORT}`));
*/

//App React

const App = () => {
  return (
    <div id="assistente">
      <label class="rotulo" htmlFor="Pergunta">
        Qual sua pergunta?
      </label>

      <input type="text" id="pergunta" class="box"></input>

      <button id="button">Enviar</button>

      <label class="rotulo" htmlFor="Resposta">
        Resposta:
      </label>

      <input type="text" id="resposta" class="box"></input>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));


