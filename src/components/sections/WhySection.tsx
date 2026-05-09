import { useTranslation } from "next-i18next/pages";
export default function WhySection() {
	const { t } = useTranslation("home");
	const cards = t("why.cards", { returnObjects: true }) as {
		icon: string;
		title: string;
		desc: string;
	}[];
	return (
		<section id="about" className="py-28">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="max-w-[600px] mb-16">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-[#f3bd27] opacity-80 mb-3">
						{t("why.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-[#F5F0E8] mb-5">
						{t("why.headline")}
					</h2>
					<p className="text-base text-[#faf5ec] leading-[1.75] font-light max-w-[560px]">
						{t("why.desc")}
					</p>
				</div>

				<div
					className="grid grid-cols-1 md:grid-cols-3 rounded-xl overflow-hidden"
					style={{
						gap: "1px",
						background: "rgba(201,168,76,0.15)",
						border: "1px solid rgba(201,168,76,0.15)",
					}}
				>
					{cards.map((card) => (
						<div
							key={card.title}
							className="bg-[#111111] p-10 relative transition-colors hover:bg-[#1A1A1A]"
						>
							<div className="w-11 h-11 bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] rounded-lg flex items-center justify-center text-xl mb-6">
								{card.icon}
							</div>
							<h3 className="font-serif text-xl text-[#F5F0E8] mb-3">{card.title}</h3>
							<p className="text-sm text-[#faf5ec] leading-[1.7] font-light">
								{card.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
