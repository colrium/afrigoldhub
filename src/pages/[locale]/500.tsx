import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "@/hooks";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import { ErrorPageSection } from "@/components/sections";
import { getI18nProps } from "@/lib/i18n";

type PageProps = {
	// Add custom props here
};

const ServerErrorPage: NextPage<PageProps> = () => {
	const { t } = useTranslation("common");
	const title = t("errors.serverErrorTitle");
	const description = t("errors.serverErrorDescription");

	return (
		<div className="relative">
			<Head>
				<title>
					{t("errors.pageTitle", {
						statusCode: 500,
						title,
					})}
				</title>
				<meta name="description" content={description} />
			</Head>
			<ErrorPageSection
				statusCode={500}
				statusLabel={t("errors.statusLabel", { statusCode: 500 })}
				title={title}
				description={description}
				homeLabel={t("errors.actions.home")}
				contactLabel={t("errors.actions.contact")}
			/>
		</div>
	);
};


export const getServerSideProps: GetServerSideProps = async (context) => {
	const i18nProps = await getI18nProps(context, ["common"]);
	return { props: { ...i18nProps } };
};

export default ServerErrorPage;
