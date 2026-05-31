import Link from "next/link";
import { Trans, useTranslation } from "next-i18next/pages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";

type Stat = {
	value: string;
	label: string;
	prefix?: string;
};

export default function OperationsHero() {
	const { t } = useTranslation(["operations"]);
	const stats = t("operations:overview.stats", { returnObjects: true }) as Stat[];
	const heroStats = Array.isArray(stats) ? stats.slice(0, 4) : [];

	return (
		<section className="relative overflow-hidden bg-[#0A0A0A] pt-24 pb-20 md:pt-32 md:pb-28">
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background:
						"radial-gradient(ellipse 62% 48% at 76% 30%, rgba(243,189,39,0.13) 0%, transparent 70%)",
				}}
			/>
			<div className="relative z-10 max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
				<div>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-4">
						{t("operations:hero.tag")}
					</span>
					<h1 className="text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.98] tracking-tight text-onSurface-100 max-w-[820px]">
						<Trans
							i18nKey="operations:hero.headline"
							components={{
								gold: <span className="text-primary font-bold" />,
							}}
						/>
					</h1>
					<p className="mt-5 text-lg text-primary font-light leading-[1.7] max-w-[680px]">
						{t("operations:hero.subheadline")}
					</p>
					<p className="mt-5 text-base md:text-lg text-onSurface-100 font-light leading-[1.8] max-w-[720px]">
						{t("operations:hero.description")}
					</p>
					<div className="mt-10 flex flex-wrap gap-4">
						<Link
							href={t("operations:hero.cta_primary.href")}
							className="inline-flex items-center gap-2 text-[0.95rem] bg-primary text-black font-medium px-7 py-3.5 rounded border border-primary hover:bg-[#E5C46A] transition-all"
						>
							{t("operations:hero.cta_primary.label")}
							<ArrowForwardIcon fontSize="small" />
						</Link>
						<Link
							href={t("operations:hero.cta_secondary.href")}
							className="inline-flex items-center text-[0.95rem] text-primary font-light px-7 py-3.5 rounded border border-[rgba(201,168,76,0.18)] hover:border-primary hover:bg-[rgba(201,168,76,0.06)] transition-all"
						>
							{t("operations:hero.cta_secondary.label")}
						</Link>
					</div>
				</div>

				<div className="rounded-lg border border-[rgba(201,168,76,0.16)] bg-[#111111]/85 p-7 md:p-8 shimmer-y shimmer-subtle">
					<div className="flex items-center gap-3 mb-7">
						<VerifiedIcon className="text-primary" />
						<div>
							<div className="text-xs uppercase tracking-[0.14em] text-primary">
								{t("operations:hero.badge.status")}
							</div>
							<div className="text-onSurface-100 font-medium">
								{t("operations:hero.badge.text")}
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						{heroStats.map((stat) => (
							<div
								key={stat.label}
								className="border-t border-[rgba(201,168,76,0.09)] pt-5"
							>
								<div className="text-3xl text-primary leading-none">
									{stat.prefix}
									{stat.value}
								</div>
								<div className="text-xs text-onSurface-100 mt-2">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
