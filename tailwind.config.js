module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		fontFamily: {
			sans: ["Poppins", "ui-sans-serif", "system-ui"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
