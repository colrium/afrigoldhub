import { useTranslation } from "@/hooks";
type Testimonial = {
	initials: string;
	name: string;
	title: string;
	text: string;
};

export default function TestimonialsSection() {
	const { t } = useTranslation([  "testimonials" ]);
	const items = t("testimonials:items", { returnObjects: true }) as Testimonial[];

	return (
		<section className="py-28">
			<div className="max-w-295 mx-auto px-8">
				<div className="max-w-135 mb-16">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("testimonials:tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100">
						{t("testimonials:headline")}
					</h2>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{items.map((item) => (
						<div
							key={item.name}
							className="bg-surface-900 border border-surface-900/15 rounded-xl p-8"
						>
							<div className="text-5xl text-primary opacity-60 leading-none mb-5">
								&ldquo;
							</div>
							<p className="text-[1.05rem] text-onSurface-200 leading-[1.75] italic mb-6">
								{item.text}
							</p>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-surface-800 border border-[rgba(201,168,76,0.15)] flex items-center justify-center text-sm text-primary font-bold shrink-0">
									{item.initials}
								</div>
								<div>
									<div className="text-sm font-medium text-onSurface-100">
										{item.name}
									</div>
									<div className="text-xs text-onSurface-200">{item.title}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
