export default (title, description) => {
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