import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FactoryIcon from "@mui/icons-material/Factory";
import LandscapeIcon from "@mui/icons-material/Landscape";
import MapIcon from "@mui/icons-material/Map";
import PinDropIcon from "@mui/icons-material/PinDrop";
import VerifiedIcon from "@mui/icons-material/Verified";

type MineLocation = {
	role?: string;
	country?: string;
	site?: string;
	region?: string;
	lat?: number;
	lng?: number;
	deposit_type?: string[];
	goldfield?: string;
	geology?: string;
	licence_authority?: string;
	regulatory_body?: string;
	status?: string;
	elevation_m?: number;
	notes?: string;
};

const galleryItems = [
	{
		src: "/media/site-extraction.jpeg",
		title: "Licensed pit extraction",
		label: "Mining",
		className: "md:col-span-2 md:row-span-2",
	},
	{
		src: "/media/gravity-processing.jpeg",
		title: "Gravity processing circuit",
		label: "Processing",
		className: "",
	},
	{
		src: "/media/smelting.jpeg",
		title: "On-site smelting",
		label: "Smelting",
		className: "",
	},
	{
		src: "/media/14.jpeg",
		title: "Field operations",
		label: "Site work",
		className: "",
	},
	{
		src: "/media/sale-distribution.png",
		title: "Documented distribution",
		label: "Sales",
		className: "",
	},
];

function googleMapSrc(location: MineLocation) {
	const query = encodeURIComponent(`${location.lat},${location.lng}`);
	return `https://www.google.com/maps?q=${query}&z=6&output=embed`;
}

