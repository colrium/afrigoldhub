import Link from "next/link";
import { useTranslation } from "@/hooks";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

export default function ValueChainHero() {
	const { t } = useTranslation(["value"]);
	const pillars = t("value:overview.pillars", {
		returnObjects: true,
	}) as { id: string; label: string }[];

	return (
		<section className="relative overflow-hidden bg-[#0A0A0A] pt-24 pb-20 md:pt-32 md:pb-28">
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background:
						"radial-gradient(ellipse 58% 46% at 72% 34%, rgba(243,189,39,0.11) 0%, transparent 70%)",
				}}
			/>
			<div className="relative z-10 max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
				<div>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-4">
						{t("value:hero.tag")}
					</span>
					<h1 className="text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.98] tracking-tight text-onSurface-100 max-w-[820px]">
						{t("value:hero.headline")}
					</h1>
					<p className="mt-7 text-base md:text-lg text-onSurface-100 font-light leading-[1.8] max-w-[700px]">
						{t("value:hero.description")}
					</p>
					<div className="mt-10">
						<Link
							href={t("value:hero.cta_primary.href")}
							className="inline-flex items-center gap-2 text-[0.95rem] bg-primary text-black font-medium px-7 py-3.5 rounded border border-primary hover:bg-[#E5C46A] transition-all"
						>
							{t("value:hero.cta_primary.label")}
							<ArrowForwardIcon fontSize="small" />
						</Link>
					</div>
				</div>
				<div className="rounded-lg border border-[rgba(201,168,76,0.16)] bg-[#111111]/85 p-8 shimmer-y shimmer-subtle">
					<div className="flex items-center gap-3 mb-7">
						<AccountTreeIcon className="text-primary" />
						<div>
							<div className="text-xs uppercase tracking-[0.14em] text-primary">
								{t("value:hero.badge.status")}
							</div>
							<div className="text-onSurface-100 font-medium">
								{t("value:hero.badge.text")}
							</div>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-3">
						{pillars.map((pillar, index) => (
							<div
								key={pillar.id}
								className="rounded border border-[rgba(201,168,76,0.12)] p-4 text-center"
							>
								<div className="text-3xl text-primary">{index + 1}</div>
								<div className="text-xs text-onSurface-100 mt-1">{pillar.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
