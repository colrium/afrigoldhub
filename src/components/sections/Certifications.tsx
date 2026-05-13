// components/sections/Certifications.tsx
"use client";

import { SectionTag } from "@/components/SectionTag";
import { FadeUp } from "@/components/animations/Fade";

const certifications = [
	{
		icon: "🌱",
		title: "NEMA EIA Certificate",
		subtitle: "National Environment Management Authority",
		description:
			"Environmental Impact Assessment licence covering our gravity concentration facility. Annual inspection passed without conditions for five consecutive years. Valid to 2026.",
		certNo: "NEMA/EIA/2019/047",
		renewal: "2026",
	},
	{
		icon: "📜",
		title: "Mining Licence (ML)",
		subtitle: "Mines & Geology Dept — Ministry of Mining",
		description:
			"Active Mining Licence under Kenya's Mining Act 2016 covering 78 hectares in the West African Goldfields region. Includes right to extract, process, and sell gold bullion.",
		certNo: "ML No: MG/2016/0042",
		renewal: "2028",
	},
	{
		icon: "🏦",
		title: "KRA Precious Metals Licence",
		subtitle: "Kenya Revenue Authority",
		description:
			"Licensed dealer in precious metals, registered with the KRA under the Customs & Excise Act. All gold sales are receipted and declared. Full royalty compliance.",
		certNo: "PIN: P051234567M",
		renewal: "Annual renewal",
	},
	{
		icon: "🔬",
		title: "KEBS Assay Accreditation",
		subtitle: "Kenya Bureau of Standards",
		description:
			"Our on-site and third-party assay processes are accredited by KEBS to KS ISO 11426. Every bar receives an independent purity certificate before sale. 99.5% minimum purity standard.",
		certNo: "Accreditation: KEBS/2021/AU",
		renewal: "2026",
	},
	{
		icon: "💧",
		title: "WRA Water Abstraction Permit",
		subtitle: "Water Resources Authority",
		description:
			"Permit to abstract and recycle water for gravity concentration processing. Full water management plan in place. 92% water recycling rate across our sluice and spiral system.",
		certNo: "Permit: WRA/MIG/2020/018",
		renewal: "2025",
	},
	{
		icon: "🎓",
		title: "NITA Skills Certification",
		subtitle: "National Industrial Training Authority",
		description:
			"All our mine operators and processing technicians hold NITA-certified occupational credentials. Ongoing vocational training programme for community employees at our field site.",
		certNo: "Programme: NITA/MIN/2022",
		renewal: "Annual renewal",
	},
];

export default function Certifications() {
	return (
		<section className="bg-black py-24 border-t border-g15">
			<div className="max-w-6xl mx-auto px-8">
				<div className="text-center max-w-xl mx-auto mb-16">
					<SectionTag>Certifications &amp; Compliance</SectionTag>
					<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-4">
						Every credential,{" "}
						<em className="text-gold not-italic">verified and current</em>
					</h2>
					<p className="text-sm text-muted font-light">
						We operate under full Kenyan regulatory compliance. All documents are
						available to investors during due diligence.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{certifications.map((cert, idx) => (
						<FadeUp key={idx} delay={idx * 0.05}>
							<div className="bg-[#111111] border border-g15 rounded-xl p-7 transition-all duration-300 hover:bg-[#1A1A1A] hover:border-gold/30">
								<div className="flex items-start justify-between mb-4">
									<div className="w-11 h-11 bg-g08 border border-g15 rounded-lg flex items-center justify-center text-xl">
										{cert.icon}
									</div>
									<span className="flex items-center gap-1.5 text-xs text-green-400">
										<span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
										Active
									</span>
								</div>
								<h4 className="font-serif text-lg text-off-white mb-1">
									{cert.title}
								</h4>
								<div className="text-xs text-gold mb-3">{cert.subtitle}</div>
								<p className="text-xs text-muted leading-relaxed font-light">
									{cert.description}
								</p>
								<div className="mt-4 pt-4 border-t border-g10 flex justify-between text-xs">
									<span className="text-muted">{cert.certNo}</span>
									<span className="text-gold">Renewal: {cert.renewal}</span>
								</div>
							</div>
						</FadeUp>
					))}
				</div>

				{/* CDA Note */}
				<FadeUp>
					<div className="mt-5 bg-[#111111] border border-g15 rounded-xl p-6 flex flex-col md:flex-row items-center gap-5">
						<div className="w-11 h-11 shrink-0 bg-g08 border border-g15 rounded-lg flex items-center justify-center text-xl">
							🏛️
						</div>
						<div>
							<div className="text-sm font-medium text-off-white mb-0.5">
								Community Development Agreement (CDA)
							</div>
							<div className="text-xs text-muted font-light leading-relaxed">
								Formally registered with the Regional Community Government under
								Section 134 of the Mining Act. Commits 3% of monthly net profits to
								community infrastructure, education, and water access projects in
								our operational region.
							</div>
						</div>
						<span className="shrink-0 flex items-center gap-1.5 text-xs text-green-400 whitespace-nowrap">
							<span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
							CDA Active · 2024
						</span>
					</div>
				</FadeUp>
			</div>
		</section>
	);
}
