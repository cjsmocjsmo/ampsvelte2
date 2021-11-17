/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static';
// import node from '@sveltejs/adapter-node';

const config = {
	kit: {
		// adapter: node(),
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	// vite: {
	// 	server: {
	// 		hmr: {
	// 				host: 'localhost',
	// 				port: 4588,
	// 				protocol: 'ws'
	// 		}
	// 	}
	// }
};

export default config;
