import type { GetServerSideProps, NextPage } from "next";
import PageHead from "@/components/Head";
import {
	OperationsCapabilitiesSection,
	OperationsHero,
	OperationsNetworkSection,
	OperationsOverviewSection,
	OperationsSection,
	CtaBand,
} from "@/components/sections";
import { getI18nProps } from "@/lib/getStatic";

type PageProps = {
	// Add custom props here
};

const OperationsPage: NextPage<PageProps> = () => {
	return (
		<div className="relative ">
			<PageHead pageName="operations" />
			<OperationsHero />
			<OperationsOverviewSection />
			<OperationsCapabilitiesSection />
			<OperationsSection />
			<OperationsNetworkSection />
			<CtaBand />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const i18nProps = await getI18nProps(context, [
		"common",
		"meta",
		"operations",
		"metrics",
		"why",
		"history",
		"values",
		"invest",
		"compliance",
		"cta",
		"testimonials",
		"faq",
	]);

	if (!i18nProps) return { notFound: true };

	return { props: { ...i18nProps } };
};

export default OperationsPage;
