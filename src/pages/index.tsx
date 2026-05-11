import Link from 'next/link'
import { useRouter } from 'next/router'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from "next/head";
import { useTranslation, Trans } from 'next-i18next/pages'
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations'
import { HeroSection, MetricsSection } from "@/components/sections";


type Props = {
  // Add custom props here
}

const Homepage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const router = useRouter()
  const { t, i18n } = useTranslation('common')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const clientSideLanguageChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale)
  }

  const changeTo = router.locale === 'en' ? 'de' : 'en'
  // const changeTo = i18n.resolvedLanguage === 'en' ? 'de' : 'en'

  return (
		<>
			<Head>
				<title>{t("site.title")}</title>
          </Head>
          
          
          <HeroSection />
          <MetricsSection />
          {/* <WhySection />
          <OperationsSection />
          <InvestmentSection />
          <TestimonialsSection />
          <FaqSection />
          <CtaBand /> */}
		</>
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
