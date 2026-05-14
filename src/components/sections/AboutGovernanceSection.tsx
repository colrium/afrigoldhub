import { useTranslation } from "next-i18next/pages";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FadeUp } from "@/components/animations/Fade";

export default function AboutGovernanceSection() {
	const { t } = useTranslation("common");
	const items = t("about_page.governance.items", {
		returnObjects: true,
	}) as string[];

	return (
		<section id="certifications" className="bg-[#0A0A0A] py-24">
			<div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
				<FadeUp>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("about_page.governance.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("about_page.governance.headline")}
					</h2>
					<p className="text-base text-[#faf5ec] leading-[1.75] font-light">
						{t("about_page.governance.description")}
					</p>
				</FadeUp>
				<div className="grid md:grid-cols-2 gap-4">
					{items.map((item, index) => (
						<FadeUp key={item} delay={index * 0.05}>
							<div className="h-full flex gap-3 rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#111111] p-5">
								<CheckCircleIcon className="text-primary shrink-0" fontSize="small" />
								<span className="text-sm text-[#faf5ec] leading-relaxed">{item}</span>
							</div>
						</FadeUp>
					))}
				</div>
			</div>
		</section>
	);
}
