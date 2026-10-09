import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, fetch }) => {
	const data = await request.json();

	const { name, email, phone, message } = data;

	if (
		!name ||
		!email ||
		!phone ||
		!message
	) {
		return json(
			{
				success: false,
				error: 'Tous les champs sont obligatoires.'
			},
			{ status: 400 }
		);
	}

	const emailContent = `
        Nouveau message depuis le site laburie.com

        Nom : ${name}
        Email : ${email}
        Téléphone : ${phone}
        Message :
        ${message}
    `;

	const response = await fetch('https://api.brevo.com/v3/smtp/email', {
		method: 'POST',
		headers: {
			accept: 'application/json',
			'api-key': env.BREVO_API_KEY,
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			sender: {
				name: 'La Burie - Formulaire de contact',
				email: env.CONTACT_EMAIL
			},
			to: [
				{
					email: env.RECEIVER_EMAIL
				}
			],
			replyTo: {
				email: env.CONTACT_EMAIL
			},
			subject: `Nouveau message de ${name}`,
			textContent: emailContent
		})
	});

	if (!response.ok) {
		const error = await response.text();

		console.error('Erreur Brevo:', error);

		return json(
			{
				success: false,
				error: "Impossible d'envoyer le message."
			},
			{ status: 500 }
		);
	}

	return json({
		success: true
	});
};
