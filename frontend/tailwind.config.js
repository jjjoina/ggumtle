/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// Mono Colors
				point1: '#454645',
				unActive: '#D9D9D9',

				// Main Colors
				green: '#52A88C',
				lightGreen: '#8DC788',
				red: '#FA5853',
				yellow: '#FFDF85',
				pink: '#FF98B7',
				mint: '#AAD4D4',
				orange: '#F7B578',
				skyBlue: '#A4BCF6',
				purple: '#C39DF9',
				beige: '#CDBC8A',
				sandPink: '#EEA08E',
				brown: '#C7927A',
			},
		},
	},
	plugins: [],
}
