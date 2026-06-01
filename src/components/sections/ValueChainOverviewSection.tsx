import { useTranslation } from "@/hooks";

type Pillar = {
	id: string;
	label: string;
	color: string;
	stages: string[];
};

export default function ValueChainOverviewSection() {
	const { t } = useTranslation(["common", "value"]);
	const pillars = t("value:overview.pillars", {
		returnObjects: true,
	}) as Pillar[];

	return (
		<section className="bg-surface-900 py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="max-w-[720px] mb-14">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("value:overview.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("value:overview.headline")}
					</h2>
					<p className="text-base text-onSurface-200 leading-[1.75] font-light">
						{t("value:overview.description")}
					</p>
				</div>
				<div className="grid lg:grid-cols-3 gap-6">
					{pillars.map((pillar) => (
						<article
							key={pillar.id}
							className="rounded-lg border border-surface-800/50 bg-surface-900 p-7"
							style={{
								boxShadow: `inset 0 3px 0 ${pillar.color}`,
							}}
						>
							<h3 className="text-2xl text-onSurface-100 mb-6">
								{pillar.label}
							</h3>
							<ul className="grid gap-3">
								{pillar.stages.map((stage) => (
									<li
										key={stage}
										className="text-sm text-onSurface-100 border-t border-[rgba(201,168,76,0.08)] pt-3"
									>
										{stage}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
