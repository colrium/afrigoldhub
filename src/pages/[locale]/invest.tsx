import type { GetServerSideProps, NextPage } from "next";
import {
	FaqSection,
	InvestHero,
	InvestmentTiersPageSection,
	InvestorProcessSection,
	InvestorSafeguardsSection,
	MetricsSection,
	TestimonialsSection,
	ValueChainCtaSection,
} from "@/components/sections";
import { getI18nProps } from "@/lib/i18n";
import PageHead from "@/components/Head";

type PageProps = {
	// Add custom props here
};

const InvestPage: NextPage<PageProps> = () => {
	return (
		<div className="relative">
			<PageHead pageName="invest" />
			<InvestHero />
			<InvestmentTiersPageSection />
			<div className="p-2 md:p-8 bg-[#0A0A0A]">
				<MetricsSection />
			</div>
			<InvestorProcessSection />
			<InvestorSafeguardsSection />
			<TestimonialsSection />
			<FaqSection />
			<ValueChainCtaSection />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const i18nProps = await getI18nProps(context, [
		"common",
		"meta",
		"operations",
		"value",
		"invest",
		"cta",
		"testimonials",
		"faq",
		"metrics",
	]);

	if (!i18nProps) return { notFound: true };

	return { props: { ...i18nProps } };
};

export default InvestPage;
