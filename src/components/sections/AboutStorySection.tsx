import { useTranslation } from "@/hooks";
import { FadeUp } from "@/components/animations/Fade";

type AboutStat = {
	value: string;
	label: string;
};

export default function AboutStorySection() {
	const { t } = useTranslation(["about"]);
	const paragraphs = t("about:story.paragraphs", {
		returnObjects: true,
	}) as string[];
	const stats = t("about:story.stats", { returnObjects: true }) as AboutStat[];

	return (
		<section className=" py-24">
			<div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
				<FadeUp>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("about:story.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("about:story.headline")}
					</h2>
					<p className="text-base text-onSurface-100 leading-[1.75] font-light">
						{t("about:story.description")}
					</p>
				</FadeUp>
				<div>
					{paragraphs.map((paragraph, index) => (
						<FadeUp key={paragraph} delay={index * 0.08}>
							<p className="text-sm md:text-base text-onSurface-100 leading-[1.85] font-light mb-6">
								{paragraph}
							</p>
						</FadeUp>
					))}
					<div className="grid sm:grid-cols-4 gap-4 mt-10">
						{stats.map((stat, index) => (
							<FadeUp key={stat.label} delay={0.12 + index * 0.05}>
								<div className="rounded-lg border border-surface-600/50 bg-surface-800 p-5">
									<div className="text-3xl text-primary leading-none">
										{stat.value}
									</div>
									<div className="text-xs text-onSurface-100 mt-2 uppercase tracking-[0.08em]">
										{stat.label}
									</div>
								</div>
							</FadeUp>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
