import Link from "next/link";
import { useTranslation } from "next-i18next/pages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PetsIcon from "@mui/icons-material/Pets";
import SpaIcon from "@mui/icons-material/Spa";

type Opportunity = {
	id: string;
	title: string;
	category: string;
	description: string;
	capital_use: string;
	investor_fit: string;
	highlights: string[];
	cta: string;
};

const icons = {
	"gold-aggregation": AccountBalanceIcon,
	"goat-farming": PetsIcon,
	"horticulture": SpaIcon,
};

export default function InvestmentOpportunitiesSection() {
	const { t } = useTranslation(["invest"]);
	const opportunities = t("invest:opportunities.items", {
		returnObjects: true,
	}) as Opportunity[];

	return (
		<section id="opportunities" className="bg-[#0A0A0A] py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="max-w-[720px] mb-12">
					<span className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						<AgricultureIcon fontSize="small" />
						{t("invest:opportunities.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("invest:opportunities.headline")}
					</h2>
					<p className="text-base text-onSurface-100 leading-[1.75] font-light">
						{t("invest:opportunities.description")}
					</p>
				</div>
				<div className="grid lg:grid-cols-3 gap-6">
					{opportunities.map((opportunity) => {
						const Icon = icons[opportunity.id as keyof typeof icons] ?? AgricultureIcon;

						return (
							<article
								key={opportunity.id}
								className="rounded-lg border border-[rgba(201,168,76,0.14)] bg-[#111111] p-7 transition hover:-translate-y-1 hover:border-primary/70"
							>
								<div className="flex items-start justify-between gap-4 mb-6">
									<div>
										<div className="text-xs tracking-[0.14em] uppercase text-primary mb-3">
											{opportunity.category}
										</div>
										<h3 className="text-2xl text-onSurface-100 tracking-tight">
											{opportunity.title}
										</h3>
									</div>
									<div className="w-11 h-11 rounded border border-primary/25 text-primary flex items-center justify-center shrink-0">
										<Icon fontSize="small" />
									</div>
								</div>
								<p className="text-sm text-onSurface-100 leading-relaxed mb-6">
									{opportunity.description}
								</p>
								<div className="grid gap-4 mb-7">
									<div>
										<div className="text-xs uppercase tracking-[0.12em] text-primary mb-1">
											{t("invest:opportunities.labels.capital_use")}
										</div>
										<p className="text-sm text-onSurface-100 leading-relaxed">
											{opportunity.capital_use}
										</p>
									</div>
									<div>
										<div className="text-xs uppercase tracking-[0.12em] text-primary mb-1">
											{t("invest:opportunities.labels.investor_fit")}
										</div>
										<p className="text-sm text-onSurface-100 leading-relaxed">
											{opportunity.investor_fit}
										</p>
									</div>
								</div>
								<ul className="grid gap-2 mb-8">
									{opportunity.highlights.map((highlight) => (
										<li
											key={highlight}
											className="text-sm text-onSurface-100 leading-snug border-l border-primary/40 pl-3"
										>
											{highlight}
										</li>
									))}
								</ul>
								<Link
									href={`/contact?reason=investment-enquiry&opportunity=${opportunity.id}#contact-form`}
									className="inline-flex items-center gap-2 text-primary font-light border border-[rgba(201,168,76,0.18)] hover:border-primary hover:bg-[rgba(201,168,76,0.06)] transition-all rounded px-5 py-3"
								>
									{opportunity.cta}
									<ArrowForwardIcon fontSize="small" />
								</Link>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
