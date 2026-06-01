import { useTranslation } from "@/hooks";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import GavelIcon from "@mui/icons-material/Gavel";
import { FadeUp } from "@/components/animations/Fade";

type Principle = {
	title: string;
	description: string;
};

const icons = [FactCheckIcon, WaterDropIcon, QueryStatsIcon, GavelIcon];

export default function AboutPrinciplesSection() {
	const { t } = useTranslation(["about"]);
	const items = t("about:principles.items", {
		returnObjects: true,
	}) as unknown as Principle[];

	return (
		<section className="py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<FadeUp className="max-w-[650px] mb-12">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("about:principles.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100">
						{t("about:principles.headline")}
					</h2>
				</FadeUp>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
					{items.map((item, index) => {
						const Icon = icons[index] ?? FactCheckIcon;
						return (
							<FadeUp key={item.title} delay={index * 0.06}>
								<article className="h-full rounded-lg border border-primary/12 bg-surface p-6 transition-all hover:border-primary/45 hover:-translate-y-1">
									<Icon className="text-primary mb-5" />
									<h3 className="text-onSurface-100 font-medium mb-3">
										{item.title}
									</h3>
									<p className="text-sm text-onSurface-100 leading-relaxed">
										{item.description}
									</p>
								</article>
							</FadeUp>
						);
					})}
				</div>
			</div>
		</section>
	);
}
