import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next/pages";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import { ErrorPageSection } from "@/components/sections";

type Props = {
	// Add custom props here
};

const NotFoundPage = (
	_props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	const { t } = useTranslation("common");
	const title = t("errors.notFoundTitle");
	const description = t("errors.notFoundDescription");

	return (
		<div className="relative">
			<Head>
				<title>
					{t("errors.pageTitle", {
						statusCode: 404,
						title,
					})}
				</title>
				<meta name="description" content={description} />
			</Head>
			<ErrorPageSection
				statusCode={404}
				statusLabel={t("errors.statusLabel", { statusCode: 404 })}
				title={title}
				description={description}
				homeLabel={t("errors.actions.home")}
				contactLabel={t("errors.actions.contact")}
			/>
		</div>
	);
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});

export default NotFoundPage;
