<script lang="ts">
	import CalculationInput from '../components/CalculationInput.svelte';
	import CalculationOutput from '../components/CalculationOutput.svelte';
	import Container from '../components/Container.svelte';
	import StretchingTechnique from '../components/StretchingTechnique.svelte';
</script>

<main class="my-8">
	<Container>
		<h1 class="text-center text-4xl font-bold mb-8">🍕 Neapolitan Dough Calculator</h1>
		<div class="flex flex-col md:flex-row gap-4">
			<CalculationInput />
			<CalculationOutput class="flex-1 border-2 border-neutral-800 p-4 rounded-md" />
		</div>

		<h3 class="font-bold text-xl text-center mt-8">Some inspiration for you Pizza Journey</h3>
		<StretchingTechnique class="mt-4" />
	</Container>
</main>

<!-- <style lang="postcss">
	:global(html) {
		background-color: theme(colors.rose.500);
	}
</style> -->
