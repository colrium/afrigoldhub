"use client";
import { useState } from "react";
import { useTranslation } from "next-i18next/pages";
type FaqItem = { q: string; a: string };
export default function FaqSection() {
	const { t } = useTranslation("common");
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const items = t("faq.items", { returnObjects: true }) as FaqItem[];

	return (
		<section id="faq" className="bg-[#111111] py-28">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="text-center max-w-[540px] mx-auto mb-14">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-[#f3bd27] opacity-80 mb-3">
						{t("faq.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-[#F5F0E8]">
						{t("faq.headline")}
					</h2>
				</div>
				<div className="max-w-[720px] mx-auto flex flex-col">
					{items.map((item, i) => (
						<div key={i} className="border-b border-[rgba(201,168,76,0.08)]">
							<button
								className="w-full flex justify-between items-center py-6 text-left text-sm text-[#F5F0E8] bg-transparent border-none cursor-pointer"
								onClick={() => setOpenIndex(openIndex === i ? null : i)}
							>
								<span>{item.q}</span>
								<span
									className="w-6 h-6 shrink-0 border border-[rgba(201,168,76,0.15)] rounded-full flex items-center justify-center text-[#f3bd27] text-lg transition-transform"
									style={{
										transform: openIndex === i ? "rotate(45deg)" : "none",
									}}
								>
									+
								</span>
							</button>
							<div
								className="overflow-hidden text-sm text-[#faf5ec] leading-[1.75] transition-all"
								style={{
									maxHeight: openIndex === i ? "200px" : "0",
									paddingBottom: openIndex === i ? "1.5rem" : "0",
								}}
							>
								{item.a}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
