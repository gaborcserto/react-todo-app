/** @type {import('tailwindcss').Config} */
import sass from 'vite-plugin-sass';

export default {
	content: [
		"./dist/**/*.html",
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		sass(),
	]
}

