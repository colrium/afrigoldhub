import { useTranslation } from "next-i18next/pages";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";

type EsgItem = {
	phase: string;
	title: string;
	description: string;
};

export default function ValueChainEsgSection() {
	const { t } = useTranslation("common");
	const items = t("value_chain.esg.items", { returnObjects: true }) as EsgItem[];

	return (
		<section className="bg-[#111111] py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="max-w-[720px] mb-12">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("value_chain.esg.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("value_chain.esg.headline")}
					</h2>
					<p className="text-base text-[#faf5ec] leading-[1.75] font-light">
						{t("value_chain.esg.description")}
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
					{items.map((item) => (
						<article
							key={`${item.phase}-${item.title}`}
							className="rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#0A0A0A] p-6"
						>
							<EnergySavingsLeafIcon className="text-primary mb-5" />
							<div className="text-xs uppercase tracking-[0.14em] text-primary mb-3">
								{item.phase}
							</div>
							<h3 className="text-onSurface-100 font-medium mb-3">{item.title}</h3>
							<p className="text-sm text-[#faf5ec] leading-relaxed">
								{item.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
