import type { GetServerSideProps, NextPage } from "next";
import PageHead from "@/components/Head";
import { LegalPageSection } from "@/components/sections";
import { useTranslation } from "@/hooks";
import { getI18nProps } from "@/lib/i18n";

type PageProps = {
	// Add custom props here
};

const RiskDisclaimerPage: NextPage<PageProps> = () => {
	const { t } = useTranslation(["common", "risk", "meta"]);
	const siteTitle = t("meta:site.title", { defaultValue: "" });
	const sections = t("risk:articles", {
		returnObjects: true,
		site_title: siteTitle,
		defaultValue: [],
	}) as {
		title: string;
		content: string[];
	}[];
	return (
		<div className="relative">
			<PageHead pageName="risk_disclaimer" />
			<LegalPageSection
				label={t("risk:hero.tag", { defaultValue: "Risk Disclaimer", site_title: siteTitle })}
				title={t("risk:hero.headline", {
					defaultValue: "Risk Disclaimer",
					site_title: siteTitle,
				})}
				description={t("risk:hero.description", { site_title: siteTitle })}
				lastUpdated={t("risk:hero.badge.text", { site_title: siteTitle })}
				sections={sections}
				contactHref={t("risk:contact.link.href", { site_title: siteTitle })}
				contactLabel={t("risk:contact.link.label", { site_title: siteTitle })}
				note={t("risk:contact.description", { site_title: siteTitle })}
			/>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const i18nProps = await getI18nProps(context, ["common", "meta", "risk"]);

	if (!i18nProps) return { notFound: true };

	return { props: { ...i18nProps } };
};

export default RiskDisclaimerPage;
