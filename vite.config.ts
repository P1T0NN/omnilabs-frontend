import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({ 
    plugins: [
        paraglideVitePlugin({ 
			project: './project.inlang', 
			outdir: './src/shared/lib/paraglide',
            strategy: ['url', 'baseLocale'],
            disableAsyncLocalStorage: true,
			// Every locale is prefixed (including base): /en/..., /es/... — no unprefixed URLs
			urlPatterns: [
				{
					pattern: ':protocol://:domain(.*)::port?/:path(.*)?',
					localized: [
						['en', ':protocol://:domain(.*)::port?/en/:path(.*)?'],
						['es', ':protocol://:domain(.*)::port?/es/:path(.*)?']
					]
				}
			]
		}),
        tailwindcss(), 
        sveltekit()] 
    });
