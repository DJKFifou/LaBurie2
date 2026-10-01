<script lang="ts">
	import Swiper from 'swiper';
	import { Navigation } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/navigation';

	let { images } = $props();

	new Swiper('.swiper', {
		loop: true,
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 20,
		modules: [Navigation],
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});

	interface ImageType {
		url: string;
		alt: string;
	}
</script>

{#snippet Image(image: ImageType)}
	<img src={image.url} alt={image.alt} class="h-full w-full object-cover" />
{/snippet}

<section class="pt-30 bg-theme-offWhite">
	<div class="swiper h-175 w-225">
		<div class="swiper-wrapper">
			{#each images as image (image.id)}
				<div class="swiper-slide">
					{@render Image(image)}
				</div>
			{/each}
		</div>
		<div class="swiper-button-prev w-15! h-15! ml-2! bg-black/30 rounded-full">
            <img src="/src/lib/assets/arrow.svg" alt="Previous" class="w-full h-full" />
        </div>
		<div class="swiper-button-next w-15! h-15! mr-2! bg-black/30 rounded-full">
            <img src="/src/lib/assets/arrow.svg" alt="Next" class="rotate-180 w-full h-full" />
        </div>
	</div>
</section>
