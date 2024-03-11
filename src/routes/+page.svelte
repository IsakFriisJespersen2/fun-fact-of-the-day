<script lang="ts">
	// Default values shown
	import { onMount } from 'svelte';
	import Helix from '$lib/helix.svelte';
	import { browser } from '$app/environment';

	$: data = null as { fact: string; source: string } | null;
	let isLoading = false;

	let themes = [
		{ title: 'Cooking', active: false },
		{ title: 'History', active: false },
		{ title: 'Science', active: false },
		{ title: 'Music', active: false },
		{ title: 'Literature', active: false },
		{ title: 'Art', active: false }
	];

	const getFact = async (body: string[] = []): Promise<{ fact: string; source: string }> => {
		isLoading = true;
		const res = await fetch('/api/get-fact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				themes: body
			})
		});

		isLoading = false;
		return await res.json();
	};

	// Reactive statement to detect changes in theme activation
	$: if (browser) {
		console.log('Hej');
		const activeThemes = themes.filter((t) => t.active).map((t) => t.title);
		if (activeThemes.length > 0) {
			getFact(activeThemes).then((fetchedFact) => {
				data = fetchedFact;
			});
		}
	}

	console.log(data);

	// Function to toggle theme active state and trigger reactivity
	function toggleTheme(index: number) {
		themes[index].active = !themes[index].active;
		themes = themes.slice();
	}

	onMount(async () => {
		data = await getFact();
	});
</script>

<main class="flex flex-col justify-center items-center h-full w-full space-y-8">
	<header class="space-y-1">
		<h1 class="text-5xl font-thin">Fun Fact Of The Day</h1>
		<p class="flex justify-end font-thin">Fact a day keeps gloom away!</p>
	</header>
	<section class="w-1/2 h-96 max-w-4xl">
		<div class="font-mono">
			{#if !isLoading && !!data}
				<div class="px-6 py-8 border rounded-md">
					<p class="text-lg">{data.fact}</p>
					<div class="text-end mt-2 text-blue-300">
						<a
							href={`${data.source.substring(data.source.indexOf('(') + 1, data.source.indexOf(')'))}`}
						>
							{data.source.substring(data.source.indexOf('['), data.source.indexOf(']') + 1)}</a
						>
					</div>
				</div>
				<p class="flex justify-end font-thin mt-2">- Chat GPT</p>
			{:else}
				<div class="flex justify-center items-center">
					<Helix />
				</div>
			{/if}
		</div>
	</section>
	<section class="font-mono space-y-2 flex flex-col justify-start w-1/2">
		<h2 class="text-xl">Im interested in:</h2>
		<div class="flex flex-wrap gap-2 max-w-xl">
			{#each themes as theme, i}
				<button
					type="button"
					data-active={theme.active}
					on:click={() => toggleTheme(i)}
					class="border rounded-md p-2 hover:bg-orange-700 active: data-[active=true]:bg-orange-700"
					>{theme.title}</button
				>
			{/each}
		</div>
	</section>
</main>
