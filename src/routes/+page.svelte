<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import InformationsCards from '$lib/components/InformationsCards.svelte';
	import ImageFull from '$lib/components/ImageFull.svelte';
	import Contact from '$lib/components/Contact.svelte';

	let { data } = $props();
	console.log('data:', data);
</script>

{#snippet Word(word: string)}
	<div class="flex gap-4">
		<span>{word}</span>
		<span>-</span>
	</div>
{/snippet}

<Hero />
<About />
<Marquee>
	<div class="flex gap-4 bg-theme-green py-2 pr-4 text-theme-offWhite uppercase">
		{@render Word(m['homepage.marquee.first_word']())}
		{@render Word(m['homepage.marquee.second_word']())}
		{@render Word(m['homepage.marquee.third_word']())}
	</div>
</Marquee>
<Gallery images={data.gallery} />
<InformationsCards />
<ImageFull />
<Contact />