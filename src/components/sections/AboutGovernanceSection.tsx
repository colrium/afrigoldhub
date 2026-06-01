// @ts-nocheck
import { useTranslation } from "@/hooks";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FadeUp } from "@/components/animations/Fade";

export default function AboutGovernanceSection() {
	const { t } = useTranslation(["about"]);
	const items = t("about:governance.items", {
		returnObjects: true,
	}) as string[];

	return (
		<section id="certifications" className=" py-24">
			<div className="max-w-295 mx-auto px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
				<FadeUp>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("about:governance.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("about:governance.headline")}
					</h2>
					<p className="text-base text-onSurface-100 leading-[1.75] font-light">
						{t("about:governance.description")}
					</p>
				</FadeUp>
				<div className="grid md:grid-cols-2 gap-4">
					{items.map((item, index) => (
						<FadeUp key={item} delay={index * 0.05}>
							<div className="h-full flex gap-3 rounded-lg border border-surface-800/50 bg-surface-900 p-5">
								<CheckCircleIcon
									className="text-primary shrink-0"
									fontSize="small"
								/>
								<span className="text-sm text-onSurface-100 leading-relaxed">
									{item}
								</span>
							</div>
						</FadeUp>
					))}
				</div>
			</div>
		</section>
	);
}
