import { useTranslation } from "@/hooks";

type Stat = {
	value: string;
	label: string;
	prefix?: string;
};

export default function OperationsOverviewSection() {
	const { t } = useTranslation(["operations"]);
	const stats = t("operations:overview.stats", { returnObjects: true }) as Stat[];

	return (
		<section className="bg-surface-900 py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-12 items-start">
					<div>
						<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
							{t("operations:overview.tag")}
						</span>
						<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
							{t("operations:overview.headline")}
						</h2>
						<p className="text-base text-onSurface-100 leading-[1.75] font-light">
							{t("operations:overview.description")}
						</p>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{stats.map((stat) => (
							<div
								key={stat.label}
								className="rounded-lg border border-surface-800/50 bg-surface-900 p-5"
							>
								<div className="text-3xl text-primary leading-none">
									{stat.prefix}
									{stat.value}
								</div>
								<div className="text-sm text-onSurface-100 mt-3 leading-snug">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
