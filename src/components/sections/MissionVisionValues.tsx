// components/sections/MissionVisionValues.tsx
"use client";

import { SectionTag } from "@/components/SectionTag";
import { FadeUp } from "@/components/animations/Fade";

const values = [
	{
		icon: "🔍",
		title: "Radical Transparency",
		description:
			"Every gram is weighed, every sale receipted, every profit documented. Our investors receive monthly audited reports — no exceptions.",
	},
	{
		icon: "🌱",
		title: "Environmental Stewardship",
		description:
			"Gravity concentration means zero mercury, zero cyanide. Our NEMA-certified process protects the regional river basin and the communities that depend on it.",
	},
	{
		icon: "🤝",
		title: "Community First",
		description:
			"Over 30 direct jobs in West African region. We prioritise local procurement, skills transfer, and investment back into the communities on whose land we operate.",
	},
	{
		icon: "📐",
		title: "Structural Integrity",
		description:
			"Formal partnership agreements, escrow-protected capital, and legally binding equity structures. We built the kind of platform we would want to invest in ourselves.",
	},
	{
		icon: "🏆",
		title: "Operational Excellence",
		description:
			"Consistent 88%+ net margins through disciplined cost management, preventive maintenance, and a process optimised over a decade of field experience.",
	},
	{
		icon: "🌍",
		title: "Pan-African Ambition",
		description:
			"We are building the blueprint on the African continent first — then taking it to the broader African mineral belt. AfriGold Hub is a platform, not just a mine.",
	},
];

export default function MissionVisionValues() {
	return (
		<section className="bg-[#111111] py-24">
			<div className="max-w-6xl mx-auto px-8">
				<div className="text-center max-w-xl mx-auto mb-16">
					<SectionTag>What Drives Us</SectionTag>
					<h2 className="text-4xl lg:text-5xl tracking-tight">
						Mission, Vision &amp; <em className="text-gold not-italic">Values</em>
					</h2>
				</div>

				{/* Mission + Vision */}
				<div className="grid md:grid-cols-2 gap-6 mb-8">
					<FadeUp className="shimmer-top relative bg-black border border-g15 rounded-2xl p-9 overflow-hidden">
						<div className="text-xs tracking-widest uppercase text-gold mb-4">
							Our Mission
						</div>
						<h3 className="text-2xl text-off-white mb-4">
							To make African artisanal gold accessible, profitable, and trustworthy
							for investors worldwide.
						</h3>
						<p className="text-sm text-muted leading-relaxed font-light">
							We do this by combining licensed operations, chemical-free gravity
							processing, rigorous financial reporting, and structured partnership
							agreements that protect every party — from pit to payment.
						</p>
					</FadeUp>

					<FadeUp className="shimmer-top relative bg-black border border-g15 rounded-2xl p-9 overflow-hidden">
						<div className="text-xs tracking-widest uppercase text-gold mb-4">
							Our Vision
						</div>
						<h3 className="text-2xl text-off-white mb-4">
							To become East Africa's leading transparent gold investment platform by
							2030.
						</h3>
						<p className="text-sm text-muted leading-relaxed font-light">
							We envision a network of NEMA-certified, investor-backed gravity
							processing facilities across Africa's mineral-rich corridors — creating
							employment, generating returns, and setting the continental standard for
							responsible artisanal gold.
						</p>
					</FadeUp>
				</div>

				{/* Values Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{values.map((value, idx) => (
						<FadeUp key={idx} delay={idx * 0.05}>
							<div className="bg-black2 border border-g15 rounded-xl p-7 transition-all duration-300 hover:bg-[#1A1A1A] hover:border-gold/30 cursor-default">
								<div className="text-2xl mb-4">{value.icon}</div>
								<h4 className="text-lg text-off-white mb-2">
									{value.title}
								</h4>
								<p className="text-sm text-muted leading-relaxed font-light">
									{value.description}
								</p>
							</div>
						</FadeUp>
					))}
				</div>
			</div>
		</section>
	);
}
