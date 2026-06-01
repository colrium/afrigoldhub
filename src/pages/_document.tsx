import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentProps } from "next/document";
import i18nextConfig from "../../next-i18next.config";

type Props = DocumentProps & {
	// add custom document props
};

class MyDocument extends Document<Props> {
	render() {
        const currentLocale = (this.props.__NEXT_DATA__.query.locale ?? i18nextConfig.i18n.defaultLocale) as string;
		return (
			<Html lang={currentLocale} className="dark">
				<Head>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
