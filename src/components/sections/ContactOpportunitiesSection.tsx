import Link from "next/link";
import { useTranslation } from "next-i18next/pages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Opportunity = {
	id: string;
	title: string;
	category: string;
	description: string;
	cta: string;
};

export default function ContactOpportunitiesSection() {
	const { t } = useTranslation(["contact", "invest"]);
	const opportunities = t("invest:opportunities.items", {
		returnObjects: true,
	}) as Opportunity[];

	return (
		<section className="bg-surface-900 py-20">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-10 items-start">
					<div>
						<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
							{t("contact:opportunities.tag")}
						</span>
						<h2 className="text-[clamp(2rem,3.2vw,2.7rem)] tracking-tight text-onSurface-100 mb-5">
							{t("contact:opportunities.headline")}
						</h2>
						<p className="text-base text-onSurface-100 leading-[1.75] font-light">
							{t("contact:opportunities.description")}
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-5">
						{opportunities.map((opportunity) => (
							<Link
								key={opportunity.id}
								href={`/contact?reason=investment-enquiry&opportunity=${opportunity.id}#contact-form`}
								className="group rounded-lg border border-surface-800/50 bg-surface-900 p-5 transition hover:border-primary/70 hover:bg-surface-800"
							>
								<div className="text-xs tracking-[0.14em] uppercase text-primary mb-3">
									{opportunity.category}
								</div>
								<h3 className="text-onSurface-100 font-medium mb-3">
									{opportunity.title}
								</h3>
								<p className="text-sm text-onSurface-100 leading-relaxed mb-5">
									{opportunity.description}
								</p>
								<span className="inline-flex items-center gap-2 text-sm text-primary">
									{opportunity.cta}
									<ArrowForwardIcon
										fontSize="small"
										className="transition group-hover:translate-x-1"
									/>
								</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
