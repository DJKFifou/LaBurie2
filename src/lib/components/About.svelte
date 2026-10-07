<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
</script>

<section class="flex h-screen-dvh items-center gap-16 p-20">
	<div class="relative h-full flex-1">
		<img
			src="/src/lib/assets/images/LaBurie_About.webp"
			alt=""
			class="h-full w-full object-cover"
		/>
		<img
			src="/src/lib/assets/images/LaBurie_Tampon_green.webp"
			alt=""
			class="absolute right-0 bottom-10 w-50 translate-x-1/2 object-contain"
		/>
	</div>
	<div class="flex flex-1 flex-col items-center justify-center gap-25 text-center">
		<div class="flex flex-col items-center gap-4 text-lg px-10">
			<div class="flex flex-col items-center gap-4">
				<hr class="my-4 w-3/5 border" />
				<p>
					{m['homepage.about.first_block.first_paragraph']()}
				</p>
				<p>
					{m['homepage.about.first_block.second_paragraph']()}
				</p>
				<p>
					{m['homepage.about.first_block.third_paragraph']()}
				</p>
			</div>
			<div class="flex flex-col items-center gap-4">
				<hr class="my-4 w-3/5 border" />
				<p>
					{m['homepage.about.second_block.first_paragraph']()}
				</p>
				<p>
					{m['homepage.about.second_block.second_paragraph']()}
				</p>
			</div>
		</div>
		<a
			href="#"
			class="w-fit rounded-full bg-theme-green px-14 py-2 text-theme-offWhite hover:bg-theme-offWhite hover:text-theme-green"
			>{m['homepage.about.link.title']()}</a
		>
	</div>
</section>
