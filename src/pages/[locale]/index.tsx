import type { GetServerSideProps, NextPage } from "next";
import PageHead from "@/components/Head";
import {
	HeroSection,
	MetricsSection,
	WhySection,
	OperationsSection,
	CtaBand,
	InvestmentSection,
	FaqSection,
	TestimonialsSection,
} from "@/components/sections";
import ComplianceMinimal from "@/components/sections/ComplianceMinimal";
import { getI18nProps } from "@/lib/i18n";

interface PageProps {
	// Add any additional props fetched server-side here
}

const HomePage: NextPage<PageProps> = () => {
	return (
		<div className="relative ">
			<PageHead pageName="home" />

			<HeroSection />
			<OperationsSection />
			<WhySection />
			<ComplianceMinimal />
			<div className="p-2 md:p-8">
				<MetricsSection />
			</div>
			<InvestmentSection />
			<TestimonialsSection />
			<FaqSection />
			<CtaBand />
		</div>
	);
};
export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const i18nProps = await getI18nProps(context, [
		"common",
		"meta",
		"home",
		"faq",
		"testimonials",
		"invest",
		"operations",
		"why",
		"compliance",
		"cta",
		"metrics",
	]);

	if (!i18nProps) return { notFound: true };

	return { props: { ...i18nProps } };
};
