<script>
    import { m } from '$lib/paraglide/messages.js';
</script>

<section
	class="flex h-screen-dvh flex-col items-center justify-center gap-30 bg-theme-green text-center p-10"
>
    <div class="flex flex-col items-center text-center gap-4">
        <img
            src="/images/LaBurie_Logo_Offwhite_Crop.webp"
            alt=""
            class="w-full max-w-lg object-contain"
        />
        <h1 class="font-dm sm:text-2xl font-light text-theme-offWhite uppercase tracking-[30%]">{m['homepage.hero.title']()}</h1>
    </div>
	<a href="https://reservation.elloha.com/?idPublication=e91f5f11-7560-453d-9b21-c9fdb924680c&idoi=b7073d26-a843-4537-b5db-fa0692fe33c5" class="rounded-full bg-theme-offWhite px-14 py-2 text-theme-green hover:brightness-85" target="_blank"
		>{m['homepage.hero.link.title']()}</a
	>
</section>
