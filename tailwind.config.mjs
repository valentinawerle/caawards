/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary:"#53FC18"
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
				'.sponsors-class': {
					'@apply w-56 h-auto md:w-96 transition-transform hover:scale-110 duration-200': {},
				},
			});
		},
	],
}
