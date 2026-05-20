import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GavelIcon from "@mui/icons-material/Gavel";

type LegalSection = {
	title: string;
	content: string[];
};

type LegalPageSectionProps = {
	label: string;
	title: string;
	description: string;
	lastUpdated: string;
	sections: LegalSection[];
	contactHref?: string;
	contactLabel?: string;
};

export default function LegalPageSection({
	label,
	title,
	description,
	lastUpdated,
	sections,
	contactHref = "/contact",
	contactLabel = "Contact Us",
}: LegalPageSectionProps) {
	return (
		<section className="relative overflow-hidden bg-[#050505] pt-24 pb-20 md:pt-32 md:pb-28">
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background:
						"radial-gradient(ellipse 58% 44% at 72% 26%, rgba(243,189,39,0.12) 0%, transparent 70%)",
				}}
			/>
			<div className="relative z-10 max-w-[980px] mx-auto px-6 md:px-8">
				<div className="mb-12">
					<span className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-primary mb-4">
						<GavelIcon fontSize="small" />
						{label}
					</span>
					<h1 className="text-[clamp(2.7rem,6vw,5.4rem)] leading-[0.96] tracking-tight text-onSurface-100 max-w-[820px]">
						{title}
					</h1>
					<p className="mt-7 text-base md:text-lg text-[#faf5ec] font-light leading-[1.8] max-w-[740px]">
						{description}
					</p>
					<div className="mt-7 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.12em] text-primary">
						Last updated: {lastUpdated}
					</div>
				</div>

				<div className="rounded-lg border border-[rgba(243,189,39,0.16)] bg-[#101010]/90 shimmer-y shimmer-subtle">
					{sections.map((section, index) => (
						<article
							key={section.title}
							className={`p-6 md:p-8 ${
								index > 0 ? "border-t border-[rgba(243,189,39,0.1)]" : ""
							}`}
						>
							<h2 className="text-2xl md:text-3xl text-onSurface-100">
								{section.title}
							</h2>
							<div className="mt-4 space-y-4">
								{section.content.map((paragraph) => (
									<p
										key={paragraph}
										className="text-sm md:text-base text-[#faf5ec] font-light leading-[1.8]"
									>
										{paragraph}
									</p>
								))}
							</div>
						</article>
					))}
				</div>

				<div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 rounded-lg border border-primary/15 bg-[#0b0b0b] p-6">
					<p className="text-sm text-[#faf5ec] leading-relaxed max-w-[620px]">
						Questions about this page or how it applies to your enquiry can be
						sent to the AfriGold Hub team.
					</p>
					<Link
						href={contactHref}
						className="inline-flex items-center justify-center gap-2 rounded border border-primary bg-primary px-6 py-3 text-sm font-medium text-black hover:bg-[#E5C46A] transition-all"
					>
						{contactLabel}
						<ArrowOutwardIcon fontSize="small" />
					</Link>
				</div>
			</div>
		</section>
	);
}
