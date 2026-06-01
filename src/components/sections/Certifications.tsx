// @ts-nocheck
"use client";

import { SectionTag } from "@/components/SectionTag";
import { FadeUp } from "@/components/animations/Fade";
import { Trans, useTranslation } from "next-i18next/pages";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export default function Certifications() {
	const { t } = useTranslation(["common", "compliance"]);
	const licences = t("compliance:items", { returnObjects: true }) as {
		icon: string;
		title: string;
		issuer: string;
		description: string;
		ref: string;
		renewal: string;
	}[];
	return (
		<section className="bg-black py-24">
			<div className="max-w-6xl mx-auto px-8">
				<div className="text-center max-w-xl mx-auto mb-16">
					<SectionTag className="text-primary">{t("compliance:tag")}</SectionTag>
					<h2 className="text-4xl lg:text-5xl tracking-tight mb-4">
						<Trans
							i18nKey="compliance:headline"
							defaults="Every permit. <gold>Every certification.</gold>"
							components={{
								gold: <span className="text-primary!   font-bold" />,
							}}
						/>
					</h2>
					<p className="text-sm text-muted font-light">{t("compliance:description")}</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{licences.map((licence, idx) => (
						<FadeUp key={idx} delay={idx * 0.05}>
							<div className="bg-surface-900 border border-onSurface-100/20 rounded-xl p-7 transition-all duration-300 hover:bg-surface-800">
								<div className="flex items-start justify-between mb-4">
									<span className="flex items-center gap-1.5 text-xs text-green-400">
										<span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
										{t("common:misc.active")}
									</span>
								</div>
								<h4 className="text-lg text-off-white mb-1">{licence.title}</h4>
								<div className="text-xs text-gold mb-3">{licence.issuer}</div>
								<p className="text-xs text-muted leading-relaxed font-light">
									{licence.description}
								</p>
								<div className="mt-4 pt-4 border-t border-g10 flex justify-between text-xs">
									<span className="text-muted">{licence.ref}</span>
									<span className="text-gold">Renewal: {licence.renewal}</span>
								</div>
							</div>
						</FadeUp>
					))}
				</div>

				{/* CDA Note */}
				<FadeUp>
					<div className="mt-5 bg-surface-700 rounded-xl p-12 flex flex-col md:flex-row items-center justify-center gap-5">
						<div>
							<div className="w-[132px] h-[132px]  bg-surface-800 text-[72px] text-onSurface-100 rounded-full flex items-center justify-center ">
								<AccountBalanceIcon fontSize="inherit" />
							</div>
						</div>

						<div>
							<div className="text-xl font-medium text-off-white mb-0.5">
								{t("compliance:cda.title")}
							</div>
							<div className="text-xs text-muted font-light leading-relaxed">
								{t("compliance:cda.description")}
							</div>
						</div>
						<span className="shrink-0 flex items-center gap-1.5 text-xs text-green-400 whitespace-nowrap">
							<span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
							{t("compliance:cda.status")}
						</span>
					</div>
				</FadeUp>
			</div>
		</section>
	);
}
