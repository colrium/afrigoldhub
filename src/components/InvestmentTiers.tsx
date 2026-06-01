// @ts-nocheck
import Link from "next/link";
import { useTranslation } from "@/hooks";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ComponentPropsWithoutRef, ReactElement } from "react";

type Tier = {
	id?: string;
	label?: string;
	tier?: string;
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
type InvestmentTiersProps = ComponentPropsWithoutRef<"div"> & {
	tag?: string | number | ReactElement;
};


export default function InvestmentTiers({ className, ...props }: InvestmentTiersProps) {
	const { t, tObject } = useTranslation(["common", "invest"]);
	const tiers = tObject<Tier[]>("invest:tiers.items", { returnObjects: true });

	return (
		<div className={`grid lg:grid-cols-3 gap-6 ${className || ""}`} {...props}>
			{tiers.map((tier) => (
				<article
					key={tier.id}
					className={`relative flex flex-col justify-between rounded-lg p-8  transition-all hover:-translate-y-1 ${
						tier.featured
							? "border border-primary/20 bg-surface-900"
							: " bg-surface-900/90 hover:bg-surface-900"
					}`}
				>
					{tier.badge && (
						<div className="absolute top-0 right-6 bg-primary text-surface-900 text-[0.68rem] font-medium tracking-[0.08em] uppercase px-3 py-1 rounded-b">
							{tier.badge}
						</div>
					)}
					<div className="text-xs tracking-[0.14em] uppercase text-primary mb-5">
						{tier.label ?? tier.tier}
					</div>
					<div className="text-5xl text-onSurface-100 leading-none mb-4">
						{formatMoney(tier.amount, tier.currency)}
					</div>
					<div className="grid grid-cols-2 gap-3 mb-7">
						<div className=" p-3">
							<div className="text-xl text-primary font-serif">
								{tier.equity_pct}%
							</div>
							<div className="text-xs text-onSurface-100">
								{t("invest:labels.equity_share")}
							</div>
						</div>
						<div className=" p-3">
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
						href={`/contact?reason=investment-enquiry&opportunity=gold-aggregation&tier=${tier.id}#contact-form`}
						className={`block w-full text-center py-3.5 rounded text-[0.95rem] transition-all ${
							tier.featured
								? "bg-primary text-surface-900 font-medium border border-primary hover:bg-primary"
								: "text-primary font-light border border-primary/20 hover:border-primary hover:bg-primary"
						}`}
					>
						{tier.cta}
					</Link>
				</article>
			))}
		</div>
	);
}
