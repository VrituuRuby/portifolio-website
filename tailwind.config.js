/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				red: '#D13E55',
				salmon: '#E25555',
				'black-900': '#111',
				white: '#fff'
			},
			fontFamily: {
				rubik: ['Rubik', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				mono: ['Roboto Mono', 'mono']
			},
			dropShadow: {
				default: '0 4px 4px rgba(0,0,0,0.25)'
			},
			boxShadow: {
				default: '0 4px 4px rgba(0,0,0,0.25)'
			}
		}
	},
	plugins: []
};
