
import { useTranslation } from "@/hooks";
import { ComponentPropsWithoutRef } from "react";
import InvestmentTiers from "@/components/InvestmentTiers"


type InvestmentTiersSectionProps = ComponentPropsWithoutRef<"section">;

// @ts-ignore
export default function InvestmentTiersSection({ className, ...props }: InvestmentTiersSectionProps) {
	const { t } = useTranslation(["common", "invest"]);

	return (
		<section id="tiers" className={`py-24 ${className || ""}`} {...props}>
			<div className="max-w-295 mx-auto px-8">
				<div className="text-center max-w-165 mx-auto mb-14">
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
				<InvestmentTiers />
			</div>
		</section>
	);
}
