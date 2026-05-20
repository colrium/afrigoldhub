import { useTranslation } from "next-i18next/pages";
import ShieldIcon from "@mui/icons-material/Shield";

type Safeguard = {
	title: string;
	description: string;
};

export default function InvestorSafeguardsSection() {
	const { t } = useTranslation("common");
	const items = t("invest_page.safeguards.items", {
		returnObjects: true,
	}) as Safeguard[];

	return (
		<section className="bg-[#111111] py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="max-w-[620px] mb-12">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("invest_page.safeguards.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100">
						{t("invest_page.safeguards.headline")}
					</h2>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
					{items.map((item) => (
						<article
							key={item.title}
							className="rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#0A0A0A] p-6"
						>
							<ShieldIcon className="text-primary mb-5" />
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
