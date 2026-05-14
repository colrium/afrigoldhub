import { useTranslation } from "next-i18next/pages";
export default function ComplianceSection() {
	const { t } = useTranslation("common");
	const licences = t("compliance.licences", { returnObjects: true }) as {
		icon: string;
		title: string;
		issuer: string;
		description: string;
		ref: string;
		renewal: string;
	}[];
    return (
        
	<section className="bg-[#111111] py-24">
		<div className="max-w-6xl mx-auto px-8">
			<div className="max-w-[600px] mb-16">
				<span className="inline-block text-xs tracking-[0.14em] uppercase text-[#f3bd27] opacity-80 mb-3">
					{t("compliance.tag")}
				</span>
				<h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-[#F5F0E8] mb-4">
					{t("compliance.headline", {
						gold: (chunks: string) => (
							<em className="text-[#f3bd27] not-italic italic">{chunks}</em>
						),
					})}
				</h2>
				<p className="text-base text-[#faf5ec] font-light leading-relaxed">
					{t("compliance.description")}
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-4 mb-5">
				{licences.map((lic) => (
					<div
						key={lic.title}
						className="bg-[#111111] border border-[rgba(201,168,76,0.15)] rounded-xl p-7 transition-all hover:bg-[#1A1A1A] hover:border-[rgba(201,168,76,0.3)]"
					>
						<div className="flex items-start justify-between mb-4">
							<div className="w-11 h-11 bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] rounded-lg flex items-center justify-center text-xl">
								{lic.icon}
							</div>
							<span className="flex items-center gap-1.5 text-xs text-green-400">
								<span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
								{t("compliance.active")}
							</span>
						</div>
						<h4 className="font-serif text-lg text-[#F5F0E8] mb-1">{lic.title}</h4>
						<div className="text-xs text-[#f3bd27] mb-3">{lic.issuer}</div>
						<p className="text-xs text-[#faf5ec] leading-relaxed font-light">
							{lic.description}
						</p>
						<div className="mt-4 pt-4 border-t border-[rgba(201,168,76,0.1)] flex justify-between text-xs">
							<span className="text-[#faf5ec]">{lic.ref}</span>
							<span className="text-[#f3bd27]">{lic.renewal}</span>
						</div>
					</div>
				))}
			</div>

			<div className="bg-[#111111] border border-[rgba(201,168,76,0.15)] rounded-xl p-6 flex flex-col md:flex-row items-center gap-5">
				<div className="w-11 h-11 bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] rounded-lg flex items-center justify-center text-xl shrink-0">
					🏛️
				</div>
				<div>
					<div className="text-sm font-medium text-[#F5F0E8] mb-0.5">
						{t("compliance.cda.title")}
					</div>
					<div className="text-xs text-[#faf5ec] font-light leading-relaxed">
						{t("compliance.cda.description")}
					</div>
				</div>
				<span className="shrink-0 flex items-center gap-1.5 text-xs text-green-400 whitespace-nowrap">
					<span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
					{t("compliance.cda.status")}
				</span>
			</div>
		</div>
        </section>
    );
}
