import Image from "next/image";
import Link from "next/link";
import { Trans } from "next-i18next/client";


import { useTranslation } from "next-i18next/pages";
export default function HeroSection() {
	const { t } = useTranslation("common");
	const certs = ["stamico", "mining", "nemc"] as const;
	return (
		<section className="min-h-screen flex items-center relative pt-32 pb-20 overflow-hidden">		

			<div className="max-w-[1180px] mx-auto px-8 relative z-10 w-full">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<div className="inline-flex items-center gap-2 bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] rounded-full px-4 py-1.5 text-xs text-primary tracking-[0.08em] uppercase mb-7">
							<span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
							{t("hero.badge")}
						</div>

						<h1 className="font-serif text-[clamp(2.8rem,5vw,4.2rem)] tracking-tight mb-6 text-on-surface">
							<Trans
								i18nKey="hero.headline" // optional -> fallbacks to defaults if not provided
								defaults="Unlock Africa's <gold>Golden Opportunity</gold>" // optional defaultValue
								components={{ italic: <i />, gold: <span className="text-primary! font-bold" /> }}
							/>							
						</h1>

						<p className="text-base text-[#faf5ec] leading-[1.75] mb-10 max-w-[480px] font-light">
							{t("hero.desc")}
						</p>

						<div className="flex gap-4 flex-wrap">
							<Link
								href="#invest"
								className="text-[0.95rem] bg-primary text-black font-medium px-8 py-3.5 rounded hover:bg-[#E5C46A] hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(201,168,76,0.25)] transition-all border border-primary"
							>
								{t("hero.ctaPrimary")}
							</Link>
							<Link
								href="#operations"
								className="text-[0.95rem] text-primary font-light px-8 py-3.5 rounded border border-[rgba(201,168,76,0.15)] hover:border-primary hover:bg-[rgba(201,168,76,0.06)] transition-all"
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
							src="/img/logo-three-tone.svg"
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
