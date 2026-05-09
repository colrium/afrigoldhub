import { useTranslation } from "next-i18next/pages";
type Testimonial = {
	initials: string;
	name: string;
	title: string;
	text: string;
};

export default function TestimonialsSection() {
	const { t } = useTranslation("home");
	const items = t("testimonials.items", { returnObjects: true }) as Testimonial[];

	return (
		<section className="bg-[#0A0A0A] py-28">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="max-w-[540px] mb-16">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-[#f3bd27] opacity-80 mb-3">
						{t("testimonials.tag")}
					</span>
					<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-[#F5F0E8]">
						{t("testimonials.headline")}
					</h2>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{items.map((item) => (
						<div
							key={item.name}
							className="bg-[#111111] border border-[rgba(201,168,76,0.15)] rounded-xl p-8"
						>
							<div className="font-serif text-5xl text-[#f3bd27] opacity-60 leading-none mb-5">
								&ldquo;
							</div>
							<p className="font-serif text-[1.05rem] text-[rgba(245,240,232,0.75)] leading-[1.75] italic mb-6">
								{item.text}
							</p>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[rgba(201,168,76,0.15)] flex items-center justify-center text-sm text-[#f3bd27] font-serif font-bold shrink-0">
									{item.initials}
								</div>
								<div>
									<div className="text-sm font-medium text-[#F5F0E8]">
										{item.name}
									</div>
									<div className="text-xs text-[#faf5ec]">{item.title}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
