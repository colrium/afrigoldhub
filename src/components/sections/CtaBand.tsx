import Link from "next/link";
import { useTranslation, Trans } from "next-i18next/pages";
export default function CtaBand() {
	const { t } = useTranslation(["cta"]);
	return (
		<section className="relative overflow-hidden bg-surface-900/70 py-28">
			
			<div className="max-w-295 mx-auto px-8 relative z-10">
				<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
					{t("cta:tag")}
				</span>
				<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
					<Trans
						i18nKey="cta:headline"
						defaults="Ready to own a share of <gold>Africa's gold output?</gold>"
						components={{
							gold: <span className="text-primary!   font-bold" />,
						}}
					/>
				</h2>
				<p className="text-base text-onSurface-100 font-light leading-[1.75] max-w-135 mb-10">
					{t("cta:description")}
				</p>
				<div className="flex gap-4 flex-wrap">
					<Link
						href="mailto:invest@afrigoldhub.com"
						className="text-[0.95rem] bg-primary text-surface-900 font-medium px-8 py-3.5 rounded hover:bg-primary hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(201,168,76,0.25)] transition-all border border-primary"
					>
						{t("cta:scheduleCall")}
					</Link>
					<Link
						href="/invest"
						className="text-[0.95rem] text-primary font-light px-8 py-3.5 rounded border border-primary/10 hover:border-primary hover:bg-primary/10 transition-all"
					>
						{t("cta:viewPlans")}
					</Link>
				</div>
			</div>
		</section>
	);
}
