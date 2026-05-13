// components/sections/HistoryTimeline.tsx
"use client";

import { SectionTag } from "@/components/SectionTag";
import { FadeUp } from "@/components/animations/Fade";

const timelineEvents = [
	{
		year: "2013",
		title: "First boots on the West African Goldfields",
		description:
			"Founding members begin independent geological surveys across West African region, identifying alluvial gold zones with strong commercial potential along the regional gold corridor.",
		side: "left",
	},
	{
		year: "2015",
		title: "First Mining Licence secured",
		description:
			"AfriGold Hub secures its inaugural Mining Licence (ML) under Regional Mining Act, covering 42 hectares in the West African Goldfields. NEMA environmental assessment passed without conditions.",
		side: "right",
	},
	{
		year: "2017",
		title: "Gravity processing plant commissioned",
		description:
			"Our on-site gravity concentration plant — the first NEMA-certified chemical-free facility in West African region — begins production. Monthly output reaches 80 kg refined gold in year one.",
		side: "left",
	},
	{
		year: "2019",
		title: "First external investment partnership",
		description:
			"AfriGold Hub brings on its first external investment partner — a Nairobi-based commodity fund — under a formal structured equity agreement. Monthly output surpasses 150 kg.",
		side: "right",
	},
	{
		year: "2021",
		title: "Plant expansion & licence renewal",
		description:
			"Sluice and spiral concentrator array doubled. Mining licence renewed and expanded to 78 hectares. Monthly output reaches 200 kg. Local workforce grows to 30+ employees.",
		side: "left",
	},
	{
		year: "2023",
		title: "AfriGold Hub brand launched",
		description:
			"The holding entity is formally restructured and rebranded as AfriGold Hub to reflect our platform ambitions. A new investor portal, monthly reporting dashboard, and digital partnership agreements are introduced.",
		side: "right",
	},
	{
		year: "2025",
		title: "~266 kg / month. Seeking anchor partners.",
		description:
			"Monthly output stabilised at ~266 kg refined gold. Gross revenue exceeds $572K/month. AfriGold Hub is now seeking strategic and anchor partners to fund the next expansion phase — targeting 400 kg/month by 2027.",
		side: "left",
		isCurrent: true,
	},
];

export default function HistoryTimeline() {
	return (
		<section className="bg-black py-28 relative">
			<div className="max-w-5xl mx-auto px-8">
				<div className="text-center max-w-xl mx-auto mb-20">
					<SectionTag>Our Journey</SectionTag>
					<h2 className="font-serif text-4xl lg:text-5xl tracking-tight">
						A decade on the{" "}
						<em className="text-gold not-italic">West African Goldfields</em>
					</h2>
				</div>

				<div className="relative">
					{/* Timeline center line */}
					<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#8B6510] to-transparent -translate-x-1/2" />

					{timelineEvents.map((event, idx) => (
						<div
							key={idx}
							className={`grid md:grid-cols-2 gap-8 mb-16 ${event.side === "right" ? "" : ""}`}
						>
							{event.side === "left" ? (
								<>
									<div className="md:text-right md:pr-12 flex md:flex-row-reverse items-start gap-4">
										<FadeUp delay={idx * 0.1}>
											<div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-gold border-3 border-black shadow-[0_0_0_2px_rgba(201,168,76,0.4),0_0_16px_rgba(201,168,76,0.35)]" />
											<div>
												<div className="text-xs tracking-widest uppercase text-gold mb-2">
													{event.year}
												</div>
												<h4 className="font-serif text-xl text-off-white mb-2">
													{event.title}
												</h4>
												<p className="text-sm text-muted leading-relaxed font-light">
													{event.description}
												</p>
											</div>
										</FadeUp>
									</div>
									<div className="hidden md:block" />
								</>
							) : (
								<>
									<div className="hidden md:block" />
									<div className="md:pl-12 flex items-start gap-4">
										<FadeUp delay={idx * 0.1}>
											<div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-gold border-3 border-black shadow-[0_0_0_2px_rgba(201,168,76,0.4),0_0_16px_rgba(201,168,76,0.35)]" />
											<div>
												<div className="text-xs tracking-widest uppercase text-gold mb-2">
													{event.year}
												</div>
												<h4 className="font-serif text-xl text-off-white mb-2">
													{event.title}
												</h4>
												<p className="text-sm text-muted leading-relaxed font-light">
													{event.description}
												</p>
											</div>
										</FadeUp>
									</div>
								</>
							)}
						</div>
					))}

					{/* Current year badge */}
					<FadeUp>
						<div className="grid md:grid-cols-2 gap-8">
							<div className="md:text-right md:pr-12 flex md:flex-row-reverse items-start gap-4">
								<div>
									<div className="inline-flex items-center gap-2 bg-g08 border border-g15 rounded-full px-3 py-1 mb-2">
										<span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
										<span className="text-xs text-gold tracking-widest uppercase">
											2025 — Now
										</span>
									</div>
									<h4 className="font-serif text-xl text-off-white mb-2">
										~266 kg / month. Seeking anchor partners.
									</h4>
									<p className="text-sm text-muted leading-relaxed font-light">
										Monthly output stabilised at ~266 kg refined gold. Gross
										revenue exceeds $572K/month. AfriGold Hub is now seeking
										strategic and anchor partners to fund the next expansion
										phase — targeting 400 kg/month by 2027.
									</p>
								</div>
							</div>
							<div className="md:pl-12 hidden md:block" />
						</div>
					</FadeUp>
				</div>
			</div>
		</section>
	);
}
