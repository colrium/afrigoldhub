import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
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

type Props = {
	// Add custom props here
};

const InvestPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="relative">
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

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});

export default InvestPage;
