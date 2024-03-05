import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY // This is the default and can be omitted
});

export async function GET() {
	const chatCompletion = await openai.chat.completions.create({
		messages: [
			{
				role: 'user',
				content: 'Give me a random fun fact that is no more than 400 chars long.',
			}
		],
		model: 'gpt-3.5-turbo'
	});

	return new Response(JSON.stringify(chatCompletion.choices.at(0)?.message.content), { status: 200 });
}
