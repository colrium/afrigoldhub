import Link from "next/link";
import { useRouter } from "next/router";
import type { GetServerSideProps, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
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
import ComplianceMinimal from "@/components/sections/ComplianceMinimal";
import { getI18nProps, getStaticPaths, makeStaticProps } from "@/lib/i18n";

interface HomePageProps {
	// Add any additional props fetched server-side here
}


const HomePage: NextPage<HomePageProps> = () => {
	const { t } = useTranslation(["meta", "home", "common"]);

	return (
		<div className="relative ">
			<Head>
				<title>{t("meta:pages.home.title")}</title>
			</Head>

			<HeroSection />

			{/* <OperationsSection />
			<WhySection />
			<ComplianceMinimal />

			<div className="p-2 md:p-8">
				<MetricsSection />
			</div>

			<InvestmentSection />
			<TestimonialsSection />
			<FaqSection />
			<CtaBand /> */}
		</div>
	);
};
export default HomePage;



// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
/* const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
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
}); */



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
]); 
export { getStaticPaths, getStaticProps };
*/
export const getServerSideProps: GetServerSideProps = async (context) => {
	const i18nProps = await getI18nProps(context, ["common", "meta",  "home", "faq", "testimonials", "invest", "operations", "why", "compliance", "cta"]);

	if (!i18nProps) return { notFound: true };

	return { props: { ...i18nProps } };
};
// 