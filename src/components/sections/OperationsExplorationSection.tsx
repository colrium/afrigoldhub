import { useTranslation } from "@/hooks";
import ExploreIcon from "@mui/icons-material/Explore";
import MapIcon from "@mui/icons-material/Map";

type ExplorationItem = {
	title: string;
	description: string;
};

export default function OperationsExplorationSection() {
	const { t } = useTranslation(["operations"]);
	const items = t("operations:exploration.items", {
		returnObjects: true,
	}) as ExplorationItem[];

	return (
		<section className="bg-[#0A0A0A] py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-12 items-start">
					<div>
						<span className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
							<ExploreIcon fontSize="small" />
							{t("operations:exploration.tag")}
						</span>
						<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
							{t("operations:exploration.headline")}
						</h2>
						<p className="text-base text-onSurface-100 leading-[1.75] font-light">
							{t("operations:exploration.description")}
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-5">
						{items.map((item) => (
							<article
								key={item.title}
								className="rounded-lg border border-[rgba(201,168,76,0.14)] bg-[#111111] p-6"
							>
								<div className="w-11 h-11 rounded border border-primary/25 text-primary flex items-center justify-center mb-5">
									<MapIcon fontSize="small" />
								</div>
								<h3 className="text-xl text-onSurface-100 mb-3">
									{item.title}
								</h3>
								<p className="text-sm text-onSurface-100 leading-[1.75] font-light">
									{item.description}
								</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
