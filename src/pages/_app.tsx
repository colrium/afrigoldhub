import "@/styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { appWithTranslation } from "next-i18next/pages";
import { useCallback, type ReactElement } from "react";
import theme from "@/theme/theme";

import type { AppPropsWithLayout } from "@/types/next";
import LandingPageLayout from "@/layouts/LandingPage/Layout";
const withLandingPageLayout = (page: ReactElement) => (
				<LandingPageLayout>
					{page}
				</LandingPageLayout>
			);
function App({ Component, pageProps }: AppPropsWithLayout) {
    const renderPageWithLayout = Component.getLayout ?? withLandingPageLayout;
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{renderPageWithLayout(<Component {...pageProps} />)}
		</ThemeProvider>
	);
}

export default appWithTranslation(App);
