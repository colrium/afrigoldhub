// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import { Trans } from "next-i18next/client";
import dynamic from "next/dynamic";
import { useTranslation } from "@/hooks";
import { Chip } from "@mui/material";

/* const HeroGlobe = dynamic(() => import("@/components/HeroGlobe"), {
	ssr: false,
	loading: () => (
		<img
			className="w-[320px] h-80 md:w-120 md:h-105 lg:w-130 lg:h-130"
			style={{ width: 400, height: 400 }}
			src="/img/earth/placeholder.png"
			alt="earth"
		></img>
	),
}); */

const HeroGlobe = dynamic(() => import("@/components/HeroGlobe"), {
	ssr: false,
	loading: () => (
		<div className="text-center flex items-center  justify-center w-80 h-80 md:w-100 md:h-100 lg:w-130 lg:h-130">
			<div role="status">
				<svg
					aria-hidden="true"
					className="inline w-8 h-8  text-surface-300 animate-spin fill-primary"
					viewBox="0 0 100 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
						fill="currentColor"
					/>
					<path
						d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
						fill="currentFill"
					/>
				</svg>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	),
});

export default function HeroSection() {
	const { t } = useTranslation(["common", "home"]);
	const certifications = t("home:certifications_bar.items", { returnObjects: true }) as {
		code: string;
		name: string;
		note: string;
	}[];
	return (
		<section
			className="min-h-screen flex items-center relative pt-32 pb-20 overflow-hidden"
			id="home"
		>
			<div className="max-w-[1180px] mx-auto px-8 relative z-10 w-full">
				<div className="flex flex-col flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h1 className="text-[clamp(2.8rem,5vw,4.2rem)] tracking-tight mb-6 text-on-surface">
							<Trans
								i18nKey={["home:hero.headline"]}
								defaults="Unlock Africa's <gold>Golden Opportunity</gold>" // optional defaultValue
								components={{
									italic: <i />,
									gold: <span className="text-primary! golden-shine font-bold" />,
								}}
							/>
						</h1>

						<p className="text-base text-onsurface-100  leading-[1.75] mb-10 max-w-[480px] font-light">
							{t("home:hero.description")}
						</p>

						<div className="flex gap-4 flex-wrap">
							<Link
								href="#invest"
								className="text-[0.95rem] bg-primary text-black font-medium px-8 py-3.5 rounded hover:bg-[#E5C46A] hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(201,168,76,0.25)] transition-all border border-primary"
							>
								{t("home:hero.ctaPrimary")}
							</Link>
							<Link
								href="#operations"
								className="text-[0.95rem] text-primary font-light px-8 py-3.5 rounded border border-[rgba(201,168,76,0.15)] hover:border-primary hover:bg-[rgba(201,168,76,0.06)] transition-all"
							>
								{t("home:hero.ctaOutline")}
							</Link>
						</div>

						<div className="mt-12 pt-8 shimmer-t border-primary flex flex-col items-center gap-6">
							<span className="text-xs text-onsurface-100 tracking-[0.06em] uppercase whitespace-nowrap">
								{t("home:hero.certifiedBy")}
							</span>
							<div className="flex gap-2 flex-wrap">
								{certifications.map((cert, i) => (
									<div
										className="gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs text-onSurface-100"
										key={i}
									>
										{cert.code}
									</div>
								))}
							</div>
						</div>
					</div>

					<div className=" flex flex-col justify-center items-center max-w-md mx-auto">
						<div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs text-onSurface-100 tracking-[0.08em] uppercase mb-7">
							<span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
							<span>{t("home:hero.badge")}</span>
						</div>
						<HeroGlobe />
					</div>
				</div>
			</div>
		</section>
	);
}
