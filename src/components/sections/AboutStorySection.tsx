import { useTranslation } from "next-i18next/pages";
import { FadeUp } from "@/components/animations/Fade";

type AboutStat = {
	value: string;
	label: string;
};

export default function AboutStorySection() {
	const { t } = useTranslation("common");
	const paragraphs = t("about_page.story.paragraphs", {
		returnObjects: true,
	}) as string[];
	const stats = t("about_page.story.stats", { returnObjects: true }) as AboutStat[];

	return (
		<section className="bg-[#111111] py-24">
			<div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
				<FadeUp>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("about_page.story.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("about_page.story.headline")}
					</h2>
					<p className="text-base text-[#faf5ec] leading-[1.75] font-light">
						{t("about_page.story.description")}
					</p>
				</FadeUp>
				<div>
					{paragraphs.map((paragraph, index) => (
						<FadeUp key={paragraph} delay={index * 0.08}>
							<p className="text-sm md:text-base text-[#faf5ec] leading-[1.85] font-light mb-6">
								{paragraph}
							</p>
						</FadeUp>
					))}
					<div className="grid sm:grid-cols-4 gap-4 mt-10">
						{stats.map((stat, index) => (
							<FadeUp key={stat.label} delay={0.12 + index * 0.05}>
								<div className="rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#0A0A0A] p-5">
									<div className="font-serif text-3xl text-primary leading-none">
										{stat.value}
									</div>
									<div className="text-xs text-[#faf5ec] mt-2 uppercase tracking-[0.08em]">
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
