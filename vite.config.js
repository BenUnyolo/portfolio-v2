// // vite.config.js
// import { defineConfig } from 'vite';
// import { sveltekit } from '@sveltejs/kit/vite';
// import Icons from 'unplugin-icons/vite';

// export default defineConfig({
// 	plugins: [
// 		sveltekit(),
// 		Icons({
// 			compiler: 'svelte'
// 		})
// 	]
// });
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	]
};

export default config;
