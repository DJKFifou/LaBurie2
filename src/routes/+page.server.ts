import { STRAPI_URL } from '$env/static/private';
import type { ImageStrapi } from '$lib/types';

export async function load({ fetch }) {
	const galleryResponse = await fetch(
		`${STRAPI_URL}/api/galleries?populate=Images`
	);

	if (!galleryResponse.ok) {
		throw new Error('Impossible de récupérer la galerie');
	}

	const galleryResult = await galleryResponse.json();
    const gallery = galleryResult.data[0];

	return {
		gallery: gallery.Images.map((image: ImageStrapi) => ({
            id: image.id,
			url: `${STRAPI_URL}${image.url}`,
			alt: image.alternativeText ?? image.name
		}))
	};
}