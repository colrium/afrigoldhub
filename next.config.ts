import type { NextConfig } from "next";
import nextI18nConfig from "./next-i18next.config";
const i18n = nextI18nConfig.i18n;
const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	i18n,
};

export default nextConfig;
