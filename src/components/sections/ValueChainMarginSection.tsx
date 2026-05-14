import { useMemo } from "react";
import { useTranslation } from "next-i18next/pages";

type LineItem = {
	label: string;
	value: number;
	type: string;
	note: string;
};

function formatUsd(value: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	}).format(value);
}

export default function ValueChainMarginSection() {
	const { t } = useTranslation("common");
	const items = t("value_chain.margin_breakdown.line_items", {
		returnObjects: true,
	}) as LineItem[];
	const max = useMemo(
		() => Math.max(...items.map((item) => Math.abs(item.value))),
		[items]
	);

	return (
		<section className="bg-[#111111] py-24">
			<div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[0.75fr_1.25fr] gap-12">
				<div>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("value_chain.margin_breakdown.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("value_chain.margin_breakdown.headline")}
					</h2>
					<p className="text-base text-[#faf5ec] leading-[1.75] font-light mb-6">
						{t("value_chain.margin_breakdown.description")}
					</p>
					<p className="text-xs text-[#faf5ec] leading-relaxed">
						{t("value_chain.margin_breakdown.note")}
					</p>
				</div>
				<div className="grid gap-3">
					{items.map((item) => (
						<div
							key={item.label}
							className="rounded border border-[rgba(201,168,76,0.1)] bg-[#0A0A0A] p-4"
						>
							<div className="flex justify-between gap-4 text-sm mb-2">
								<span className="text-onSurface-100">{item.label}</span>
								<span className={item.value >= 0 ? "text-primary" : "text-[#faf5ec]"}>
									{formatUsd(item.value)}
								</span>
							</div>
							<div className="h-1.5 bg-[#242424] rounded overflow-hidden mb-2">
								<div
									className="h-full rounded"
									style={{
										width: `${(Math.abs(item.value) / max) * 100}%`,
										background:
											item.value >= 0
												? "linear-gradient(90deg, #8B6510, #f3bd27)"
												: "rgba(250,245,236,0.35)",
									}}
								/>
							</div>
							<p className="text-xs text-[#faf5ec] leading-relaxed">{item.note}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
