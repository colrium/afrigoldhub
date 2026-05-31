
import { useTranslation } from "next-i18next/pages";
import { useRef } from "react";
import StackedCards from "../animations/StackedCards";

export default function OperationsSection() {
	const { t } = useTranslation([  "common", "operations"]);
    const cardsContainer = useRef<HTMLDivElement | null>(null);
    
	
	const steps = (t("operations:steps.items", { returnObjects: true }) as {
		title: string;
		short_description: string;
		long_description: string;
		color: string;
		image: string;
    }[]).map((step, i) => ({
        title: step.title,
        description: step.short_description,
        src: step.image,
        url: "",
        color: step.color,
        i: i + 1
    }));
	return (
		<section id="operations" className="py-16">
			<div className="max-w-6xl mx-auto px-8 flex flex-col ">
				<StackedCards
					cards={steps}
					startElement={
						<div className="text-center max-w-2xl mx-auto">
							<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
								{t("operations:steps.tag")}
							</span>
							<h2 className="text-4xl lg:text-5xl tracking-tight mb-5 text-on-surface-100">
								{t("operations:steps.headline")}
							</h2>
							<p className="text-sm text-on-surface-200 leading-relaxed font-light mb-7">
								{t("operations:steps.description")}
							</p>
						</div>
					}
					endElement={null}
				/>

				<div className="grid  items-center" ref={cardsContainer}>
					<div>
						<div className="relative flex flex-col">
							{/*steps.map((step, i) => (
								<StackedCard
									key={`p_${i}`}
									i={i}
									title={step.title}
									description={step.short_description}
									src={step.image}
									url={""}
									color={step.color}
									progress={scrollYProgress}
									range={[i * 0.25, 1]}
									targetScale={1 - (steps.length - i) * 0.05}
								/>
							)) */}
						</div>
						{/* <ul className="flex flex-col gap-3">
							{features.map((f) => (
								<li
									key={f}
									className="flex gap-3 text-sm text-on-surface-200 font-light"
								>
									<Avatar className="bg-on-surface-100! text-black font-medium w-6 h-6 text-xs shrink-0">
										<CheckIcon color="primary" />
									</Avatar>
									{f}
								</li>
							))}
						</ul> */}
					</div>
				</div>
			</div>
		</section>
	);
}
