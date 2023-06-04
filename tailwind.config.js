/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				red: '#D13E55',
				salmon: '#E25555',
				'black-900': '#111',
				white: '#fff',
				'gray-100': '#F5F5F5',
				'gray-200': '#EEEEEE',
				'gray-300': '#E0E0E0',
				'gray-400': '#BDBDBD',
				'gray-500': '#9E9E9E',
				'gray-600': '#757575',
				'gray-700': '#616161',
				'gray-800': '#424242',
				'gray-900': '#212121'
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
