import Link from "next/link";
import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import Head from "next/head";
import { useTranslation, Trans } from "next-i18next/pages";
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
import { getStaticPaths, makeStaticProps } from "@/lib/getStatic";
import ComplianceMinimal from "@/components/sections/ComplianceMinimal";

type Props = {
	// Add custom props here
};

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { t } = useTranslation(["meta", "home", "common"]);
    const locales = t("common:locales", { returnObjects: true }) as {
		code: string;
		label: string;
		flag: string;
	}[];
	console.log("Available home locales:", locales);
	return (
		<div className="relative ">
			<Head>
				<title>{t("meta:pages.home.title")}</title>
			</Head>

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

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
 const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", [
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
		])),
	},
});

export default Homepage;

/* const getStaticProps = makeStaticProps([
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
]); */
export { getStaticPaths,  getStaticProps };