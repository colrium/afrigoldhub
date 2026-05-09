import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next/pages";
export default function HeroSection() {
	const { t } = useTranslation("home");
	const certs = ["stamico", "mining", "nemc"] as const;
	return (
		<section className="min-h-screen flex items-center relative pt-32 pb-20 overflow-hidden">
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse 60% 50% at 70% 40%, rgba(201,168,76,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(201,168,76,0.04) 0%, transparent 60%)",
				}}
			/>
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						"linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
					backgroundSize: "80px 80px",
					maskImage:
						"radial-gradient(ellipse 80% 60% at 60% 40%, black 30%, transparent 80%)",
				}}
			/>

			<div className="max-w-[1180px] mx-auto px-8 relative z-10 w-full">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<div className="inline-flex items-center gap-2 bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] rounded-full px-4 py-1.5 text-xs text-[#f3bd27] tracking-[0.08em] uppercase mb-7">
							<span className="w-1.5 h-1.5 bg-[#f3bd27] rounded-full animate-pulse" />
							{t("hero.badge")}
						</div>

						<h1 className="font-serif text-[clamp(2.8rem,5vw,4.2rem)] tracking-tight mb-6 text-[#F5F0E8]">
							{t("hero.headline", {
								gold: (chunks: string) => (
									<em className="text-[#f3bd27] not-italic italic">{chunks}</em>
								),
							})}
						</h1>

						<p className="text-base text-[#faf5ec] leading-[1.75] mb-10 max-w-[480px] font-light">
							{t("hero.desc")}
						</p>

						<div className="flex gap-4 flex-wrap">
							<Link
								href="#invest"
								className="text-[0.95rem] bg-[#f3bd27] text-black font-medium px-8 py-3.5 rounded hover:bg-[#E5C46A] hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(201,168,76,0.25)] transition-all border border-[#f3bd27]"
							>
								{t("hero.ctaPrimary")}
							</Link>
							<Link
								href="#operations"
								className="text-[0.95rem] text-[#f3bd27] font-light px-8 py-3.5 rounded border border-[rgba(201,168,76,0.15)] hover:border-[#f3bd27] hover:bg-[rgba(201,168,76,0.06)] transition-all"
							>
								{t("hero.ctaOutline")}
							</Link>
						</div>

						<div className="mt-12 pt-8 border-t border-[rgba(201,168,76,0.08)] flex items-center gap-6">
							<span className="text-xs text-[#faf5ec] tracking-[0.06em] uppercase whitespace-nowrap">
								{t("hero.certifiedBy")}
							</span>
							<div className="flex gap-6 flex-wrap">
								{certs.map((cert) => (
									<span
										key={cert}
										className="text-sm text-[#F5F0E8] italic font-serif"
									>
										{t(`hero.certs.${cert}`)}
									</span>
								))}
							</div>
						</div>
					</div>

					<div className="hidden lg:flex justify-center items-center max-w-md mx-auto">
						<Image
							src="/img/afri-nugget.svg"
							alt="gold nugget"
							width={400}
							height={400}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
