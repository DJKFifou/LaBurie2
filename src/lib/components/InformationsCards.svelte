<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';

	const cards = [
		{
			image: {
				url: "/images/LaBurie_Icon_Breakfast.webp",
				alt: m['homepage.informations_cards.first_card.title']()
			},
			title: m['homepage.informations_cards.first_card.title'](),
			description: m['homepage.informations_cards.first_card.description']()
		},
		{
			image: {
				url: "/images/LaBurie_Icon_Sleep.webp",
				alt: m['homepage.informations_cards.second_card.title']()
			},
			title: m['homepage.informations_cards.second_card.title'](),
			description: m['homepage.informations_cards.second_card.description']()
		},
		{
			image: {
				url: "/images/LaBurie_Icon_Garden.webp",
				alt: m['homepage.informations_cards.third_card.title']()
			},
			title: m['homepage.informations_cards.third_card.title'](),
			description: m['homepage.informations_cards.third_card.description']()
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
			<img src={card.image.url} alt={card.image.alt} class="w-15 md:w-20 object-contain" />
			<h3 class="text-2xl font-semibold">{card.title}</h3>
		</div>
		<p class="text-lg">{card.description}</p>
	</div>
{/snippet}

<section class="flex flex-col items-center gap-22 bg-theme-offWhite p-10 pb-20 md:px-20 md:py-30">
	<div class="flex flex-col md:flex-row gap-16">
		{#each cards as card, i (i)}
			{@render Card(card)}
		{/each}
	</div>
	<a
		href="https://reservation.elloha.com/?idPublication=e91f5f11-7560-453d-9b21-c9fdb924680c&idoi=b7073d26-a843-4537-b5db-fa0692fe33c5"
		class="w-fit rounded-full bg-theme-green px-14 py-2 text-theme-offWhite hover:bg-theme-light hover:text-theme-green"
        target="_blank"
		>{m['homepage.informations_cards.link.title']()}</a
	>
</section>
