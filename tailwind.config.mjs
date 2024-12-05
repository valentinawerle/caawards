/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary:"#FFCA2D"
			},
			fontFamily: {
				Inter: ["Inter", 'sans-serif']
			}
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.hover-scale': {
					'@apply hover:scale-110 transition-transform duration-200': {},
				},
			});
		},
	],
}
