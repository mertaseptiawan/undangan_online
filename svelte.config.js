import adapter from '@sveltejs/adapter-static'; // Ubah dari adapter-auto
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // Penting untuk menangani refresh halaman
			precompress: false,
			strict: true
		})
	}
};

export default config;