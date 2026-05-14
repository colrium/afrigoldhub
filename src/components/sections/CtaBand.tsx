import Link from "next/link";
import { useTranslation, Trans } from "next-i18next/pages";
export default function CtaBand() {
	const { t } = useTranslation("common");
	return (
		<section className="relative overflow-hidden bg-[#111111] border-t border-[rgba(201,168,76,0.15)] py-28">
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background:
						"radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 70%)",
				}}
			/>
			<div className="max-w-[1180px] mx-auto px-8 relative z-10">
				<span className="inline-block text-xs tracking-[0.14em] uppercase text-[#f3bd27] opacity-80 mb-3">
					{t("cta.tag")}
				</span>
				<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-[#F5F0E8] mb-5">
					<Trans
						i18nKey="cta.headline"
						defaults="Ready to own a share of <gold>Africa's gold output?</gold>"
						components={{
							gold: <span className="text-primary!   font-bold" />,
						}}
					/>
				</h2>
				<p className="text-base text-[#faf5ec] font-light leading-[1.75] max-w-[540px] mb-10">
					{t("cta.description")}
				</p>
				<div className="flex gap-4 flex-wrap">
					<Link
						href="mailto:invest@afrigoldhub.com"
						className="text-[0.95rem] bg-[#f3bd27] text-black font-medium px-8 py-3.5 rounded hover:bg-[#E5C46A] hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(201,168,76,0.25)] transition-all border border-[#f3bd27]"
					>
						{t("cta.scheduleCall")}
					</Link>
					<Link
						href="#invest"
						className="text-[0.95rem] text-[#f3bd27] font-light px-8 py-3.5 rounded border border-[rgba(201,168,76,0.15)] hover:border-[#f3bd27] hover:bg-[rgba(201,168,76,0.06)] transition-all"
					>
						{t("cta.viewPlans")}
					</Link>
				</div>
			</div>
		</section>
	);
}
