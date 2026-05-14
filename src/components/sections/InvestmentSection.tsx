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
	const { t } = useTranslation("common");
	const tiers = t("investment.tiers", { returnObjects: true }) as Tier[];
	return (
		<section id="invest" className="bg-[#111111] py-28">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="text-center mb-16">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("investment.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("investment.headline")}
					</h2>
					<p className="text-base text-[#faf5ec] leading-[1.75] font-light max-w-[560px] mx-auto">
						{t("investment.description")}
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
											: "border-[rgba(201,168,76,0.15)] bg-[#0A0A0A]"
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
								<div className="absolute top-[-1px] right-6 bg-primary text-black text-[0.68rem] font-medium tracking-[0.08em] uppercase px-3 py-1 rounded-b-md">
									{t("investment.mostPopular")}
								</div>
							)}
							<div className="text-xs tracking-[0.12em] uppercase text-primary mb-5">
								{tier.tier}
							</div>
							<div className="font-serif text-[2.6rem] font-bold text-onSurface-100 leading-none mb-2">
								{tier.amount}
							</div>
							<div className="text-sm text-[#faf5ec] mb-7">
								{tier.roiPrefix ? (
									<>
										{tier.roiPrefix}{" "}
										<strong className="text-[#E5C46A]">{tier.roi}</strong>
									</>
								) : (
									<>
										{t("investment.projectedRoi")}{" "}
										<strong className="text-[#E5C46A]">{tier.roi}</strong>
									</>
								)}
							</div>
							<div className="h-px bg-[rgba(201,168,76,0.08)] mb-7" />
							<ul className="flex flex-col gap-3 mb-8">
								{tier.features.map((f) => (
									<li
										key={f}
										className="flex gap-2.5 items-start text-sm text-[#faf5ec] leading-snug"
									>
										<span className="text-[#8B6510] text-[0.5rem] mt-1.5 shrink-0">
											◆
										</span>
										{f}
									</li>
								))}
							</ul>
							<Link
								href="#"
								className={`block w-full text-center py-3.5 rounded text-[0.95rem]
										tracking-[0.05em] transition-all ${
											tier.ctaStyle === "primary"
												? "bg-primary text-black font-medium border border-primary hover:bg-[#E5C46A]"
												: "text-primary font-light border border-[rgba(201,168,76,0.15)] hover:border-primary hover:bg-[rgba(201,168,76,0.06)]"
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
