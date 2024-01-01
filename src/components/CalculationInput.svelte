<script lang="ts">
	import { store, type UserInput } from '../lib/store';

	// state
	let userInput: UserInput;

	//   handlers
	const handlePizzaNum = (e: any) => {
		// TODO fix type
		// store.update userInput.pizzaNum = e.target.value;
		store.update(({ userInput, ...rest }) => ({
			userInput: { ...userInput, pizzaNum: e.target.value },
			...rest
		}));
	};

	const handleDoughBallWeight = (e: any) =>
		store.update(({ userInput, ...rest }) => ({
			userInput: { ...userInput, doughBallWeight: e.target.value },
			...rest
		}));
	const handleHydrationPercentage = (e: any) =>
		store.update(({ userInput, ...rest }) => ({
			userInput: { ...userInput, hydrationPercentage: e.target.value },
			...rest
		}));
	const handleSaltPercentage = (e: any) =>
		store.update(({ userInput, ...rest }) => ({
			userInput: { ...userInput, saltPercentage: e.target.value },
			...rest
		}));

	store.subscribe((value) => {
		userInput = value.userInput;
	});
</script>

<div class="flex-1 border-2 border-neutral-800 p-4 rounded-md">
	<h3 class="font-bold text-3xl">Customize here</h3>
	<div class="flex flex-col mt-2">
		<label for="content">Number of Pizza</label>
		<input
			type="number"
			min="1"
			on:input={handlePizzaNum}
			value={userInput.pizzaNum}
			class="border-2 rounded-sm px-2 py-2 border-neutral-700"
		/>
	</div>

	<div class="flex flex-col mt-4">
		<label for="content">Dough Weight</label>
		<input
			type="number"
			min="1"
			on:input={handleDoughBallWeight}
			value={userInput.doughBallWeight}
			class="border-2 rounded-sm px-2 py-2 border-neutral-700"
		/>
		<p class="text-neutral-400">200 grams dough ball = small pizza</p>
		<p class="text-neutral-400">300 grams = big one</p>
	</div>

	<div class="flex flex-col mt-4">
		<label for="content">Hydration (Water %)</label>
		<input
			type="number"
			min="1"
			on:input={handleHydrationPercentage}
			value={userInput.hydrationPercentage}
			class="border-2 rounded-sm px-2 py-2 border-neutral-700"
		/>
		<p class="text-neutral-400">Goes from 50% to 80% water content.</p>
		<p class="text-neutral-400">60% is the default value.</p>
	</div>

	<div class="flex flex-col mt-4">
		<label for="content">Salt (%)</label>
		<input
			type="number"
			min="0"
			on:input={handleSaltPercentage}
			value={userInput.saltPercentage}
			class="border-2 rounded-sm px-2 py-2 border-neutral-700"
		/>
		<p class="text-neutral-400">2.5-3.0% is recommended.</p>
	</div>
</div>
