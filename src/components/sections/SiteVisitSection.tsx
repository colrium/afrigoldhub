import Link from "next/link";
import { useTranslation } from "next-i18next/pages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type SiteVisitStep = {
	step: number;
	title: string;
	description: string;
};

export default function SiteVisitSection() {
	const { t } = useTranslation("common");
	const steps = t("contact.site_visit.process_steps", {
		returnObjects: true,
	}) as SiteVisitStep[];

	return (
		<section className="bg-[#0A0A0A] py-24">
			<div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
				<div>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("contact.site_visit.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("contact.site_visit.headline")}
					</h2>
					<p className="text-base text-[#faf5ec] leading-[1.75] font-light mb-7">
						{t("contact.site_visit.description")}
					</p>
					<p className="text-sm text-primary leading-relaxed mb-8">
						{t("contact.site_visit.note")}
					</p>
					<Link
						href={t("contact.site_visit.cta.href")}
						className="inline-flex items-center gap-2 text-[0.95rem] bg-primary text-black font-medium px-7 py-3.5 rounded border border-primary hover:bg-[#E5C46A] transition-all"
					>
						{t("contact.site_visit.cta.label")}
						<ArrowForwardIcon fontSize="small" />
					</Link>
				</div>

				<div className="grid gap-4">
					{steps.map((step) => (
						<article
							key={step.step}
							className="grid grid-cols-[3.25rem_1fr] gap-5 rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#111111] p-5"
						>
							<div className="w-12 h-12 rounded-full border border-primary/30 text-primary flex items-center justify-center font-serif text-xl">
								{step.step}
							</div>
							<div>
								<h3 className="text-onSurface-100 font-medium mb-2">
									{step.title}
								</h3>
								<p className="text-sm text-[#faf5ec] leading-relaxed">
									{step.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
