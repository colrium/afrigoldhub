import { useTranslation } from "next-i18next/pages";
const CheckIcon = () => (
	<svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
		<path
			d="M3 8l3.5 3.5 6.5-7"
			stroke="#C9A84C"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default function OperationsSection() {
	const { t } = useTranslation("home");

	const features = t("operations.features", { returnObjects: true }) as string[];
	const steps = t("operations.steps", { returnObjects: true }) as {
		title: string;
		desc: string;
	}[];

	return (
		<section id="operations" className="bg-[#111111] py-24">
			<div className="max-w-6xl mx-auto px-8">
				<div className="grid lg:grid-cols-2 gap-20 items-center">
					<div>
						<span className="inline-block text-xs tracking-[0.14em] uppercase text-[#f3bd27] opacity-80 mb-3">
							{t("operations.tag")}
						</span>
						<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-5 text-[#F5F0E8]">
							{t("operations.headline", {
								gold: (chunks: string) => (
									<em className="text-[#f3bd27] not-italic italic">{chunks}</em>
								),
							})}
						</h2>
						<p className="text-base text-[#faf5ec] leading-relaxed font-light mb-7">
							{t("operations.desc")}
						</p>
						<ul className="flex flex-col gap-3">
							{features.map((f) => (
								<li
									key={f}
									className="flex gap-3 text-sm text-[#faf5ec] font-light"
								>
									<CheckIcon />
									{f}
								</li>
							))}
						</ul>
					</div>

					<div className="relative bg-[#0A0A0A] border border-[rgba(201,168,76,0.15)] rounded-2xl p-8 overflow-hidden">
						<div
							className="absolute top-0 left-0 right-0 h-px opacity-60"
							style={{
								background:
									"linear-gradient(90deg, transparent, #f3bd27, transparent)",
							}}
						/>
						<div className="relative flex flex-col">
							<div
								className="absolute left-[18px] top-9 bottom-9 w-px"
								style={{
									background: "linear-gradient(to bottom, #8B6510, transparent)",
								}}
							/>
							{steps.map((step, i) => (
								<div
									key={step.title}
									className="flex gap-4 items-start py-4 relative z-10"
								>
									<div className="w-9 h-9 shrink-0 bg-[#1A1A1A] border border-[rgba(201,168,76,0.15)] rounded-full flex items-center justify-center font-serif text-sm text-[#f3bd27] font-bold">
										{i + 1}
									</div>
									<div>
										<h4 className="text-sm font-medium text-[#F5F0E8] mb-1">
											{step.title}
										</h4>
										<p className="text-xs text-[#faf5ec] leading-relaxed font-light">
											{step.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
