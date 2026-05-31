import type { GetServerSideProps, NextPage } from "next";
import {
	ContactDetailsSection,
	ContactFaqSection,
	ContactFormSection,
	ContactHero,
	ContactOpportunitiesSection,
	CtaBand,
	SiteVisitSection,
	SocialSection,
} from "@/components/sections";
import { getI18nProps } from "@/lib/i18n";
import PageHead from "@/components/Head";

type PageProps = {
	// Add custom props here
};

const ContactPage: NextPage<PageProps> = () => {
	return (
		<div className="relative">
			<PageHead pageName="contact" />
			<ContactHero />
			<ContactOpportunitiesSection />
			<ContactFormSection />
			<ContactDetailsSection />
			<SiteVisitSection />
			<ContactFaqSection />
			<SocialSection />
			<CtaBand />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const i18nProps = await getI18nProps(context, [
		"common",
		"meta",
		"contact",
		"value",
		"invest",
        "cta",
        "operations"
	]);

	if (!i18nProps) return { notFound: true };

	return { props: { ...i18nProps } };
};

export default ContactPage;
