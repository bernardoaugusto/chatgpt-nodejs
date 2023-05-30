
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";


dotenv.config()
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);


export default async (prompt) => {
    const message = [{ role: "user", content: prompt }];

    const response = await openai.createChatCompletion({ model: "gpt-3.5-turbo", messages: message });

    return response.data.choices[0].message.content;
}
