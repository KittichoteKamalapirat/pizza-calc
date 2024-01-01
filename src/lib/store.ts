import { writable, type Writable } from 'svelte/store';

export const DRY_YEAST_PERCENTAGE = 0.1; // 1 gram for 1 kg of flour

export interface UserInput {
	pizzaNum: number;
	doughBallWeight: number;
	hydrationPercentage: number;
	saltPercentage: number;
}

interface Store {
	userInput: UserInput;
}

export const intialStore: Store = {
	userInput: {
		pizzaNum: 7,
		doughBallWeight: 233,
		hydrationPercentage: 60,
		saltPercentage: 3
	}
};

// export const theme = writable("light");
export const store: Writable<Store> = writable(intialStore);
