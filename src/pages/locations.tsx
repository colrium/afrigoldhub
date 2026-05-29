import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import { LocationsPageSection, CtaBand } from "@/components/sections";

type Props = {
	// Add custom props here
};

const LocationsPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="relative">
			<Head>
				<title>Locations - AfriGold Hub</title>
				<meta
					name="description"
					content="Explore AfriGold Hub mine locations, operations sites, Google Maps coverage, and field gallery across Africa."
				/>
			</Head>
			<LocationsPageSection />
			<CtaBand />
		</div>
	);
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});

export default LocationsPage;
