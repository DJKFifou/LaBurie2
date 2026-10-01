<script lang="ts">
	const cards = [
		{
			image: {
				url: '/src/lib/assets/images/LaBurie_Icon_Breakfast.webp',
				alt: 'Breakfast'
			},
			title: 'Breakfast crafted with love',
			description:
				'Enjoy a delicious breakfast made with care, featuring local and seasonal products, fresh bread, homemade yogurt, and jams.'
		},
		{
			image: {
				url: '/src/lib/assets/images/LaBurie_Icon_Sleep.webp',
				alt: 'Restful sleep'
			},
			title: 'Restful sleep',
			description:
				'Enjoy an unparalleled night’s sleep with our premium high-quality cotton sheets. They ensure optimal comfort for a restful night.'
		},
		{
			image: {
				url: '/src/lib/assets/images/LaBurie_Icon_Garden.webp',
				alt: 'Serenity in the garden'
			},
			title: 'Serenity in the garden',
			description:
				'Discover numerous relaxing spots throughout the garden. Sunny or shaded terraces, perfect for outdoor meals or moments of reading.'
		}
	];

	interface CardType {
		image: {
			url: string;
			alt: string;
		};
		title: string;
		description: string;
	}
</script>

{#snippet Card(card: CardType)}
	<div class="flex flex-1 flex-col gap-3">
		<div class="flex flex-col gap-1">
			<img src={card.image.url} alt={card.image.alt} class="w-20 object-contain" />
			<h3 class="text-2xl font-semibold">{card.title}</h3>
		</div>
		<p class="text-lg">{card.description}</p>
	</div>
{/snippet}

<section class="flex flex-col items-center gap-22 bg-theme-offWhite px-20 py-30">
	<div class="flex gap-16">
		{#each cards as card, i (i)}
			{@render Card(card)}
		{/each}
	</div>
	<a
		href="#"
		class="w-fit rounded-full bg-theme-green px-14 py-2 text-theme-offWhite hover:bg-theme-light hover:text-theme-green"
		>Book a your stay</a
	>
</section>
