/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				union: {
					100: "#862633",
					200: "#822433",
					300: "#222222",
					400: "#707372",
					500: "#274244",
					600: "#042a2d",
					700: "#ff6d2c",
				},
			},
			fontFamily: {
				display: "Museo, sans-serif",
			},
		},
	},
	plugins: [],
};
