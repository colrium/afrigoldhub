import type { GetServerSideProps, NextPage } from "next";
import PageHead from "@/components/Head";
import {
	ValueChainCtaSection,
	ValueChainEsgSection,
	ValueChainHero,
	ValueChainMarginSection,
	ValueChainOverviewSection,
	ValueChainStagesSection,
	ValueChainTransparencySection,
} from "@/components/sections";
import { GallerySection } from "@/components/gallery";
import { getI18nProps } from "@/lib/i18n";

type PageProps = {
	// Add custom props here
};

const ValueChainPage: NextPage<PageProps> = () => {
	return (
		<div className="relative">
			<PageHead pageName="value_chain" />
			<ValueChainHero />
			<ValueChainOverviewSection />
			<ValueChainStagesSection />
			<ValueChainMarginSection />
			<ValueChainTransparencySection />
			<GallerySection
				categoryIds={["processing", "smelting-and-assay", "sale-distribution", "nuggets"]}
				sectionKey="valueChain"
			/>
			<ValueChainEsgSection />
			<ValueChainCtaSection />
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
		"value",
		"invest",
		"compliance",
		"cta",
		"testimonials",
		"faq",
	]);

	if (!i18nProps) return { notFound: true };

	return { props: { ...i18nProps } };
};

export default ValueChainPage;
