<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const form = event.currentTarget as HTMLFormElement;
		const formData = new FormData(form);

		const data = Object.fromEntries(formData.entries());

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Une erreur est survenue.');
			}

			console.log('Message envoyé !');

			form.reset();
		} catch (error) {
			console.error(error);
		}
	}
</script>

<section class="flex flex-col-reverse md:flex-row gap-10 py-20 md:py-40 px-5 md:px-10 lg:px-20">
    <div class="flex-1 flex flex-col justify-end items-center text-center gap-10 md:gap-20">
        <div class="flex flex-col gap-6 w-full max-w-xl">
            <h3 class="text-2xl font-medium">
                {@html m['homepage.contact.title']()}
            </h3>
            <form class="flex flex-col gap-4" onsubmit={handleSubmit}>
                <input type="text" placeholder={m['homepage.contact.form.name']()} id="name" name="name" class="border-2 py-2 px-6" required />
                <input type="email" placeholder={m['homepage.contact.form.email']()} id="email" name="email" class="border-2 py-2 px-6" required />
                <input type="phone" placeholder={m['homepage.contact.form.phone']()} id="phone" name="phone" class="border-2 py-2 px-6" required />
                <textarea placeholder={m['homepage.contact.form.message']()} id="message" name="message" class="border-2 py-2 px-6" required></textarea>
                <button type="submit" class="mt-4 py-4 w-full bg-theme-grey text-theme-light rounded-full cursor-pointer">{m['homepage.contact.form.submit']()}</button>
            </form>
        </div>
        <img src="/src/lib/assets/images/LaBurie_Logo_Black.webp" alt="" class="h-50 object-contain" />
    </div>
    <div class="flex-1 relative">
        <img src="/src/lib/assets/images/LaBurie_Contact.webp" alt="" class="w-full h-125 md:h-225 object-cover" />
        <img src="/src/lib/assets/images/LaBurie_Tampon_brown.webp" alt="" class="absolute top-0 left-4 md:inset-0 w-30 md:w-50 -translate-y-1/2 md:*:-translate-1/2 object-contain" />
    </div>
</section>