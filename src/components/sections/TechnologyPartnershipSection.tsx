import Link from "next/link";
import { useTranslation } from "@/hooks";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";

type PartnershipItem = {
	title: string;
	description: string;
};

export default function TechnologyPartnershipSection() {
	const { t } = useTranslation(["invest"]);
	const items = t("invest:technology_partnerships.items", {
		returnObjects: true,
	}) as PartnershipItem[];

	return (
		<section className="bg-surface-900 py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-12 items-start">
					<div>
						<span className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
							<PrecisionManufacturingIcon fontSize="small" />
							{t("invest:technology_partnerships.tag")}
						</span>
						<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
							{t("invest:technology_partnerships.headline")}
						</h2>
						<p className="text-base text-onSurface-100 leading-[1.75] font-light mb-8">
							{t("invest:technology_partnerships.description")}
						</p>
						<Link
							href={t("invest:technology_partnerships.cta.href")}
							className="inline-flex items-center gap-2 text-primary font-light border border-[rgba(201,168,76,0.18)] hover:border-primary hover:bg-[rgba(201,168,76,0.06)] transition-all rounded px-5 py-3"
						>
							{t("invest:technology_partnerships.cta.label")}
							<ArrowForwardIcon fontSize="small" />
						</Link>
					</div>
					<div className="grid md:grid-cols-2 gap-5">
						{items.map((item) => (
							<article
								key={item.title}
								className="rounded-lg border border-surface-800/50 bg-surface-900 p-6"
							>
								<div className="flex items-start gap-4">
									<div className="w-11 h-11 rounded border border-primary/25 text-primary flex items-center justify-center shrink-0">
										<SettingsInputComponentIcon fontSize="small" />
									</div>
									<div>
										<div className="text-xs uppercase tracking-[0.12em] text-primary mb-2">
											{t("invest:technology_partnerships.priority_label")}
										</div>
										<h3 className="text-xl text-onSurface-100 mb-3">
											{item.title}
										</h3>
										<p className="text-sm text-onSurface-100 leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
