import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { useTranslation } from "next-i18next/pages";
import { landingPageNavs } from "@/config/nav";
import { useRouter } from "next/router";


export default function Navbar() {
	const router = useRouter();
	const { t, i18n } = useTranslation("common");

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const onToggleLanguageClick = (newLocale: string) => {
		const { pathname, asPath, query } = router;
		router.push({ pathname, query }, asPath, { locale: newLocale });
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const clientSideLanguageChange = (newLocale: string) => {
		i18n.changeLanguage(newLocale);
	};

	const changeTo = router.locale === "en" ? "de" : "en";
	// const changeTo = i18n.resolvedLanguage === 'en' ? 'de' : 'en'

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Link href="/" className="flex items-center gap-2">
						<Image
							className="flex md:mr-1"
							src="/img/logo-three-tone.svg"
							alt="logo"
							width={32}
							height={32}
						/>
						{/* <Typography
							variant="h6"
							noWrap
							className=" md:flex font-serif mr-2 text-[1.3rem] font-bold tracking-[0.04em] text-primary mr-2"
						>
							{t("site.title")}
						</Typography> */}
						<Typography
							variant="h5"
							noWrap
							className="mr-2 flex md:hidden flex-grow font-mono font-bold text-primary-300 tracking-widest text-inherit no-underline"
						>
							{t("site.title")}
						</Typography>
					</Link>

					<Box className="hidden md:flex flex-1 md:flex-grow md:gap-4 md:items-center md:justify-center">
						{landingPageNavs.map(
							(
								{
									excludeOnMainNav,
									labelKey,
									name,
									path,
									props: linkProps,
									Component = MuiLink,
								},
								i
							) =>
								!excludeOnMainNav && (
									<Component
										{...linkProps}
										TypographyClasses={`text-sm mr-4 no-underline font-light tracking-[0.03em] hover:text-primary-500 transition-colors ${linkProps?.className ?? ""}`}
										replace
										href={path ? path : "#"}
										key={`nav-${i}`}
									>
										{labelKey ? t(`nav.${labelKey}`) : name}
									</Component>
								)
						)}
					</Box>
					<Box sx={{ flexGrow: 0 }}></Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
	/* return (
		<nav className="fixed top-0 left-0 right-0 z-[1000] py-5 border-b border-primary-subtle bg-[rgba(10,10,10,0.85)] backdrop-blur-xl">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="flex items-center justify-between">
					<Link href="#" className="flex items-center gap-2.5">
						<Image src="/img/logo-three-tone.svg" alt="logo" width={32} height={32} />
						<span className="font-serif text-[1.3rem] font-bold tracking-[0.04em] text-primary">
							AfriGold Hub
						</span>
					</Link>

					<ul className="hidden md:flex gap-10 items-center list-none">
						{["About", "Operations", "Gallery", "Invest", "FAQ"].map((item) => (
							<li key={item}>
								<Link
									href={`#${item.toLowerCase()}`}
									className="text-sm font-light text-[#faf5ec] tracking-[0.03em] hover:text-primary transition-colors"
								>
									{item}
								</Link>
							</li>
						))}
					</ul>

					<div className="flex gap-4 items-center">
						<Link
							href="#faq"
							className="text-sm text-[#f3bd27] border border-[rgba(201,168,76,0.15)] px-5 py-2 rounded hover:border-[#f3bd27] hover:bg-[rgba(201,168,76,0.08)] transition-all"
						>
							Learn More
						</Link>
						<Link
							href="#invest"
							className="text-sm bg-[#f3bd27] text-black font-medium px-5 py-2 rounded hover:bg-primary transition-all border border-[#f3bd27]"
						>
							Partner With Us
						</Link>
					</div>
				</div>
			</div>
		</nav>
	); */
}
