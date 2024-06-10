/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'.components/**/*.{js,jsx,ts,tsx}',
		'.pages/**/*.{js,jsx,ts,tsx}',
		'.screens/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				garou: {
					cream: '#ffefbc',
					red: '#903430',
					darkBlue: '#202433',
				},
			},
		},
	},
	plugins: [],
};
