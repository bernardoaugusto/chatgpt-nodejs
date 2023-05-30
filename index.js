const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

const buildPrompt = (title, description) => {
  return `
  Avalie se a seguinte vaga é compatível com:
  1 - Vaga Júnior
  2 - Vaga que contenha alguma das stacks: Node.js | React | JavaScript | Java | C#
  3 - Não precisar de mais de um ano de experiência
  4 - Não precisar de graduação
  5 - Não precisar de inglês avançado ou fluente
​
  E formate sua resposta em formato JSON de forma retornar um boolean se a vaga é compatível ou não e com as hard skills presentes no texto, exemplo de retorno desejado:
 
  "hard_skills_compativel": false,
  "nao_precisa_de_grande_experiencia": false,
  "nao_precisa_de_graduacao": false,
  "nao_precisa_de_ingles_avancado": false,
  "hard_skills": ["PHP", "JavaScript"]
 
​
  Regra: sempre retornar apenas um json como resposta.
​
  Título da vaga: ${title}
  Descrição da vaga: ${description}
 `
}




const runCompletion = async (prompt) => {
  const message = [{ role: "user", content: prompt }];

  const response = await openai.createChatCompletion({ model: "gpt-3.5-turbo", messages: message });

  return response.data.choices[0].message.content;
}



run = async () => {
  const title = "Desenvolvedor Frontend";
  const description = "Sobre a vaga\nEsta vaga foi obtida de um site de empregos. Saiba mais\nO que esperamos que você saiba: Angular 8+ conhecimento em docker javascript nodejs (express/nestjs/rest api) git (familiarização com git flow).\n\nDesafio: Desenvolver apis utilizando as melhorias práticas do mercado desenvolver no backend utilizando o nodejs desenvolver no front utilizando o angular 8+ com primeng utilizar metodologias ágeis, integração continua integrar sistemas apoiar as equipes no desenvolvimento das soluções.\n\nModelo De Trabalho\n\nção pj com 20 dias de descanso remunerado ou clt + benefícios.";
  const response = await runCompletion(buildPrompt(title, description));

  console.log(response);
}

run()