import promptBuilder from './promptBuilder.js';
import chatGPT from './chatGPT.js';
import { jobs_approved } from 'jobs.js';

const run = async () => {
    const title = 'Desenvolvedor Frontend';
    const description =
        'Sobre a vaga\nEsta vaga foi obtida de um site de empregos. Saiba mais\nO que esperamos que você saiba: Angular 8+ conhecimento em docker javascript nodejs (express/nestjs/rest api) git (familiarização com git flow).\n\nDesafio: Desenvolver apis utilizando as melhorias práticas do mercado desenvolver no backend utilizando o nodejs desenvolver no front utilizando o angular 8+ com primeng utilizar metodologias ágeis, integração continua integrar sistemas apoiar as equipes no desenvolvimento das soluções.\n\nModelo De Trabalho\n\nção pj com 20 dias de descanso remunerado ou clt + benefícios.';

    const response = await chatGPT(promptBuilder(title, description));

    console.log(response);
};

run();
