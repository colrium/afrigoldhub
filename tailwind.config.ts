import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#fef9e7",
					100: "#fdf0c0",
					200: "#fbe596",
					300: "#f9d96b",
					400: "#f7ce4a",
					500: "#f3bd27",
					600: "#e0a820",
					700: "#c48f18",
					800: "#a87610",
					900: "#7d5508",
				},
				surface: {
					DEFAULT: "#1A1A1A",
					paper: "#242424",
					elevated: "#2c2c2c",
				},
			},
			backgroundColor: {
				dark: "#1A1A1A",
				"dark-paper": "#242424",
				"dark-elevated": "#2c2c2c",
			},
			borderColor: {
				primary: "rgba(243,189,39,0.3)",
				"primary-subtle": "rgba(243,189,39,0.1)",
			},
			ringColor: {
				primary: "#f3bd27",
			},
		},
	},
};

export default config;
