<script lang="ts">
	import djDeck from '$lib/assets/dj-deck.gif';
	import parachute from '$lib/assets/parachute.gif';
	import slap from '$lib/assets/slap.gif';
	import spinning from '$lib/assets/spinning.gif';
	import steeringWheel from '$lib/assets/steering-wheel.gif';
	import swappingHands from '$lib/assets/swapping-hands.gif';
	import { cn } from '$lib/cn';

	const techniques = [
		{
			title: 'DJ Deck',
			youtubeLink: 'https://www.youtube.com/watch?v=HoX0Pkyc8C4',
			imageSrc: djDeck
		},
		{
			title: 'Slapping',
			youtubeLink: 'https://www.youtube.com/watch?v=xzbW8CZx538',
			imageSrc: slap
		},
		{
			title: 'Steering Wheel',
			youtubeLink: 'https://www.youtube.com/watch?v=Entzcl8q7H4',
			imageSrc: steeringWheel
		},
		{
			title: 'Parachute',
			youtubeLink: 'https://www.youtube.com/watch?v=Entzcl8q7H4',
			imageSrc: parachute
		},
		{
			title: 'Swapping Hands',
			youtubeLink: 'https://www.youtube.com/watch?v=1qiEJ96GKuI',
			imageSrc: swappingHands
		},
		{
			title: 'Spinning',
			youtubeLink: 'https://www.youtube.com/watch?v=_kTKzLLNerY',
			imageSrc: spinning
		}
	];
	let className: string = '';
	export { className as class };
	$: classList = cn('grid grid-cols-1 md:grid-cols-3 gap-2', className);
</script>

<div class={classList}>
	{#each techniques as method}
		<div class="relative">
			<a href={method.youtubeLink} class="group/link">
				<span
					class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
				/>
				<p class="text-center">{method.title}</p>
			</a>
			<img src={method.imageSrc} alt="Slapping technique" class="rounded-md" />
		</div>
	{/each}
</div>
