import Link from "next/link";
import { useTranslation } from "@/hooks";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

type SocialChannel = {
	platform: string;
	handle: string;
	url: string;
	icon: string;
};

function SocialIcon({ icon }: { icon: string }) {
	if (icon === "linkedin") return <LinkedInIcon />;
	if (icon === "instagram") return <InstagramIcon />;
	if (icon === "youtube") return <YouTubeIcon />;
	return <AlternateEmailIcon />;
}

export default function SocialSection() {
	const { t } = useTranslation([ "contact" ]);
	const channels = t("contact:social.channels", {
		returnObjects: true,
	}) as SocialChannel[];

	return (
		<section className="py-20">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
					<div>
						<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
							{t("contact:social.tag")}
						</span>
						<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100">
							{t("contact:social.headline")}
						</h2>
					</div>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{channels.map((channel) => (
						<Link
							key={channel.platform}
							href={channel.url}
							target="_blank"
							rel="noreferrer"
							className="rounded-lg border border-surface-900/50 bg-surface-900 p-5 text-onSurface-100 hover:border-primary hover:text-primary transition-colors"
						>
							<div className="mb-5 text-primary">
								<SocialIcon icon={channel.icon} />
							</div>
							<div className="font-medium">{channel.platform}</div>
							<div className="text-sm text-onSurface-100 mt-1">{channel.handle}</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
