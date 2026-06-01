import { useTranslation } from "@/hooks";
import { FadeUp } from "@/components/animations/Fade";

type TimelineItem = {
	year: string;
	title: string;
	description: string;
};

export default function AboutTimelineSection() {
	const { t } = useTranslation(["about"]);
	const items = t("about:timeline.items", {
		returnObjects: true,
	}) as unknown as TimelineItem[];

	return (
		<section className=" py-24">
			<div className="max-w-[980px] mx-auto px-8">
				<FadeUp className="text-center max-w-[620px] mx-auto mb-14">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("about:timeline.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100">
						{t("about:timeline.headline")}
					</h2>
				</FadeUp>
				<div className="relative">
					<div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/70 to-transparent" />
					<div className="grid gap-6">
						{items.map((item, index) => (
							<FadeUp key={`${item.year}-${item.title}`} delay={index * 0.06}>
								<article className="relative md:pl-20 rounded-lg border border-surface-600/50 bg-surface-800 p-6">
									<div className="md:absolute md:left-0 md:top-6 w-12 h-12 rounded-full bg-surface-700 border border-primary/35 text-primary flex items-center justify-center mb-4 md:mb-0">
										{index + 1}
									</div>
									<div className="text-xs uppercase tracking-[0.14em] text-primary mb-2">
										{item.year}
									</div>
									<h3 className="text-2xl text-onSurface-100 mb-2">
										{item.title}
									</h3>
									<p className="text-sm text-onSurface-100 leading-relaxed">
										{item.description}
									</p>
								</article>
							</FadeUp>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
