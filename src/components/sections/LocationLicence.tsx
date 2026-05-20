// components/sections/LocationLicence.tsx
"use client";

import { SectionTag } from "@/components/SectionTag";
import { FadeLeft, FadeRight } from "@/components/animations/Fade";

const licenceItems = [
	{
		icon: "📜",
		title: "Mining Licence (ML)",
		description:
			"Active Mining Licence issued under Regional Mining Act by the Regional Ministry of Mining. Coverage: 78 hectares, West African Goldfields. Renewal: 2028.",
	},
	{
		icon: "🌱",
		title: "NEMA EIA Certificate",
		description:
			"Current NEMA Environmental Impact Assessment certificate for our gravity concentration facility. Audit passed without conditions in 2023.",
	},
	{
		icon: "🏛️",
		title: "Regional Mines & Geology Department",
		description:
			"Registered and in good standing with the Regional Directorate of Mines. Community Development Agreement in place with Regional Community Government.",
	},
	{
		icon: "🏦",
		title: "Licensed Precious Metals Buyer",
		description:
			"All gold sold through government-registered and licensed precious metals dealers across Kenya, with full export documentation and chain of custody records per KRA requirements.",
	},
];

export default function LocationLicence() {
	return (
		<section className="bg-black py-24">
			<div className="max-w-6xl mx-auto px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Map */}
					<FadeLeft>
						<div className="relative shimmer-top bg-[#111111] border border-g15 rounded-2xl overflow-hidden aspect-[4/3]">
							<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8">
								{/* <AfricaMap className="w-48 opacity-60" /> */}
								<div className="text-center">
									<div className="text-xs text-gold tracking-widest uppercase mb-1">
										Mining Site
									</div>
									<div className="text-lg text-off-white">
										West African Region
									</div>
									<div className="text-xs text-muted mt-1">
										1°4'S, 34°28'E — West African Goldfields
									</div>
								</div>
							</div>
						</div>
					</FadeLeft>

					{/* Licence Details */}
					<FadeRight>
						<SectionTag>Location &amp; Licensing</SectionTag>
						<h2 className="text-4xl tracking-tight mb-6">
							Rooted in <em className="text-gold not-italic">West African region</em>
						</h2>
						<p className="text-base text-muted leading-relaxed font-light mb-8">
							The West African Goldfields in West African Region is Africa's most
							historically productive artisanal gold district, with recorded
							extraction dating back to the 1930s. Our licensed acreage sits at the
							heart of the most concentrated mineralisation zone.
						</p>

						<div className="space-y-4">
							{licenceItems.map((item, idx) => (
								<div
									key={idx}
									className="flex items-start gap-4 p-4 bg-[#111111] border border-g15 rounded-xl"
								>
									<div className="w-9 h-9 shrink-0 bg-g08 border border-g15 rounded-lg flex items-center justify-center text-base">
										{item.icon}
									</div>
									<div>
										<div className="text-sm font-medium text-off-white mb-0.5">
											{item.title}
										</div>
										<div className="text-xs text-muted">{item.description}</div>
									</div>
								</div>
							))}
						</div>
					</FadeRight>
				</div>
			</div>
		</section>
	);
}
