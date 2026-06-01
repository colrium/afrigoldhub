import { useState } from "react";
import { useTranslation } from "@/hooks";

type ContactFaq = {
	question: string;
	answer: string;
};

export default function ContactFaqSection() {
	const { t } = useTranslation([  "contact" ]);
	const [openIndex, setOpenIndex] = useState<number | null>(0);
	const items = t("contact:faq.items", { returnObjects: true }) as unknown as ContactFaq[];

	return (
		<section className=" py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="text-center max-w-[540px] mx-auto mb-14">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("contact:faq.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100">
						{t("contact:faq.headline")}
					</h2>
				</div>
				<div className="max-w-[760px] mx-auto flex flex-col">
					{items.map((item, i) => (
						<div key={item.question} className="border-b border-surface-900/50">
							<button
								className="w-full flex justify-between gap-6 items-center py-6 text-left text-sm text-onSurface-100 bg-transparent border-none cursor-pointer"
								onClick={() => setOpenIndex(openIndex === i ? null : i)}
							>
								<span className={openIndex === i ? "text-primary" : ""}>
									{item.question}
								</span>
								<span
									className="w-8 h-8 shrink-0 border border-primary/15 rounded-full flex items-center justify-center text-primary text-md transition-transform"
									style={{
										transform: openIndex === i ? "rotate(45deg)" : "none",
									}}
								>
									+
								</span>
							</button>
							<div
								className="overflow-hidden text-sm text-onSurface-100 leading-[1.75] transition-all"
								style={{
									maxHeight: openIndex === i ? "260px" : "0",
									paddingBottom: openIndex === i ? "1.5rem" : "0",
								}}
							>
								{item.answer}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
