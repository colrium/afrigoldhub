import { ThemeProvider, CssBaseline } from "@mui/material";
import { appWithTranslation } from "next-i18next/pages";
import type { ReactElement } from "react";
import theme from "@/theme/theme";
import "@/styles/globals.css";
import type { AppPropsWithLayout } from "@/types/next";

function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{getLayout(<Component {...pageProps} />)}
		</ThemeProvider>
	);
}

export default appWithTranslation(App);
