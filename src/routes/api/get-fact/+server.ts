import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY // This is the default and can be omitted
});

let x = 0;
let messages: (string | undefined | null)[] = [];

export async function POST({ request }: { request: Request }) {
	const body = await request.json();
	const chatCompletion = await openai.chat.completions.create({
		messages: [
			{
				role: 'assistant',
				content: `Give me a random fun fact that is no more than 400 chars long. The fact should be about one of the following themes ${body.themes.join(', ')} And it should not be one of these facts ${messages.join(', ')}`
			}
		],
		model: 'gpt-4'
	});

	messages.push(chatCompletion.choices.at(0)?.message.content);

	return new Response(JSON.stringify(chatCompletion.choices.at(0)?.message.content), {
		status: 200
	});
}
