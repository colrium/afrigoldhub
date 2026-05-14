import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import {
	ContactDetailsSection,
	ContactFaqSection,
	ContactFormSection,
	ContactHero,
	CtaBand,
	SiteVisitSection,
	SocialSection,
} from "@/components/sections";

type Props = {
	// Add custom props here
};

const ContactPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="relative">
			<ContactHero />
			<ContactFormSection />
			<ContactDetailsSection />
			<SiteVisitSection />
			<ContactFaqSection />
			<SocialSection />
			<CtaBand />
		</div>
	);
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});

export default ContactPage;
