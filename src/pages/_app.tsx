import "@/styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { appWithTranslation } from "next-i18next/pages";
import { useCallback, type ReactElement } from "react";
import theme from "@/theme/theme";
import { Manrope, Montserrat } from 'next/font/google';

const manrope = Manrope({
	subsets: ['latin'],
	variable: '--font-manrope',
});

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
});

import type { AppPropsWithLayout } from "@/types/next";
import LandingPageLayout from "@/layouts/LandingPage/Layout";
const withLandingPageLayout = (page: ReactElement) => <LandingPageLayout>{page}</LandingPageLayout>;
function App({ Component, pageProps }: AppPropsWithLayout) {
	const renderPageWithLayout = Component.getLayout ?? withLandingPageLayout;
	return (
		<div className={`${manrope.variable} ${montserrat.variable}`}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{renderPageWithLayout(<Component {...pageProps} />)}
			</ThemeProvider>
		</div>
	);
}

export default appWithTranslation(App);
