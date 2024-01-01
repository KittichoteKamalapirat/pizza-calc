<script lang="ts">
	import { cn } from '../lib/cn';
	import { store, intialStore, type UserInput, DRY_YEAST_PERCENTAGE } from '../lib/store';
	// props
	let className: string = '';
	export { className as class };
	let classList = cn('', className);

	// global state
	let userInput: UserInput = intialStore.userInput;

	$: totalWeight = userInput.doughBallWeight * userInput.pizzaNum;
	$: ratio =
		1 +
		userInput.hydrationPercentage / 100 +
		userInput.saltPercentage / 100 +
		DRY_YEAST_PERCENTAGE / 100;
	// local state
	$: flourWeight = totalWeight / ratio;
	$: waterWeight = flourWeight * (userInput.hydrationPercentage / 100);
	$: saltWeight = flourWeight * (userInput.saltPercentage / 100);
	$: dryYeastWeight = flourWeight * (DRY_YEAST_PERCENTAGE / 100);
	$: freshYeastWeight = flourWeight * ((DRY_YEAST_PERCENTAGE * 3) / 100);

	$: showSaltDisclaimer = userInput.saltPercentage > 2;
	// $: showYesatDisclaimer = userInput.saltPercentage > 2;

	store.subscribe((value) => {
		userInput = value.userInput;
	});
</script>

<div class={classList}>
	<h3 class="font-bold text-3xl">🫓 Here is what you need</h3>
	<div class="grid grid-cols-3 text-2xl mt-2">
		<p class="col-span-1">🍚 Flour:</p>
		<p class="col-span-2">{flourWeight.toFixed()} g</p>
		<p class="col-span-1">💧 Water:</p>
		<p class="col-span-2">{waterWeight.toFixed()} g</p>
		<p class="col-span-1">🧂 Salt:</p>
		<p class="col-span-2">
			{saltWeight.toFixed()} g

			{#if showSaltDisclaimer}
				<span class="text-sm text-neutral-400"
					>(This might look like a lot but it just works. Please try.)</span
				>
			{/if}
		</p>
		<p class="col-span-1">🦠 Yeast:</p>
		<p class="col-span-2">
			{freshYeastWeight.toFixed(1)} g (dry yeast) or {dryYeastWeight.toFixed(1)} g (fresh yeast)
			<span class="text-sm text-neutral-400">(This sounds little but it just works. Try it.)</span>
		</p>
	</div>
</div>
