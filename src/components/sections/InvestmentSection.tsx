import Link from "next/link";
import { useTranslation } from "next-i18next/pages";
type Tier = {
	tier: string;
	amount: string;
	roi: string;
	roiPrefix?: string;
	featured?: boolean;
	cta: string;
	ctaStyle: string;
	features: string[];
};
export default function InvestmentSection() {
	const { t } = useTranslation(["common", "invest"]);
	const tiers = t("invest:tiers.items", { returnObjects: true }) as Tier[];
	return (
		<section id="invest" className="py-28">
			<div className="max-w-285 mx-auto px-8">
				<div className="text-center mb-16">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("invest:hero.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("invest:hero.headline")}
					</h2>
					<p className="text-base text-onSurface-200 leading-[1.75] font-light max-w-140 mx-auto">
						{t("invest:hero.description")}
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{tiers.map((tier) => (
						<div
							key={tier.tier}
							className={`relative rounded-2xl p-10 border transition-all
									hover:-translate-y-1 ${
										tier.featured
											? "border-primary"
											: "border-surface-900 bg-surface-900 hover:border-primary/10"
									}`}
							style={
								tier.featured
									? {
											background:
												"linear-gradient(160deg, rgba(201,168,76,0.05) 0%, #0A0A0A 50%)",
										}
									: {}
							}
						>
							{tier.featured && (
								<div className="absolute -top-px right-6 bg-primary text-black text-[0.68rem] font-medium tracking-[0.08em] uppercase px-3 py-1 rounded-b-md">
									{t("invest:tiers.mostPopular")}
								</div>
							)}
							<div className="text-xs tracking-[0.12em] uppercase text-primary mb-5">
								{tier.tier}
							</div>
							<div className="text-[2.6rem] font-bold text-onSurface-100 leading-none mb-2">
								{tier.amount}
							</div>
							<div className="text-sm text-onSurface-200 mb-7">
								{tier.roiPrefix ? (
									<>
										{tier.roiPrefix}{" "}
										<strong className="text-primary">{tier.roi}</strong>
									</>
								) : (
									<>
										{t("invest:tiers.projectedRoi")}{" "}
										<strong className="text-primary">{tier.roi}</strong>
									</>
								)}
							</div>
							<div className="h-px bg-surface-900 mb-7" />
							<ul className="flex flex-col gap-3 mb-8">
								{tier.features.map((f) => (
									<li
										key={f}
										className="flex gap-2.5 items-start text-sm text-onSurface-200 leading-snug"
									>
										<span className="text-primary text-[0.5rem] mt-1.5 shrink-0">
											◆
										</span>
										{f}
									</li>
								))}
							</ul>
							<Link
								href="#"
								className={`block w-full text-center py-3.5 rounded text-[0.95rem]
										tracking-wider transition-all ${
											tier.ctaStyle === "primary"
												? "bg-primary text-surface font-medium border border-primary hover:bg-primary/90"
												: "text-primary font-light border border-surface-900 hover:border-primary hover:bg-surface-800"
										}`}
							>
								{tier.cta}
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
