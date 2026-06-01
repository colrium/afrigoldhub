import Link from "next/link";
import { useTranslation } from "@/hooks";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PinDropIcon from "@mui/icons-material/PinDrop";

type MineLocation = {
	role?: string;
	country?: string;
	site?: string;
	region?: string;
	goldfield?: string;
	status?: string;
	notes?: string;
};

export default function OperationsNetworkSection() {
	const { t } = useTranslation(["operations"]);
	const countries = t("operations:locations.countries", {
		returnObjects: true,
	}) as string[];
	const locations = t("operations:locations.places", {
		returnObjects: true,
	}) as MineLocation[];
	const featuredLocations = Array.isArray(locations) ? locations.slice(0, 4) : [];

	return (
		<section id="locations" className="bg-surface-900 py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-12 items-start">
					<div>
						<span className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
							<PinDropIcon fontSize="small" />
							{t("operations:network.tag")}
						</span>
						<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
							{t("operations:network.headline")}
						</h2>
						<p className="text-base text-onSurface-100 leading-[1.75] font-light">
							{t("operations:network.description")}
						</p>
						<div className="mt-7 flex flex-wrap gap-2">
							{countries.map((country) => (
								<span
									key={country}
									className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-onSurface-100"
								>
									{country}
								</span>
							))}
						</div>
						<Link
							href={t("operations:network.cta.href")}
							className="mt-8 inline-flex items-center gap-2 text-primary font-light border border-[rgba(201,168,76,0.18)] hover:border-primary hover:bg-[rgba(201,168,76,0.06)] transition-all rounded px-5 py-3"
						>
							{t("operations:network.cta.label")}
							<ArrowOutwardIcon fontSize="small" />
						</Link>
					</div>
					<div className="grid md:grid-cols-2 gap-5">
						{featuredLocations.map((location) => (
							<article
								key={`${location.country}-${location.site}`}
								className="rounded-lg border border-surface-800/50 bg-surface-900 p-6"
							>
								<div className="flex items-start justify-between gap-3 mb-4">
									<div>
										<div className="text-xs tracking-[0.14em] uppercase text-primary">
											{location.country}
										</div>
										<h3 className="text-xl text-onSurface-100 mt-1">
											{location.site}
										</h3>
									</div>
									<span className="rounded-full border border-primary/25 px-2 py-1 text-[0.68rem] uppercase text-primary">
										{location.status}
									</span>
								</div>
								<p className="text-sm text-onSurface-100 leading-relaxed mb-4">
									{location.region}
								</p>
								<div className="text-xs uppercase tracking-[0.12em] text-primary mb-2">
									{t("operations:network.goldfield_label")}
								</div>
								<p className="text-sm text-onSurface-100 leading-relaxed">
									{location.goldfield}
								</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
