import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-manrope)', 'Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
				serif: ['var(--font-montserrat)', 'Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
			},
		},
	},
};

export default config;
