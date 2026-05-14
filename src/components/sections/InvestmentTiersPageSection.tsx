import Link from "next/link";
import { useTranslation } from "next-i18next/pages";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type Tier = {
	id: string;
	label: string;
	amount: number;
	currency: string;
	roi_annual_pct: number | null;
	equity_pct: number;
	featured: boolean;
	badge?: string;
	features: string[];
	cta: { label: string; href: string };
};

function formatMoney(amount: number, currency: string) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		maximumFractionDigits: 0,
	}).format(amount);
}

export default function InvestmentTiersPageSection() {
	const { t } = useTranslation("common");
	const tiers = t("shared.investment_tiers.items", { returnObjects: true }) as Tier[];

	return (
		<section id="tiers" className="bg-[#111111] py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="text-center max-w-[660px] mx-auto mb-14">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("shared.investment_tiers.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("shared.investment_tiers.headline")}
					</h2>
					<p className="text-base text-[#faf5ec] leading-[1.75] font-light">
						{t("shared.investment_tiers.description")}
					</p>
				</div>
				<div className="grid lg:grid-cols-3 gap-6">
					{tiers.map((tier) => (
						<article
							key={tier.id}
							className={`relative rounded-lg p-8 border transition-all hover:-translate-y-1 ${
								tier.featured
									? "border-primary bg-[#0A0A0A]"
									: "border-[rgba(201,168,76,0.14)] bg-[#0A0A0A]"
							}`}
						>
							{tier.badge && (
								<div className="absolute top-0 right-6 bg-primary text-black text-[0.68rem] font-medium tracking-[0.08em] uppercase px-3 py-1 rounded-b">
									{tier.badge}
								</div>
							)}
							<div className="text-xs tracking-[0.14em] uppercase text-primary mb-5">
								{tier.label}
							</div>
							<div className="font-serif text-5xl text-onSurface-100 leading-none mb-4">
								{formatMoney(tier.amount, tier.currency)}
							</div>
							<div className="grid grid-cols-2 gap-3 mb-7">
								<div className="rounded border border-[rgba(201,168,76,0.12)] p-3">
									<div className="text-xl text-primary font-serif">
										{tier.equity_pct}%
									</div>
									<div className="text-xs text-[#faf5ec]">
										{t("invest_page.labels.equity_share")}
									</div>
								</div>
								<div className="rounded border border-[rgba(201,168,76,0.12)] p-3">
									<div className="text-xl text-primary font-serif">
										{tier.roi_annual_pct
											? `~${tier.roi_annual_pct}%`
											: t("invest_page.labels.custom")}
									</div>
									<div className="text-xs text-[#faf5ec]">
										{t("invest_page.labels.annual_target")}
									</div>
								</div>
							</div>
							<ul className="grid gap-3 mb-8">
								{tier.features.map((feature) => (
									<li key={feature} className="flex gap-2.5 text-sm text-[#faf5ec] leading-snug">
										<CheckCircleIcon className="text-primary shrink-0" fontSize="small" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
							<Link
								href={tier.cta.href}
								className={`block w-full text-center py-3.5 rounded text-[0.95rem] transition-all ${
									tier.featured
										? "bg-primary text-black font-medium border border-primary hover:bg-[#E5C46A]"
										: "text-primary font-light border border-[rgba(201,168,76,0.18)] hover:border-primary hover:bg-[rgba(201,168,76,0.06)]"
								}`}
							>
								{tier.cta.label}
							</Link>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
