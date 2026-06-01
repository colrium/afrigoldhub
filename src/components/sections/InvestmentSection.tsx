import Link from "next/link";
import { useTranslation } from "@/hooks";
import InvestmentTiers from "@/components/InvestmentTiers";
export default function InvestmentSection() {
	const { t } = useTranslation(["common", "invest"]);
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
				<InvestmentTiers />
			</div>
		</section>
	);
}
