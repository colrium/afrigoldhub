import { Avatar } from "@mui/material";
import { Trans, useTranslation } from "next-i18next/pages";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { collectPrefetchHints } from "next/dist/server/app-render/collect-segment-data";
import StackedCard from "@/components/animations/StackedCard";

export default function OperationsSection() {
	const { t } = useTranslation("common");
    const cardsContainer = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: cardsContainer,
		offset: ["start start", "end end"],
	});

	
	const features = t("operations.features", { returnObjects: true }) as string[];
	const steps = t("operations.steps", { returnObjects: true }) as {
		title: string;
        desc: string;
        color: string;
        image: string;
	}[];

	return (
		<section id="operations" className="py-24">
			<div className="max-w-6xl mx-auto px-8 flex flex-col ">
				<div className="text-center max-w-2xl mx-auto">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("operations.tag")}
					</span>
					<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-5 text-on-surface-100">
						<Trans
							i18nKey="operations.headline"
							defaults="From earth to <gold>gold bar</gold>"
							components={{
								gold: <span className="text-primary!   font-bold" />,
							}}
						/>
					</h2>

					<p className="text-base text-on-surface-200 leading-relaxed font-light mb-7">
						{t("operations.desc")}
					</p>
				</div>

				<div className="grid  items-center" ref={cardsContainer}>
					<div>
						<div className="relative flex flex-col">
							{/*steps.map((step, i) => (
								<div
									key={step.title}
									className="flex gap-4 items-start py-4 relative z-10"
								>
									<Avatar className="bg-primary! text-black font-medium w-6 h-6 text-xs shrink-0">
										{i + 1}
									</Avatar>
									<div>
										<h4 className="text-sm font-medium text-on-surface-100 mb-1">
											{step.title}
										</h4>
										<p className="text-xs text-on-surface-200 leading-relaxed font-light">
											{step.desc}
										</p>
									</div>
								</div>
							))*/}
							{steps.map((step, i) => (
								<StackedCard
									key={`p_${i}`}
									i={i}
									title={step.title}
									description={step.desc}
									src={step.image}
									url={""}
									color={step.color}
									progress={scrollYProgress}
									range={[i * 0.25, 1]}
									targetScale={1 - (steps.length - i) * 0.05}
								/>
							))}
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
