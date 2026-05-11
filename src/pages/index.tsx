import Link from 'next/link'
import { useRouter } from 'next/router'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from "next/head";
import { useTranslation, Trans } from 'next-i18next/pages'
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations'
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


type Props = {
  // Add custom props here
}

const Homepage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation('common')


  return (
		<div className="relative ">
			<Head>
				<title>{t("site.title")}</title>
			</Head>
			
			<HeroSection />
			<div className="p-2 md:p-8">
				<MetricsSection />
			</div>

			<WhySection />
			<OperationsSection />
			<InvestmentSection />
			<TestimonialsSection />
			<FaqSection />
			<CtaBand />
		</div>
  );
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})

export default Homepage
