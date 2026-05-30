import Link from "next/link";
import { useTranslation } from "next-i18next/pages";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type Tier = {
	id?: string;
	label?: string;
	amount: number;
	currency: string;
	roi_annual_pct?: number | null;
	equity_pct?: number;
	featured?: boolean;
	badge?: string;
	features?: string[];
	cta?: string;
};

function formatMoney(amount: number, currency: string = "USD") {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		maximumFractionDigits: 0,
	}).format(amount);
}

export default function InvestmentTiersPageSection() {
	const { t } = useTranslation(["common", "invest"]);
	const tiers = t("invest:tiers.items", { returnObjects: true }) as unknown as Tier[];

	return (
		<section id="tiers" className="bg-surface-800 py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="text-center max-w-[660px] mx-auto mb-14">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("invest:tiers.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("invest:tiers.headline")}
					</h2>
					<p className="text-base text-onSurface-100 leading-[1.75] font-light">
						{t("invest:tiers.description")}
					</p>
				</div>
				<div className="grid lg:grid-cols-3 gap-6">
					{tiers.map((tier) => (
						<article
							key={tier.id}
							className={`relative rounded-lg p-8 border transition-all hover:-translate-y-1 ${
								tier.featured
									? "border-primary bg-surface-800"
									: "border-surface-800 bg-surface-800 hover:bg-surface-700"
							}`}
						>
							{tier.badge && (
								<div className="absolute top-0 right-6 bg-primary text-surface text-[0.68rem] font-medium tracking-[0.08em] uppercase px-3 py-1 rounded-b">
									{tier.badge}
								</div>
							)}
							<div className="text-xs tracking-[0.14em] uppercase text-primary mb-5">
								{tier.label}
							</div>
							<div className="text-5xl text-onSurface-100 leading-none mb-4">
								{formatMoney(tier.amount, tier.currency)}
							</div>
							<div className="grid grid-cols-2 gap-3 mb-7">
								<div className="rounded border border-[rgba(201,168,76,0.12)] p-3">
									<div className="text-xl text-primary font-serif">
										{tier.equity_pct}%
									</div>
									<div className="text-xs text-onSurface-100">
										{t("invest:labels.equity_share")}
									</div>
								</div>
								<div className="rounded border border-surface-800/50 p-3">
									<div className="text-xl text-primary font-serif">
										{tier.roi_annual_pct
											? `~${tier.roi_annual_pct}%`
											: t("invest:labels.custom")}
									</div>
									<div className="text-xs text-onSurface-100">
										{t("invest:labels.annual_target")}
									</div>
								</div>
							</div>
							<ul className="grid gap-3 mb-8">
								{tier.features?.map((feature) => (
									<li
										key={feature}
										className="flex gap-2.5 text-sm text-onSurface-100 leading-snug"
									>
										<CheckCircleIcon
											className="text-primary shrink-0"
											fontSize="small"
										/>
										<span>{feature}</span>
									</li>
								))}
							</ul>
							<Link
								href={`/contact?reason=invest&tier=${tier.id}`}
								className={`block w-full text-center py-3.5 rounded text-[0.95rem] transition-all ${
									tier.featured
										? "bg-primary text-black font-medium border border-primary hover:bg-[#E5C46A]"
										: "text-primary font-light border border-[rgba(201,168,76,0.18)] hover:border-primary hover:bg-[rgba(201,168,76,0.06)]"
								}`}
							>
								{tier.cta}
							</Link>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
