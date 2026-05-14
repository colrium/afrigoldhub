import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import {
	AboutGovernanceSection,
	AboutHero,
	AboutPrinciplesSection,
	AboutStorySection,
	AboutTeamSection,
	AboutTimelineSection,
	ComplianceMinimal,
	CtaBand,
} from "@/components/sections";

type Props = {
	// Add custom props here
};

const AboutPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="relative">
			<AboutHero />
			<AboutStorySection />
			<AboutPrinciplesSection />
			<AboutTeamSection />
			<AboutGovernanceSection />
			<AboutTimelineSection />
			<ComplianceMinimal />
			<CtaBand />
		</div>
	);
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});

export default AboutPage;
