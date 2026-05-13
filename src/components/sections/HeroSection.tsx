import Image from "next/image";
import Link from "next/link";
import { Trans } from "next-i18next/client";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next/pages";
import { Chip } from "@mui/material";



const HeroGlobe = dynamic(() => import("@/components/HeroGlobe"), {
	ssr: false,
	loading: () => (
		<img
			className="w-[320px] h-[320px] md:w-[480px] md:h-[420px] lg:w-[520px] lg:h-[520px]"
			style={{ width: 400, height: 400 }}
			src="/img/earth/placeholder.png"
			alt="earth"
		></img>
	),
});

export default function HeroSection() {
	const { t } = useTranslation("common");
    const certs = ["stamico", "mining", "nemc"] as const;
    const certifications = t("certifications.items", { returnObjects: true }) as {
		env_body: string;
		licence_body: string;
		country: string;
	}[];
	return (
		<section className="min-h-screen flex items-center relative pt-32 pb-20 overflow-hidden">
			<div className="max-w-[1180px] mx-auto px-8 relative z-10 w-full">
				<div className="flex flex-col flex-col-reverse md:grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h1 className="font-serif text-[clamp(2.8rem,5vw,4.2rem)] tracking-tight mb-6 text-on-surface">
							<Trans
								i18nKey="hero.headline" // optional -> fallbacks to defaults if not provided
								defaults="Unlock Africa's <gold>Golden Opportunity</gold>" // optional defaultValue
								components={{
									italic: <i />,
									gold: <span className="text-primary! golden-shine font-bold" />,
								}}
							/>
						</h1>

						<p className="text-base text-onsurface-100  leading-[1.75] mb-10 max-w-[480px] font-light">
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

						<div className="mt-12 pt-8 shimmer-t border-primary flex flex-col items-center gap-6">
							<span className="text-xs text-onsurface-100 tracking-[0.06em] uppercase whitespace-nowrap">
								{t("hero.certifiedBy")}
							</span>
							<div className="flex gap-2 flex-wrap">
								{certifications.map((cert, i) => (
									<Chip key={i} label={cert.env_body} />
								))}
							</div>
						</div>
					</div>

					<div className=" flex flex-col justify-center items-center max-w-md mx-auto">
						{/* <BlurReveal blurAmount={8} delay={0.2} duration={1.2}>
							<Image
								src="/img/gold-nugget-africa.png"
								alt="gold nugget"
								width={400}
								height={400}
							/>
						</BlurReveal> */}
						<div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs text-onSurface-100 tracking-[0.08em] uppercase mb-7">
							<span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
							<span>{t("hero.badge")}</span>
						</div>
						<HeroGlobe />
					</div>
				</div>
			</div>
		</section>
	);
}
