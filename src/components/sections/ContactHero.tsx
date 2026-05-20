import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next/pages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ContactHero() {
	const { t } = useTranslation("common");
	const reasons = t("contact.contact_reasons.options", {
		returnObjects: true,
	}) as { value: string; label: string }[];
	const offices = t("contact.offices.items", { returnObjects: true }) as {
		hours: string;
	}[];
	const highlightedReasons = reasons.slice(0, 3);

	return (
		<section className="relative overflow-hidden bg-[#0A0A0A] pt-24 pb-20 md:pt-32 md:pb-28">
			<Head>
				<title>{t("contact.meta.page_title")}</title>
				<meta name="description" content={t("contact.meta.meta_description")} />
				<meta property="og:title" content={t("contact.meta.page_title")} />
				<meta
					property="og:description"
					content={t("contact.meta.meta_description")}
				/>
				<meta property="og:image" content={t("contact.meta.og_image")} />
			</Head>
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background:
						"radial-gradient(ellipse 60% 45% at 72% 35%, rgba(243,189,39,0.11) 0%, transparent 68%)",
				}}
			/>
			<div className="relative z-10 max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
				<div>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-4">
						{t("contact.hero.tag")}
					</span>
					<h1 className="text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.95] tracking-tight text-onSurface-100 max-w-[780px]">
						{t("contact.hero.headline")}
					</h1>
					<p className="mt-7 text-base md:text-lg text-[#faf5ec] font-light leading-[1.8] max-w-[650px]">
						{t("contact.hero.description")}
					</p>
					<div className="mt-10 flex flex-wrap gap-4">
						<Link
							href="#contact-form"
							className="inline-flex items-center gap-2 text-[0.95rem] bg-primary text-black font-medium px-7 py-3.5 rounded border border-primary hover:bg-[#E5C46A] transition-all"
						>
							{t("contact.form.submit_label")}
							<ArrowForwardIcon fontSize="small" />
						</Link>
						<Link
							href="mailto:invest@afrigoldhub.com"
							className="inline-flex items-center text-[0.95rem] text-primary font-light px-7 py-3.5 rounded border border-[rgba(201,168,76,0.18)] hover:border-primary hover:bg-[rgba(201,168,76,0.06)] transition-all"
						>
							invest@afrigoldhub.com
						</Link>
					</div>
				</div>

				<div className="rounded-lg border border-[rgba(201,168,76,0.16)] bg-[#111111]/85 p-8 shimmer-y shimmer-subtle">
					<div className="flex items-center gap-3 mb-7">
						<CheckCircleIcon className="text-primary" />
						<div>
							<div className="text-xs uppercase tracking-[0.14em] text-primary">
								{t("contact.hero.badge.status")}
							</div>
							<div className="text-onSurface-100 font-medium">
								{t("contact.hero.badge.text")}
							</div>
						</div>
					</div>
					<div className="grid gap-5">
						{highlightedReasons.map((reason) => (
							<div
								key={reason.value}
								className="border-t border-[rgba(201,168,76,0.09)] pt-5"
							>
								<div className="text-sm text-onSurface-100">{reason.label}</div>
								<div className="text-xs text-[#faf5ec] mt-1">
									{offices[0]?.hours}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
