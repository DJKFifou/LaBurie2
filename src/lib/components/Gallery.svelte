<script lang="ts">
    import { onMount, tick } from 'svelte';
    import Swiper from 'swiper';
    import { Navigation } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/navigation';

    let mounted = $state(false);

    const gallery = Object.entries(
        import.meta.glob('/src/lib/gallery/*.{png,jpg,jpeg,webp,avif}', {
            eager: true,
            query: '?url',
            import: 'default'
        })
    )
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([, url]) => url as string);

    onMount(async () => {
        mounted = true;

        await tick();
        
        const swiper = new Swiper('.swiper', {
            modules: [Navigation],
            loop: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            breakpoints: {
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                }
            }
        });

        return () => {
            swiper.destroy(true, true);
        };
    });
</script>

<section class="bg-theme-offWhite pb-5 px-5 pt-30">
	<div class="swiper h-175 w-full lg:w-225">
		<div class="swiper-wrapper">
			{#if mounted}
                {#each gallery as image, i (i)}
                    <div class="swiper-slide">
                        <img
                            src={image}
                            alt=""
                            class="h-full w-full object-cover"
                        />
                    </div>
                {/each}
            {/if}
		</div>
		<div class="swiper-button-prev w-15! h-15! ml-2! bg-black/30 rounded-full">
            <img src="arrow.svg" alt="Previous" class="w-full h-full" />
        </div>
		<div class="swiper-button-next w-15! h-15! mr-2! bg-black/30 rounded-full">
            <img src="arrow.svg" alt="Next" class="rotate-180 w-full h-full" />
        </div>
	</div>
</section>