export default function LocationsPageSection() {
	const { t } = useTranslation(["operations", "locations"]);
	const locations = t("operations:locations.places", {
		returnObjects: true,
	}) as MineLocation[];
	const [selectedIndex, setSelectedIndex] = useState(0);

	const selectedLocation = locations[selectedIndex] ?? locations[0];
	const activeSites = useMemo(
		() => Array.isArray(locations) ? locations.filter((location) => location.status === "active") : [],
		[locations]
	);

	return (
		<div className="relative overflow-hidden bg-surface-900">
			<section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background:
							"radial-gradient(ellipse 56% 42% at 74% 28%, rgba(243,189,39,0.13) 0%, transparent 72%)",
					}}
				/>
				<div className="relative z-10 max-w-[1180px] mx-auto px-6 md:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
					<div>
						<span className="inline-flex items-center gap-2 text-xs uppercase text-primary mb-4">
							<PinDropIcon fontSize="small" />
							{t("locations:tag")}
						</span>
						<h1 className="text-5xl md:text-7xl leading-none text-onSurface-100 max-w-[780px]">
							{t("locations:headline")}
						</h1>
						<p className="mt-7 text-base md:text-lg text-onSurface-100 font-light leading-[1.8] max-w-[680px]">
							{t("locations:description")}
						</p>
						<div className="mt-9 flex flex-wrap gap-3">
							<a
								href="#map"
								className="inline-flex items-center gap-2 text-[0.95rem] bg-primary text-surface-900 font-medium px-7 py-3.5 rounded border border-primary hover:bg-primary transition-all"
							>
								{t("locations:viewMap")}
								<MapIcon fontSize="small" />
							</a>
							<a
								href="#gallery"
								className="inline-flex items-center text-[0.95rem] text-primary font-light px-7 py-3.5 rounded border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all"
							>
								{t("locations:viewGallery")}
							</a>
						</div>
					</div>

					<div className="rounded-lg border border-[rgba(243,189,39,0.18)] bg-[#111111]/85 p-6 shimmer-y shimmer-subtle">
						<div className="grid grid-cols-3 gap-3">
							<div className="rounded border border-[rgba(243,189,39,0.12)] p-4">
								<div className="text-3xl text-primary">{locations.length}</div>
								<div className="text-xs text-onSurface-100 mt-1">
									{t("locations:mineLocations")}
								</div>
							</div>
							<div className="rounded border border-[rgba(243,189,39,0.12)] p-4">
								<div className="text-3xl text-primary">{activeSites.length}</div>
								<div className="text-xs text-onSurface-100 mt-1">{t("locations:activeSites")}</div>
							</div>
							<div className="rounded border border-[rgba(243,189,39,0.12)] p-4">
								<div className="text-3xl text-primary">0</div>
								<div className="text-xs text-onSurface-100 mt-1">
									{t("locations:zeroChemicalInputs")}
								</div>
							</div>
						</div>
						<div className="mt-6 rounded-lg overflow-hidden border border-primary/15 bg-black">
							<Image
								src="/img/gold-nugget-africa.png"
								alt="Gold nugget over Africa"
								width={900}
								height={620}
								className="w-full h-72 object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			<section id="map" className="relative py-16 md:py-24">
				<div className="max-w-[1180px] mx-auto px-6 md:px-8">
					<div className="mb-9 max-w-[760px]">
						<span className="inline-block text-xs uppercase text-primary mb-3">
                        {t("locations:map.tag")}
						</span>
						<h2 className="text-4xl md:text-5xl text-onSurface-100">
                        {t("locations:map.headline")}
						</h2>
						<p className="mt-4 text-onSurface-100 leading-[1.75] font-light">
                        {t("locations:map.description")}
						</p>
					</div>

					<div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-6 items-start">
						<div className="grid gap-3 max-h-[720px] overflow-y-auto pr-1">
							{locations.map((location, index) => {
								const isSelected = index === selectedIndex;

								return (
									<button
										key={`${location.country}-${location.site}`}
										type="button"
										onClick={() => setSelectedIndex(index)}
										className={`text-left rounded-lg border p-4 transition-all ${
											isSelected
												? "border-primary bg-primary/10"
												: "border-primary/10 bg-surface-900 hover:border-primary/50"
										}`}
									>
										<div className="flex items-start justify-between gap-3">
											<div>
												<div className="text-xs uppercase text-primary">
													{location.country}
												</div>
												<div className="mt-1 text-onSurface-100 font-medium">
													{location.site}
												</div>
											</div>
											<span className="rounded-full border border-primary/25 px-2 py-1 text-[0.7rem] uppercase text-primary">
												{location.status}
											</span>
										</div>
										<p className="mt-3 text-sm text-onSurface-100 leading-relaxed">
											{location.region}
										</p>
									</button>
								);
							})}
						</div>

						<div className="rounded-lg border border-primary/15 bg-surface-900 overflow-hidden shimmer-y shimmer-subtle">
							<div className="relative h-[360px] md:h-[520px] bg-surface-900/80">
								{selectedLocation && (
									<iframe
										title={`${selectedLocation.site} Google Map`}
										src={googleMapSrc(selectedLocation)}
										className="absolute inset-0 h-full w-full border-0 grayscale-[0.65] sepia-[0.25] contrast-[1.08] brightness-[0.72]"
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										allowFullScreen
									/>
								)}
								<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.08),rgba(5,5,5,0.2)),radial-gradient(ellipse_at_top_right,rgba(243,189,39,0.18),transparent_52%)]" />
							</div>

							{selectedLocation && (
								<div className="grid md:grid-cols-[1fr_0.85fr] gap-6 p-5 md:p-7 border-t border-primary/15">
									<div>
										<div className="flex items-center gap-2 text-primary text-xs uppercase mb-2">
											<FactoryIcon fontSize="small" />
											{selectedLocation.role ?? "operations"}
										</div>
										<h3 className="text-3xl text-onSurface-100">
											{selectedLocation.site}
										</h3>
										<p className="mt-3 text-sm text-onSurface-100 leading-[1.75]">
											{selectedLocation.notes}
										</p>
										<div className="mt-5 flex flex-wrap gap-2">
											{selectedLocation.deposit_type?.map((deposit) => (
												<span
													key={deposit}
													className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-onSurface-100"
												>
													{deposit}
												</span>
											))}
										</div>
									</div>

									<div className="grid gap-3">
										<div className="rounded border border-primary/15 p-4">
											<div className="flex items-center gap-2 text-primary text-xs uppercase">
												<LandscapeIcon fontSize="small" />
												{t("locations:goldfield")}
											</div>
											<p className="mt-2 text-sm text-onSurface-100">
												{selectedLocation.goldfield}
											</p>
										</div>
										<div className="rounded border border-primary/15 p-4">
											<div className="flex items-center gap-2 text-primary text-xs uppercase">
												<VerifiedIcon fontSize="small" />
												Licensing
											</div>
											<p className="mt-2 text-sm text-onSurface-100">
												{selectedLocation.licence_authority}
											</p>
											<p className="mt-1 text-xs text-onSurface-100">
												{selectedLocation.regulatory_body}
											</p>
										</div>
										<Link
											href={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lng}`}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center justify-center gap-2 rounded border border-primary/25 px-4 py-3 text-sm text-primary hover:bg-primary/10 transition-all"
										>
											Open in Google Maps
											<ArrowOutwardIcon fontSize="small" />
										</Link>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			<section id="gallery" className="py-16 md:py-24 bg-[#080808]">
				<div className="max-w-[1180px] mx-auto px-6 md:px-8">
					<div className="mb-9 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
						<div className="max-w-[720px]">
							<span className="inline-block text-xs uppercase text-primary mb-3">
								Field Gallery
							</span>
							<h2 className="text-4xl md:text-5xl text-onSurface-100">
								Inside the production network
							</h2>
							<p className="mt-4 text-onSurface-100 leading-[1.75] font-light">
								Operational imagery from extraction, gravity processing, smelting,
								and documented buyer handling.
							</p>
						</div>
						<Link
							href="/contact?reason=site-visit"
							className="inline-flex items-center justify-center gap-2 text-[0.95rem] bg-primary text-black font-medium px-7 py-3.5 rounded border border-primary hover:bg-[#E5C46A] transition-all"
						>
							Request Site Visit
							<ArrowOutwardIcon fontSize="small" />
						</Link>
					</div>

					<div className="grid md:grid-cols-4 auto-rows-[250px] gap-4">
						{galleryItems.map((item) => (
							<article
								key={item.src}
								className={`group relative overflow-hidden rounded-lg border border-primary/15 bg-[#111111] ${item.className}`}
							>
								<Image
									src={item.src}
									alt={item.title}
									fill
									sizes="(min-width: 768px) 25vw, 100vw"
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
								<div className="absolute left-4 right-4 bottom-4">
									<div className="text-xs uppercase text-primary mb-1">
										{item.label}
									</div>
									<h3 className="text-onSurface-100 font-medium">{item.title}</h3>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
