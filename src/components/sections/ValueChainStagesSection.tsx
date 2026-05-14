import { useTranslation } from "next-i18next/pages";

type Stage = {
	id: string;
	stage: number;
	phase: string;
	title: string;
	color: string;
	short_description: string;
	value_added: string;
	outputs: string[];
	cost_centre: string;
};

export default function ValueChainStagesSection() {
	const { t } = useTranslation("common");
	const stages = t("value_chain.stages.items", { returnObjects: true }) as Stage[];

	return (
		<section className="bg-[#0A0A0A] py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="text-center max-w-[700px] mx-auto mb-14">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("value_chain.stages.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("value_chain.stages.headline")}
					</h2>
					<p className="text-base text-[#faf5ec] leading-[1.75] font-light">
						{t("value_chain.stages.description")}
					</p>
				</div>
				<div className="grid gap-5">
					{stages.map((stage) => (
						<article
							key={stage.id}
							className="grid lg:grid-cols-[6rem_1fr_0.85fr] gap-6 rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#111111] p-6"
						>
							<div
								className="w-16 h-16 rounded-full flex items-center justify-center font-serif text-2xl text-onSurface-100"
								style={{ backgroundColor: stage.color }}
							>
								{stage.stage}
							</div>
							<div>
								<div className="text-xs uppercase tracking-[0.14em] text-primary mb-2">
									{stage.phase}
								</div>
								<h3 className="font-serif text-2xl text-onSurface-100 mb-3">
									{stage.title}
								</h3>
								<p className="text-sm text-[#faf5ec] leading-relaxed mb-4">
									{stage.short_description}
								</p>
								<p className="text-sm text-primary leading-relaxed">
									{stage.value_added}
								</p>
							</div>
							<div className="rounded border border-[rgba(201,168,76,0.1)] p-5">
								<ul className="grid gap-2 mb-5">
									{stage.outputs.map((output) => (
										<li key={output} className="text-sm text-[#faf5ec]">
											{output}
										</li>
									))}
								</ul>
								<div className="border-t border-[rgba(201,168,76,0.08)] pt-4 text-xs text-[#faf5ec] leading-relaxed">
									{stage.cost_centre}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
