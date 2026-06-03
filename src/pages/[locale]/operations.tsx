import type { GetServerSideProps, NextPage } from "next";
import PageHead from "@/components/Head";
import {
	OperationsCapabilitiesSection,
	OperationsExplorationSection,
	OperationsHero,
	OperationsNetworkSection,
	OperationsOverviewSection,
	OperationsSection,
	CtaBand,
} from "@/components/sections";
import { GallerySection } from "@/components/gallery";
import { getI18nProps } from "@/lib/i18n";

type PageProps = {
	// Add custom props here
};

const OperationsPage: NextPage<PageProps> = () => {
	return (
		<div className="relative ">
			<PageHead pageName="operations" />
			<OperationsHero />
			<OperationsOverviewSection />
			<OperationsExplorationSection />
			<OperationsCapabilitiesSection />
			<OperationsSection />
			<GallerySection
				categoryIds={[
					"artisanal-mining",
					"processing",
					"equipment",
					"smelting-and-assay",
				]}
				sectionKey="operations"
			/>
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
		"gallery",
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
