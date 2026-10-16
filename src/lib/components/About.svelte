<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
</script>

<section class="flex flex-col md:flex-row min-h-screen-dvh items-center gap-20 pt-10 pb-20 px-5 md:px-10 lg:p-20 overflow-hidden">
	<div class="relative h-full flex-1">
		<img
			src="/images/LaBurie_About.webp"
			alt=""
			class="h-full w-full object-cover"
		/>
		<img
			src="/images/LaBurie_Tampon_green.webp"
			alt=""
			class="absolute -right-4 md:right-0 bottom-0 md:bottom-10 w-30 md:w-50 translate-y-1/2 md:translate-y-0 md:translate-x-1/2 object-contain"
		/>
	</div>
	<div class="flex flex-1 flex-col items-center justify-center gap-15 md:gap-25 text-center">
		<div class="flex flex-col items-center gap-4 text-lg px-5 md:px-10">
			<div class="flex flex-col items-center gap-4">
				<p>
					{m['homepage.about.first_paragraph']()}
				</p>
				<p>
					{m['homepage.about.second_paragraph']()}
				</p>
				<p>
					{m['homepage.about.third_paragraph']()}
				</p>
			</div>
		</div>
		<a
			href="https://reservation.elloha.com/?idPublication=e91f5f11-7560-453d-9b21-c9fdb924680c&idoi=b7073d26-a843-4537-b5db-fa0692fe33c5"
			class="w-fit rounded-full bg-theme-green px-14 py-2 text-theme-offWhite hover:bg-theme-offWhite hover:text-theme-green"
			>{m['homepage.about.link.title']()}</a
		>
	</div>
</section>
