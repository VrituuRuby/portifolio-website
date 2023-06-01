/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			rubik: ['Rubiks', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
			poppins: ['Poppins', 'sans-serif']
		},
		colors: {
			red: '#D13E55',
			salmon: '#E25555',
			'black-900': '#111',
			white: '#fff'
		},
		dropShadow: {
			defalut: '0 4px 4px rgba(0,0,0,0.25)'
		},
		extend: {}
	},
	plugins: []
};
