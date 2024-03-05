import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { GetJokeDto } from './get-joke.dto';

@Injectable()
export class AppService {
  async getJoke(hints: GetJokeDto) {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    let prompt = 'Tell me a joke. Respond in german.';
    if (hints.content !== '') {
      prompt += ` Include the following topics or ideas in the joke: ${hints.content}`;
    }
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'gpt-3.5-turbo',
    });
    return JSON.stringify(completion.choices[0].message);
  }
}
