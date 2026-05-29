import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import {
	ValueChainCtaSection,
	ValueChainEsgSection,
	ValueChainHero,
	ValueChainMarginSection,
	ValueChainOverviewSection,
	ValueChainStagesSection,
	ValueChainTransparencySection,
} from "@/components/sections";

type Props = {
	// Add custom props here
};

const ValueChainPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="relative">
			<ValueChainHero />
			<ValueChainOverviewSection />
			<ValueChainStagesSection />
			<ValueChainMarginSection />
			<ValueChainTransparencySection />
			<ValueChainEsgSection />
			<ValueChainCtaSection />
		</div>
	);
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});

export default ValueChainPage;
