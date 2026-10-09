<script lang="ts">
    import arrow from '$lib/assets/images/arrow.svg';
	import Swiper from 'swiper';
	import { Navigation } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/navigation';

    let gallery = Object.values(
        import.meta.glob(
            '$lib/assets/gallery/*.{png,jpg,jpeg,webp,avif}',
            {
            eager: true,
            query: '?url',
            import: 'default'
            }
        )
    );

	new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2
        }
    }
});
</script>

<section class="bg-theme-offWhite pb-5 px-5 pt-30">
	<div class="swiper h-175 w-full md:w-225">
		<div class="swiper-wrapper">
			{#each gallery as image, i (i)}
				<div class="swiper-slide">
					<img src={image} alt="" class="h-full w-full object-cover" />
				</div>
			{/each}
		</div>
		<div class="swiper-button-prev w-15! h-15! ml-2! bg-black/30 rounded-full">
            <img src={arrow} alt="Previous" class="w-full h-full" />
        </div>
		<div class="swiper-button-next w-15! h-15! mr-2! bg-black/30 rounded-full">
            <img src={arrow} alt="Next" class="rotate-180 w-full h-full" />
        </div>
	</div>
</section>
