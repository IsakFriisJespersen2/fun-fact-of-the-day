<script lang="ts">
	import { onMount } from 'svelte';

	let fact: string | null = null;

	const getFact = async (): Promise<string> => {
		return await fetch('/api/get-fact').then((res) => res.json());
	};

	onMount(async () => {
		fact = await getFact();
	});

</script>

<main class="flex flex-col justify-center items-center h-full w-full space-y-8">
	<section class="space-y-1">
		<h1 class="text-5xl font-thin">Fun Fact Of The Day</h1>
		<p class="flex justify-end font-thin">This is a fact generated with Chat-gpt</p>
	</section>
	<section class="w-1/2 h-96 font-mono px-6 py-8 border rounded-md">
		{#if !!fact}
			<p class="text-lg">{fact}</p>
		{:else}
			<p class="text-lg">...Loading</p>
		{/if}
	</section>
</main>
