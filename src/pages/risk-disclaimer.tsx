import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import { LegalPageSection } from "@/components/sections";

type Props = {
	// Add custom props here
};

const sections = [
	{
		heading: "General information only",
		body: [
			"Content on this website is provided for general information about AfriGold Hub, its operating model, and potential partnership discussions. It is not financial, legal, tax, accounting, commodity trading, or investment advice.",
			"No page on this website should be treated as a public offer, prospectus, solicitation, guarantee, or recommendation to buy, sell, lend, invest, or enter into any financial arrangement.",
		],
	},
	{
		heading: "Operational and mining risk",
		body: [
			"Mining and mineral processing involve operational risks, including changes in ore grade, equipment downtime, weather disruption, labour availability, transport delays, security issues, environmental obligations, and site-specific geological uncertainty.",
			"Past production figures, projected output, or illustrative margins may not be repeated. Actual results can vary materially from estimates, targets, or examples shown on the website.",
		],
	},
	{
		heading: "Market and liquidity risk",
		body: [
			"Gold prices fluctuate based on global market conditions, currency movements, interest rates, geopolitical events, buyer spreads, and local market liquidity. Changes in spot price or buyer terms can affect revenue and distributions.",
			"Any private partnership or site-level arrangement may be illiquid. Exit rights, transfer restrictions, lock-up periods, and repayment terms depend on the signed agreement, not website summaries.",
		],
	},
	{
		heading: "Regulatory and jurisdiction risk",
		body: [
			"Mining, environmental, tax, export, precious-metals, and investment rules can change. Licence renewals, inspections, royalties, duties, export approvals, and compliance obligations may affect operations or timelines.",
			"AfriGold Hub operates across multiple jurisdictions. Prospective partners should obtain independent advice on the legal, tax, regulatory, and suitability implications in their own country before entering any arrangement.",
		],
	},
	{
		heading: "No guaranteed returns",
		body: [
			"Any return figures, payback periods, revenue examples, or profit margins shown on the website are illustrative unless expressly confirmed in signed transaction documents. They are subject to operational, market, regulatory, and counterparty risk.",
			"You should only consider participating after reviewing full documentation, asking questions, understanding the risks, and determining that the arrangement is suitable for your financial position and risk tolerance.",
		],
	},
	{
		heading: "Due diligence responsibility",
		body: [
			"Prospective partners are responsible for conducting their own due diligence. This may include reviewing licences, environmental approvals, production records, assay documentation, financial statements, buyer records, site access, and relevant professional advice.",
			"Website content may be updated, corrected, expanded, or withdrawn at any time. Signed agreements, formal disclosures, and verified due-diligence materials control over any summary information on this website.",
		],
	},
];

const RiskDisclaimerPage = (
	_props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	return (
		<div className="relative">
			<Head>
				<title>Risk Disclaimer - AfriGold Hub</title>
				<meta
					name="description"
					content="Read the AfriGold Hub risk disclaimer covering mining operations, market exposure, regulatory risk, due diligence, and return uncertainty."
				/>
			</Head>
			<LegalPageSection
				label="Risk"
				title="Risk Disclaimer"
				description="Mining, gold markets, and private partnership arrangements carry real risk. This page outlines important limitations and considerations before relying on website information."
				lastUpdated="May 16, 2026"
				sections={sections}
				contactHref="/contact?reason=risk-disclosure"
				contactLabel="Discuss Risk Disclosure"
			/>
		</div>
	);
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});

export default RiskDisclaimerPage;
