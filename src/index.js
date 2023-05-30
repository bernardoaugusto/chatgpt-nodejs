import promptBuilder from './promptBuilder.js';
import chatGPT from './chatGPT.js';
import { jobs_approved } from './jobs.js';

const run = async () => {
    const title = jobs_approved[0].title;
    const description = jobs_approved[0].description;
    const response = await chatGPT(promptBuilder(title, description));

    console.log(response);
    console.log(JSON.parse(response));
};

run();
