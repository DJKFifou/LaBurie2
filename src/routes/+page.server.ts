import { STRAPI_URL } from '$env/static/private';
import type { ImageStrapi } from '$lib/types';
import type { text } from 'node:stream/consumers';

export async function load({ fetch }) {
	const galleryResponse = await fetch(
		`${STRAPI_URL}/api/galleries?populate=Images`
	);

	if (!galleryResponse.ok) {
		throw new Error('Impossible de récupérer la galerie');
	}

    const aboutResponse = await fetch(
        `${STRAPI_URL}/api/abouts?populate=*`
    );

	if (!aboutResponse.ok) {
		throw new Error('Impossible de récupérer la galerie');
	}

    const marqueeResponse = await fetch(
        `${STRAPI_URL}/api/marquees?populate=*`
    );

	const galleryResult = await galleryResponse.json();
    const gallery = galleryResult.data[0];

	const aboutResult = await aboutResponse.json();
    const about = aboutResult.data[0].About[0];
    console.log('first_block text : ', about.first_block[0].children[0].text);

    const marqueeResult = await marqueeResponse.json();
    const marquee = marqueeResult.data[0].Marquee;
    console.log('marquee : ', marquee);

	return {
		gallery: gallery.Images.map((image: ImageStrapi) => ({
            id: image.id,
			url: `${STRAPI_URL}${image.url}`,
			alt: image.alternativeText ?? image.name
		})),
		about: {
			id: about.id,
			first_block: about.first_block.map((block: any) => ({
                text: block.children[0].text
            })),
            second_block: about.second_block.map((block: any) => ({
                text: block.children[0].text
            })),
			link: about.link,
			image_left: about.image_left ? `${STRAPI_URL}${about.image_left.url}` : null
		},
        marquee: {
            id: marquee.id,
            first_text: marquee.first_text,
            second_text: marquee.second_text,
            third_text: marquee.third_text
        }
	};
}