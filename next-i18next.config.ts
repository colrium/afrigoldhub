import type { I18nConfig } from "next-i18next/proxy";

const config: I18nConfig = {
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr", "sw"],
	},
	supportedLngs: ["en", "fr", "sw"],
	fallbackLng: "en",
	defaultNS: "common",
	localePath: "./public/locales",
	
};

export default config;
