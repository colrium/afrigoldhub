// components/sections/AdvisoryBoard.tsx
"use client";

import { SectionTag } from "@/components/SectionTag";
import { FadeUp } from "@/components/animations/Fade";

const advisors = [
	{
		initials: "RK",
		title: "Mineral Economics",
		name: "Dr. Robert Kamau",
		description:
			"Former Director of Geological Survey of Kenya. 30+ years in mineral resource economics and African mining policy. PhD Mineral Economics, Colorado School of Mines. Advises on reserve assessment, production planning, and market strategy.",
	},
	{
		initials: "FA",
		title: "Investment Structuring",
		name: "Fatima Al-Rashid",
		description:
			"Managing Partner, Mena-Africa Capital Partners (Dubai). Structured over $400M in African natural resource investments across 12 countries. MBA, INSEAD. Advises on international investor agreements and cross-border payment structures.",
	},
	{
		initials: "PO",
		title: "Sustainability & ESG",
		name: "Prof. Patricia Otieno",
		description:
			"Professor of Environmental Science, University of Nairobi. Lead author on three UNEP reports on mercury-free artisanal gold mining in Sub-Saharan Africa. Advises on our NEMA compliance, water management, and community impact reporting.",
	},
];

export default function AdvisoryBoard() {
	return (
		<section className="bg-[#111111] py-24 border-t border-g15">
			<div className="max-w-6xl mx-auto px-8">
				<div className="text-center max-w-lg mx-auto mb-16">
					<SectionTag>Advisory Board</SectionTag>
					<h2 className="text-4xl lg:text-5xl tracking-tight mb-4">
						Guided by <em className="text-gold not-italic">deep sector expertise</em>
					</h2>
					<p className="text-sm text-muted font-light">
						Our advisory board brings external rigour to governance, investor relations,
						and technical standards.
					</p>
				</div>

				<div className="grid sm:grid-cols-3 gap-6">
					{advisors.map((advisor, idx) => (
						<FadeUp key={idx} delay={idx * 0.1}>
							<div className="bg-black border border-g15 rounded-2xl p-7 transition-all duration-300 hover:translate-y-[-4px] hover:border-gold/35">
								<div className="w-14 h-14 rounded-full bg-g08 border border-g15 flex items-center justify-center text-2xl font-bold text-gold mb-5">
									{advisor.initials}
								</div>
								<div className="text-xs tracking-widest uppercase text-gold mb-1">
									{advisor.title}
								</div>
								<h4 className="text-xl text-off-white mb-1">
									{advisor.name}
								</h4>
								<p className="text-xs text-muted leading-relaxed font-light">
									{advisor.description}
								</p>
							</div>
						</FadeUp>
					))}
				</div>
			</div>
		</section>
	);
}
