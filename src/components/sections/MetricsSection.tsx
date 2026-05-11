import { useTranslation } from "next-i18next/pages";
const statKeys = ["grossRevenue", "profitMargin", "experience", "investmentAsk"] as const;
const barKeys = [
	{ key: "goldOutput", value: "88%" },
	{ key: "efficiency", value: "92%" },
	{
		key: "roiTarget",
		value: "75%",
	},
] as const;
const stripKeys = [
	"monthlyRevenue",
	"goldPerMonth",
	"yearsInSector",
	"chemicalInputs",
	"paybackPeriod",
] as const;
export default function MetricsSection() {
	const { t } = useTranslation("common");
	return (
		<section className="bg-surface-paper rounded py-28 text-center relative overflow-hidden">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="relative bg-[#111111] border border-[rgba(201,168,76,0.15)] rounded-2xl p-10 mx-auto max-w-[720px] mb-20 overflow-hidden">
					<div
						className="absolute top-0 left-0 right-0 h-px opacity-60"
						style={{
							background: "linear-gradient(90deg, transparent, #f3bd27, transparent)",
						}}
					/>
					<div className="text-xs tracking-[0.12em] uppercase text-[#faf5ec] mb-5">
						{t("metrics.sectionLabel")}
					</div>
					<div className="grid grid-cols-2 gap-4 mb-6">
						{statKeys.map((key) => (
							<div
								key={key}
								className="bg-[#1A1A1A] border border-[rgba(201,168,76,0.08)] rounded-xl p-5"
							>
								<div className="font-serif text-[1.8rem] font-bold text-[#E5C46A] leading-none mb-1.5">
									{t(`metrics.stats.${key}.value`)}
								</div>
								<div className="text-xs text-[#faf5ec]">
									{t(`metrics.stats.${key}.label`)}
								</div>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-3 mt-8">
						{barKeys.map((b) => (
							<div key={b.key} className="flex items-center gap-3">
								<span className="text-xs text-[#faf5ec] w-[70px] shrink-0 text-left">
									{t(`metrics.bars.${b.key}`)}
								</span>
								<div className="flex-1 h-1.5 bg-[#242424] rounded overflow-hidden">
									<div
										className="h-full rounded"
										style={{
											width: b.value,
											background: "linear-gradient(90deg, #8B6510, #f3bd27)",
										}}
									/>
								</div>
								<span className="text-xs text-[#f3bd27] w-9 text-right shrink-0">
									{b.value}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className="flex justify-between items-center gap-4 flex-wrap">
					{stripKeys.map((key, i) => (
						<div
							key={key}
							className="flex-1 min-w-[130px] px-4 text-center"
							style={{
								borderRight:
									i < stripKeys.length - 1
										? "1px solid rgba(201,168,76,0.08)"
										: "none",
							}}
						>
							<div className="font-serif text-[2.6rem] font-bold text-[#f3bd27] leading-none">
								{t(`metrics.strip.${key}.value`)}
							</div>
							<div className="text-xs text-[#faf5ec] mt-1.5 tracking-[0.05em] uppercase">
								{t(`metrics.strip.${key}.label`)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
