import { useTranslation } from "@/hooks";

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
	const { t } = useTranslation([  "value" ]);
	const stages = t("value:stages.items", { returnObjects: true }) as Stage[];

	return (
		<section className="bg-surface-900 py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="text-center max-w-[700px] mx-auto mb-14">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("value:stages.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("value:stages.headline")}
					</h2>
					<p className="text-base text-onSurface-200 leading-[1.75] font-light">
						{t("value:stages.description")}
					</p>
				</div>
				<div className="grid gap-5">
					{stages.map((stage) => (
						<article
							key={stage.id}
							className="grid lg:grid-cols-[6rem_1fr_0.85fr] gap-6 rounded-lg border border-surface-800/50 bg-surface-900 p-6"
						>
							<div
								className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-onSurface-100"
								style={{ backgroundColor: stage.color }}
							>
								{stage.stage}
							</div>
							<div>
								<div className="text-xs uppercase tracking-[0.14em] text-primary mb-2">
									{stage.phase}
								</div>
								<h3 className="text-2xl text-onSurface-100 mb-3">
									{stage.title}
								</h3>
								<p className="text-sm text-onSurface-200 leading-relaxed mb-4">
									{stage.short_description}
								</p>
								<p className="text-sm text-primary leading-relaxed">
									{stage.value_added}
								</p>
							</div>
							<div className="rounded border border-surface-800/50 p-5">
								<ul className="grid gap-2 mb-5">
									{stage.outputs.map((output) => (
										<li key={output} className="text-sm text-onSurface-100 leading-relaxed flex items-start gap-2">
											{output}
										</li>
									))}
								</ul>
								<div className="border-t border-[rgba(201,168,76,0.08)] pt-4 text-xs text-onSurface-200 leading-relaxed">
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
