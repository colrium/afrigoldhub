import { useTranslation } from "@/hooks";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";

type EsgItem = {
	phase: string;
	title: string;
	description: string;
};

export default function ValueChainEsgSection() {
	const { t } = useTranslation([  "value" ]);
	const items = t("value:esg.items", { returnObjects: true }) as EsgItem[];

	return (
		<section className="bg-surface-900 py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="max-w-[720px] mb-12">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("value:esg.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("value:esg.headline")}
					</h2>
					<p className="text-base text-onSurface-200 leading-[1.75] font-light">
						{t("value:esg.description")}
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
					{items.map((item) => (
						<article
							key={`${item.phase}-${item.title}`}
							className="rounded-lg border border-surface-800/50 bg-surface-900 p-6"
						>
							<EnergySavingsLeafIcon className="text-primary mb-5" />
							<div className="text-xs uppercase tracking-[0.14em] text-primary mb-3">
								{item.phase}
							</div>
							<h3 className="text-onSurface-100 font-medium mb-3">{item.title}</h3>
							<p className="text-sm text-onSurface-200 leading-relaxed">
								{item.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
