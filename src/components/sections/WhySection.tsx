// @ts-nocheck
import { Trans } from "next-i18next/pages";
import { useTranslation } from "@/hooks";
import AnchorIcon from "@mui/icons-material/Anchor";
import LicenseIcon from "@mui/icons-material/LocalPolice";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import PublicIcon from "@mui/icons-material/Public";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ScienceIcon from "@mui/icons-material/Science";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import { FadeUp } from "../animations/Fade";

const icons = {
	anchor: <AnchorIcon fontSize="inherit" />,
	license: <LicenseIcon fontSize="inherit" />,
	investor: <RequestQuoteIcon fontSize="inherit" />,
	globe: <PublicIcon fontSize="inherit" />,
	handshake: <HandshakeIcon fontSize="inherit" />,
	science: <ScienceIcon fontSize="inherit" />,
	finance: <AssuredWorkloadIcon fontSize="inherit" />,
};

export default function WhySection() {
	const { t } = useTranslation(["common", "why"]);
	const cards = t("why:cards", { returnObjects: true }) as {
		icon: string;
		title: string;
		description: string;
	}[];
	return (
		<section id="about" className="py-28">
			<div className="max-w-295 mx-auto px-8">
				<div className="max-w-150 mb-16">
					<FadeUp delay={0.1}>
						<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
							{t("why:tag")}
						</span>
					</FadeUp>
					<FadeUp delay={0.1}>
						<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
							<Trans
								i18nKey="why:headline"
								defaults="Built on proven ground, <gold>engineered for returns</gold>"
								components={{
									gold: <span className="text-primary!" />,
								}}
							/>
						</h2>
					</FadeUp>
					<FadeUp delay={0.2}>
						<p className="text-base text-onSurface-100 leading-[1.75] font-light max-w-[560px]">
							{t("why:description")}
						</p>
					</FadeUp>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden items-stretch">
					{cards.map((card, idx) => (
						<FadeUp delay={idx * 0.1 + 0.2} key={idx}>
							<div className="bg-surface-900 p-10 relative  h-full rounded-lg ">
								<div className="m-auto text-[64px] text-onSurface-500 rounded-full flex items-center justify-center text-xl mb-6">
									{icons[card.icon]}
								</div>
								<h3 className="text-xl text-onSurface-100 mb-3">{card.title}</h3>
								<p className="text-sm text-onSurface-100 leading-[1.7] font-light">
									{card.description}
								</p>
							</div>
						</FadeUp>
					))}
				</div>
			</div>
		</section>
	);
}
