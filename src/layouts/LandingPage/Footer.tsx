import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next/pages";
const columnKeys = ["company", "invest", "resources", "contact"] as const;
const legalLinks = {
	privacy: "/privacy-policy",
	terms: "#",
	risk: "/risk-disclaimer",
} as const;
export default function Footer() {
	const { t } = useTranslation(["common", "meta"]);
	return (
		<footer className="main-footer  pt-16 pb-8">
			<div className="max-w-295 mx-auto px-8">
				<div
					className={`w-full flex flex-col md:grid md:grid-cols-[10fr_30fr] gap-8  pb-12 border-b border-[rgba(201,168,76,0.08)]`}
				>
					<div>
						<Link href="/" className="flex items-center gap-2.5 mb-5">
							<Image
								className="hidden md:flex md:mr-1"
								src="/img/logo-three-tone.svg"
								alt="logo"
								width={32}
								height={32}
							/>
							<span className="text-[1.3rem] font-bold tracking-[0.04em] text-primary">
								{t("meta:site.title")}
							</span>
						</Link>
						<p className="text-xs text-on-surface font-light leading-relaxed">
							{t("common:footer.description")}
						</p>
					</div>
					<div
						className={`grow grid grid-cols-1 md:flex md:justify-between gap-4`}
					>
						{columnKeys.map((colKey) => {
							const links = t(`common:footer.columns.${colKey}.links`, {
								returnObjects: true,
							}) as { label: string; href: string }[];
							if (!Array.isArray(links) || links.length === 0) {
								return null; // Skip rendering if links are not available
							}
							return (
								<div key={colKey}>
									<h5 className="text-base text-primary mb-5">
										{t(`common:footer.columns.${colKey}.heading`)}
									</h5>
									<ul className="flex flex-col gap-3">
										{links.map((link, j) => (
											<li key={j}>
												{link.href ? (
													<Link
														href={link.href}
														className="text-sm text-onSurface-100 font-light hover:text-primary transition-colors"
													>
														{link.label}
													</Link>
												) : (
													<span className="text-sm text-onSurface-100 font-light">
														{link.label}
													</span>
												)}
											</li>
										))}
									</ul>
								</div>
							);
						})}
					</div>
				</div>

				<div className="flex flex-col md:flex-row md:auto-cols-max justify-between items-center gap-4 pt-8">
					<span className="text-xs text-onSurface-100">
						{t("common:footer.copyright", {
							year: new Date().getFullYear(),
							organization: t("meta:site.title"),
						})}
					</span>
					<div className="flex gap-6">
						{(["privacy", "terms", "risk"] as const).map((key) => (
							<Link
								key={key}
								href={legalLinks[key]}
								className="text-xs text-onSurface-100 hover:text-primary transition-colors"
							>
								{t(`common:footer.legal.${key}`)}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
