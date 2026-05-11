import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#f3bd27",
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
					DEFAULT: "#121212",
					paper: "#1A1A1A",
                    elevated: "#2c2c2c",
                    50: "#f5f5f5",
                    100: "#e8e8e8",
                    200: "#d1d1d1",
                    300: "#b9b9b9",
                    400: "#a2a2a2",
                    500: "#8a8a8a",
                    600: "#727272",
                    700: "#5a5a5a",
                    800: "#424242",
                    900: "#1A1A1A",
				},
				onSurface: {
					DEFAULT: "#F5F0E8",
					mute: "#faf5ec",
				},
			},
			backgroundColor: {
				dark: "#1A1A1A",
				"dark-paper": "#121212",
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
