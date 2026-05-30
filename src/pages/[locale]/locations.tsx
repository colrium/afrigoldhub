import type { GetServerSideProps, NextPage } from "next";
import { LocationsPageSection, CtaBand } from "@/components/sections";
import { getI18nProps } from "@/lib/i18n";
import PageHead from "@/components/Head";

type PageProps = {
	// Add custom props here
};

const LocationsPage: NextPage<PageProps> = () => {
	return (
		<div className="relative">
			<PageHead pageName="locations" />
			<LocationsPageSection />
			<CtaBand />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const i18nProps = await getI18nProps(context, [
		"common",
		"meta",
		"operations",
		"metrics",
		"why",
		"history",
		"value",
		"invest",
		"compliance",
		"cta",
		"testimonials",
		"faq",
	]);

	if (!i18nProps) return { notFound: true };

	return { props: { ...i18nProps } };
};
export default LocationsPage;
