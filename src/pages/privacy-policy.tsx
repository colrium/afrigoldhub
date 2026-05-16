import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import { LegalPageSection } from "@/components/sections";

type Props = {
	// Add custom props here
};

const sections = [
	{
		heading: "Information we collect",
		body: [
			"We collect information you choose to provide when you submit an enquiry, request investor materials, schedule a site visit, or contact AfriGold Hub. This may include your name, email address, phone number, country, organisation, investment interest, and message details.",
			"We may also collect basic technical information from your browser or device, such as pages visited, approximate location, referring links, and usage patterns, to help us keep the website reliable and improve the experience.",
		],
	},
	{
		heading: "How we use information",
		body: [
			"We use submitted information to respond to enquiries, prepare relevant investor or operations information, arrange calls or site visits, and maintain communication with prospective partners.",
			"We may use website usage data to monitor site performance, protect against abuse, understand demand for our content, and improve navigation, forms, and page content.",
		],
	},
	{
		heading: "Sharing and disclosure",
		body: [
			"We do not sell personal information. We may share information with service providers, professional advisers, compliance partners, or operational team members where this is reasonably needed to respond to your request or operate the website.",
			"We may disclose information if required by law, regulation, court order, or a legitimate request from a competent authority, or where disclosure is necessary to protect our rights, users, operations, or partners.",
		],
	},
	{
		heading: "Retention and security",
		body: [
			"We retain personal information only for as long as reasonably necessary for the purposes described on this page, including enquiry handling, investor relationship management, legal compliance, dispute prevention, and business record keeping.",
			"We use administrative, technical, and organisational safeguards designed to protect information. No website or transmission method is completely secure, so users should avoid sending sensitive identity, financial, or confidential documents through general website forms unless specifically requested through an approved channel.",
		],
	},
	{
		heading: "Your choices",
		body: [
			"You may ask us to update, correct, or delete information you have submitted, subject to legal, regulatory, security, and legitimate business retention requirements.",
			"You may also opt out of non-essential communications by contacting us. Transactional, compliance, or enquiry-related messages may still be sent where necessary to handle an active request.",
		],
	},
	{
		heading: "International operations",
		body: [
			"AfriGold Hub operates across multiple African jurisdictions and may handle enquiries from users in other countries. Information may therefore be processed in a country different from your own, subject to appropriate operational and compliance controls.",
			"This page is intended as a practical website privacy notice and should be reviewed with qualified counsel for jurisdiction-specific legal requirements before being treated as a final legal policy.",
		],
	},
];

const PrivacyPolicyPage = (
	_props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	return (
		<div className="relative">
			<Head>
				<title>Privacy Policy - AfriGold Hub</title>
				<meta
					name="description"
					content="Read how AfriGold Hub collects, uses, protects, and handles personal information submitted through the website."
				/>
			</Head>
			<LegalPageSection
				label="Privacy"
				title="Privacy Policy"
				description="This policy explains how AfriGold Hub handles information submitted through our website, contact forms, investor enquiries, and site-visit requests."
				lastUpdated="May 16, 2026"
				sections={sections}
				contactHref="/contact?reason=privacy"
				contactLabel="Contact Privacy Team"
			/>
		</div>
	);
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});

export default PrivacyPolicyPage;
