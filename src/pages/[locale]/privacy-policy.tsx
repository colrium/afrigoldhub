import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import { LegalPageSection } from "@/components/sections";
import { useTranslation, Trans } from "next-i18next/pages";
type Props = {
	// Add custom props here
};

const PrivacyPolicyPage = (
	_props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const { t } = useTranslation(["common", "privacy"]);
    const sections = t("privacy.articles", { returnObjects: true }) as {
		title: string;
		content: string;
	}[];
	return (
		<div className="relative">
			<Head>
				<title>{t("privacy.meta.page_title")}</title>
				<meta
					name="description"
					content={t("privacy.meta.meta_description")}
				/>
			</Head>
			<LegalPageSection
				label="Privacy"
				title="Privacy Policy"
				description="This policy explains how AfriGold Hub handles information submitted through our website, contact forms, investor enquiries, and site-visit requests."
				lastUpdated="May 16, 2026"
				sections={sections}
				contactHref="/contact?reason=privacy"
				contactLabel="Contact Privacy Team"
			/>
		</div>
	);
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common", "privacy"])),
	},
});

export default PrivacyPolicyPage;
