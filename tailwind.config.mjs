/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary:"#03E907"
			},
			fontFamily: {
				Inter: ["Inter", 'sans-serif']
			}
		},
	},
	plugins: [
		animations,
		function ({ addUtilities }) {
			addUtilities({
				'.hover-scale': {
					'@apply hover:scale-110 transition-transform duration-200': {},
				},
			});
		},
	],
}
