import Link from "next/link";
import { useTranslation } from "next-i18next/pages";

export default function ValueChainCtaSection() {
	const { t } = useTranslation("common");

	return (
		<section className="relative overflow-hidden bg-[#0A0A0A] border-t border-[rgba(201,168,76,0.15)] py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
					{t("value_chain.cta.tag")}
				</span>
				<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5 max-w-[720px]">
					{t("value_chain.cta.headline")}
				</h2>
				<p className="text-base text-[#faf5ec] font-light leading-[1.75] max-w-[620px] mb-9">
					{t("value_chain.cta.description")}
				</p>
				<div className="flex flex-wrap gap-4">
					<Link
						href={t("value_chain.cta.cta_primary.href")}
						className="text-[0.95rem] bg-primary text-black font-medium px-8 py-3.5 rounded hover:bg-[#E5C46A] transition-all border border-primary"
					>
						{t("value_chain.cta.cta_primary.label")}
					</Link>
					<Link
						href={t("value_chain.cta.cta_secondary.href")}
						className="text-[0.95rem] text-primary font-light px-8 py-3.5 rounded border border-[rgba(201,168,76,0.15)] hover:border-primary hover:bg-[rgba(201,168,76,0.06)] transition-all"
					>
						{t("value_chain.cta.cta_secondary.label")}
					</Link>
				</div>
			</div>
		</section>
	);
}
