import { useTranslation } from "next-i18next/pages";
export default function ComplianceSection() {
	const { t } = useTranslation([ "common", "compliance" ]);
	const licences = t("compliance:items", { returnObjects: true }) as {
		icon: string;
		title: string;
		issuer: string;
		description: string;
		ref: string;
		renewal: string;
    }[];
    console.log(licences);
    return (
        
	<section className="bg-surface-900 py-24">
		<div className="max-w-6xl mx-auto px-8">
			<div className="max-w-150 mb-16">
				<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
					{t("compliance:tag")}
				</span>
				<h2 className="text-4xl lg:text-5xl tracking-tight text-onSurface-100 mb-4">
					{t("compliance:headline", {
						gold: (chunks: string) => (
							<em className="text-primary italic">{chunks}</em>
						),
					})}
				</h2>
				<p className="text-base text-onSurface-200 font-light leading-relaxed">
					{t("compliance:description")}
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-4 mb-5">
				{Array.isArray(licences) && licences.map((lic) => (
					<div
						key={lic.title}
						className="bg-surface-800 border border-surface-600 rounded-xl p-7 transition-all hover:bg-surface-900 hover:border-surface-400"
					>
						<div className="flex items-start justify-between mb-4">
							<div className="w-11 h-11 bg-surface-600 border border-surface-400 rounded-lg flex items-center justify-center text-xl">
								{lic.icon}
							</div>
							<span className="flex items-center gap-1.5 text-xs text-green-400">
								<span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
								{t("common:misc.active")}
							</span>
						</div>
						<h4 className="text-lg text-onSurface-100 mb-1">{lic.title}</h4>
						<div className="text-xs text-primary mb-3">{lic.issuer}</div>
						<p className="text-xs text-onSurface-200 leading-relaxed font-light">
							{lic.description}
						</p>
						<div className="mt-4 pt-4 border-t border-surface-600 flex justify-between text-xs">
							<span className="text-onSurface-200">{lic.ref}</span>
							<span className="text-primary">{lic.renewal}</span>
						</div>
					</div>
				))}
			</div>

			<div className="bg-surface-800 border border-surface-600 rounded-xl p-6 flex flex-col md:flex-row items-center gap-5">
				<div className="w-11 h-11 bg-surface-600 border border-surface-400 rounded-lg flex items-center justify-center text-xl shrink-0">
					🏛️
				</div>
				<div>
					<div className="text-sm font-medium text-onSurface-100 mb-0.5">
						{t("compliance:cda.title")}
					</div>
					<div className="text-xs text-onSurface-200 font-light leading-relaxed">
						{t("compliance:cda.description")}
					</div>
				</div>
				<span className="shrink-0 flex items-center gap-1.5 text-xs text-green-400 whitespace-nowrap">
					<span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
					{t("compliance:cda.status")}
				</span>
			</div>
		</div>
        </section>
    );
}
