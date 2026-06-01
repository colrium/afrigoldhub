
import Link from "next/link";
import { useTranslation } from "@/hooks";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Trans } from "next-i18next/pages";

export default function InvestHero() {
	const { t } = useTranslation(["invest", "meta", "metrics"]);

	return (
		<section className="relative overflow-hidden bg-[#0A0A0A] pt-24 pb-20 md:pt-32 md:pb-28">
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background:
						"radial-gradient(ellipse 62% 48% at 76% 30%, rgba(243,189,39,0.12) 0%, transparent 70%)",
				}}
			/>
			<div className="relative z-10 max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
				<div>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-4">
						{t("invest:hero.tag")}
					</span>

                    <h1 className="text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.98] tracking-tight text-onSurface-100 max-w-[820px]">
                        
						<Trans
                            // @ts-ignore
							i18nKey={["invest:hero.headline"]}
							defaults="Partner in practical African growth opportunities" 
							components={{
								italic: <i />,
								gold: <span className="text-primary" />,
							}}
						/>
					</h1>
					<p className="mt-7 text-base md:text-lg text-onSurface-100 font-light leading-[1.8] max-w-[650px]">
						{t("invest:hero.description")}
					</p>
					<div className="mt-10 flex flex-wrap gap-4">
						<Link
							href={t("invest:hero.cta_primary.href")}
							className="inline-flex items-center gap-2 text-[0.95rem] bg-primary text-black font-medium px-7 py-3.5 rounded border border-primary hover:bg-[#E5C46A] transition-all"
						>
							{t("invest:hero.cta_primary.label")}
							<ArrowForwardIcon fontSize="small" />
						</Link>
						<Link
							href={t("invest:hero.cta_secondary.href")}
							className="inline-flex items-center text-[0.95rem] text-primary font-light px-7 py-3.5 rounded border border-[rgba(201,168,76,0.18)] hover:border-primary hover:bg-[rgba(201,168,76,0.06)] transition-all"
						>
							{t("invest:hero.cta_secondary.label")}
						</Link>
					</div>
				</div>
				<div className="rounded-lg border border-[rgba(201,168,76,0.16)] bg-[#111111]/85 p-8 shimmer-y shimmer-subtle">
					<div className="flex items-center gap-3 mb-7">
						<VerifiedIcon className="text-primary" />
						<div>
							<div className="text-xs uppercase tracking-[0.14em] text-primary">
								{t("invest:hero.badge.status")}
							</div>
							<div className="text-onSurface-100 font-medium">
								{t("invest:hero.badge.text")}
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						{(
							[
								"investmentAsk",
								"profitMargin",
								"goldPerMonth",
								"paybackPeriod",
							] as const
						).map((key) => (
							<div key={key} className="border-t border-[rgba(201,168,76,0.09)] pt-5">
								<div className="text-3xl text-primary leading-none">
									{key === "goldPerMonth" || key === "paybackPeriod"
										? t(`metrics:strip.${key}.value`)
										: t(`metrics:stats.${key}.value`)}
								</div>
								<div className="text-xs text-onSurface-100 mt-2">
									{key === "goldPerMonth" || key === "paybackPeriod"
										? t(`metrics:strip.${key}.label`)
										: t(`metrics:stats.${key}.label`)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
