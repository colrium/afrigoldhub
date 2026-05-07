import { Box, Button, Typography } from "@mui/material";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next/pages";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import { NextPageContext } from "next";
import Link from "next/link";

const errorCodes: Record<number, string> = {
	400: "errors.badRequest",
	401: "errors.unauthorized",
	403: "errors.forbidden",
	404: "errors.notFound",
	500: "errors.serverError",
};

function ErrorPage({ statusCode }: { statusCode: number }) {
	const { t } = useTranslation("common");
	const messageKey = errorCodes[statusCode] ?? "errors.unexpected";

	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-4">
			<h1 className="text-6xl font-bold">
				{statusCode}
			</h1>
			<p className="text-lg text-gray-600">
				{t(messageKey)}
			</p>
			<Link href="/" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
				{t("goHome")}
			</Link>
		</div>
	);
}

ErrorPage.getInitialProps = async ({ res, err, locale }: NextPageContext & { locale?: string }) => {
	const statusCode = res?.statusCode ?? err?.statusCode ?? 404;

	return {
		statusCode,
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	};
};

export default ErrorPage;
