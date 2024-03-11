import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY // This is the default and can be omitted
});

let messages: (string | undefined | null)[] = [];

export async function POST({ request }: { request: Request }) {
	const body = await request.json();
	const chatCompletion = await openai.chat.completions.create({
		messages: [
			{
				role: 'assistant',
				content: `- Task: (Give me a random fun fact that is no more than 400 chars.
				 The fact should be about one of the following themes ${body.themes.join(', ')}
				 and it should not be one of these facts ${messages.join(', ')}).
				 - Response format: (
				 The response should be in JSON format and be separated into fact and source.
				 Eg. { "fact": "The first oranges weren't orange", "source": "[<Give me a good short descriptive name of the source>] (URL)" }
				 The response must always include fact and source fields and source must always have the following format: [name] (URL)
				 )
				 `
			}
		],
		model: 'gpt-3.5-turbo'
	});

	messages.push(chatCompletion.choices.at(0)?.message.content);

	return new Response(chatCompletion.choices.at(0)?.message.content, {
		status: 200
	});
}
