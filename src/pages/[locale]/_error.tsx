import type { NextPageContext } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next/pages";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import { ErrorPageSection } from "@/components/sections";

type ErrorPageProps = {
	statusCode: number;
};

export default function ErrorPage({ statusCode }: ErrorPageProps) {
	const { t } = useTranslation("common");
	const title =
		statusCode === 404
			? t("errors.notFoundTitle")
			: statusCode === 500
				? t("errors.serverErrorTitle")
				: t("errors.genericTitle");
	const description =
		statusCode === 404
			? t("errors.notFoundDescription")
			: statusCode === 500
				? t("errors.serverErrorDescription")
				: t("errors.genericDescription");

	return (
		<div className="relative">
			<Head>
				<title>
					{t("errors.pageTitle", {
						statusCode,
						title,
					})}
				</title>
				<meta name="description" content={description} />
			</Head>
			<ErrorPageSection
				statusCode={statusCode}
				statusLabel={t("errors.statusLabel", { statusCode })}
				title={title}
				description={description}
				homeLabel={t("errors.actions.home")}
				contactLabel={t("errors.actions.contact")}
			/>
		</div>
	);
}

ErrorPage.getInitialProps = async ({ res, err, locale }: NextPageContext) => {
	const statusCode = res?.statusCode ?? err?.statusCode ?? 500;

	return {
		statusCode,
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	};
};
