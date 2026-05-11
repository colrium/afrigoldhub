import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next/pages";
const columnKeys = ["company", "invest", "contact"] as const;
export default function Footer() {
	const { t } = useTranslation("common");
	return (
		<footer className="bg-[#0A0A0A] border-t border-[rgba(201,168,76,0.15)] pt-16 pb-8">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-[rgba(201,168,76,0.08)]">
					<div className="col-span-2 md:col-span-1">
						<Link href="#" className="flex items-center gap-2.5 mb-5">
							<Image src="/img/logo.png" alt="logo" width={32} height={32} />
							<span className="font-serif text-[1.3rem] font-bold tracking-[0.04em] text-[#E5C46A]">
								AfriGold Hub
							</span>
						</Link>
						<p className="text-sm text-[#faf5ec] font-light leading-relaxed">
							{t("footer.tagline")}
						</p>
					</div>

					{columnKeys.map((colKey) => {
						const links = t(`footer.columns.${colKey}.links`, {
							returnObjects: true,
                        }) as string[];
                        console.log('links', links );
						return (
							<div key={colKey}>
								<h5 className="font-serif text-base text-[#F5F0E8] mb-5">
									{t(`footer.columns.${colKey}.heading`)}
								</h5>
								<ul className="flex flex-col gap-3">
									{/*links.map((link) => (
										<li key={link}>
											<Link
												href="#"
												className="text-sm text-[#faf5ec] font-light hover:text-[#E5C46A] transition-colors"
											>
												{link}
											</Link>
										</li>
									))*/}
								</ul>
							</div>
						);
					})}
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
					<span className="text-xs text-[#faf5ec]">{t("footer.copyright")}</span>
					<div className="flex gap-6">
						{(["privacy", "terms", "risk"] as const).map((key) => (
							<Link
								key={key}
								href="#"
								className="text-xs text-[#faf5ec] hover:text-[#E5C46A] transition-colors"
							>
								{t(`footer.legal.${key}`)}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
