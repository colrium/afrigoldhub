import { useTranslation } from "next-i18next/pages";

type ProcessStep = {
	step: number;
	title: string;
	description: string;
};

export default function InvestorProcessSection() {
	const { t } = useTranslation("common");
	const items = t("invest_page.process.items", { returnObjects: true }) as ProcessStep[];

	return (
		<section className="bg-[#0A0A0A] py-24">
			<div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[0.78fr_1.22fr] gap-12">
				<div>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("invest_page.process.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("invest_page.process.headline")}
					</h2>
					<p className="text-base text-[#faf5ec] leading-[1.75] font-light">
						{t("invest_page.process.description")}
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-5">
					{items.map((item) => (
						<article
							key={item.step}
							className="rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#111111] p-6"
						>
							<div className="w-11 h-11 rounded-full border border-primary/30 text-primary flex items-center justify-center font-serif text-xl mb-5">
								{item.step}
							</div>
							<h3 className="text-onSurface-100 font-medium mb-2">{item.title}</h3>
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
