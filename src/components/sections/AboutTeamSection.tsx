import { useTranslation } from "next-i18next/pages";
import { FadeUp } from "@/components/animations/Fade";

type TeamMember = {
	initials: string;
	name: string;
	role: string;
	description: string;
};

export default function AboutTeamSection() {
	const { t } = useTranslation("common");
	const items = t("about_page.team.items", { returnObjects: true }) as TeamMember[];

	return (
		<section id="team" className="bg-[#111111] py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<FadeUp className="text-center max-w-[680px] mx-auto mb-14">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("about_page.team.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("about_page.team.headline")}
					</h2>
					<p className="text-base text-[#faf5ec] leading-[1.75] font-light">
						{t("about_page.team.description")}
					</p>
				</FadeUp>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
					{items.map((member, index) => (
						<FadeUp key={member.name} delay={index * 0.06}>
							<article className="h-full rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#0A0A0A] p-6">
								<div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-serif text-xl text-primary mb-5">
									{member.initials}
								</div>
								<div className="text-xs uppercase tracking-[0.14em] text-primary mb-2">
									{member.role}
								</div>
								<h3 className="text-xl text-onSurface-100 font-medium mb-3">
									{member.name}
								</h3>
								<p className="text-sm text-[#faf5ec] leading-relaxed">
									{member.description}
								</p>
							</article>
						</FadeUp>
					))}
				</div>
			</div>
		</section>
	);
}
