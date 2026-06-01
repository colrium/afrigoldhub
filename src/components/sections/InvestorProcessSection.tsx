import { useTranslation } from "@/hooks";

type ProcessStep = {
	step: number;
	title: string;
	description: string;
};

export default function InvestorProcessSection() {
	const { t } = useTranslation(["invest"]);
	const items = t("invest:process.items", { returnObjects: true }) as ProcessStep[];

	return (
		<section className="bg-surface-900 py-24">
			<div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[0.78fr_1.22fr] gap-12">
				<div>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("invest:process.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("invest:process.headline")}
					</h2>
					<p className="text-base text-onSurface-100 leading-[1.75] font-light">
						{t("invest:process.description")}
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-5">
					{items.map((item) => (
						<article
							key={item.step}
							className="rounded-lg border border-surface-800/50 bg-surface-900 p-6"
						>
							<div className="w-11 h-11 rounded-full border border-primary/30 text-primary flex items-center justify-center text-xl mb-5">
								{item.step}
							</div>
							<h3 className="text-onSurface-100 font-medium mb-2">{item.title}</h3>
							<p className="text-sm text-onSurface-100 leading-relaxed">
								{item.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
