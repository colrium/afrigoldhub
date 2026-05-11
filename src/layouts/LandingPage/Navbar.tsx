import { useState, useEffect } from "react";
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
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

import { useTranslation } from "next-i18next/pages";
import { landingPageNavs } from "@/config/nav";
import { useRouter } from "next/router";
import useSetState from "@/hooks/useSetState";
import { locales } from "@/config";
import { Avatar } from "@mui/material";



export default function Navbar() {
	const router = useRouter();
	const { t, i18n } = useTranslation("common");
    const [state, setState] = useSetState({
		drawerOpen: false,
		isWindowScrolled: false,
		languageMenuAnchor: null,
	} as {
		drawerOpen: boolean;
		isWindowScrolled: boolean;
		languageMenuAnchor: null | HTMLElement;
	});
    
    
    const localeObj = locales.find((l) => l.code === router.locale) || locales[0];

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

	useEffect(() => {
		const handleScroll = () => {
			setState({ isWindowScrolled: window.scrollY > 48 });
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleDrawerToggle = () => {
		setState({ drawerOpen: !state.drawerOpen });
	};

	const handleLanguageChange = (newLocale: string) => {
		onToggleLanguageClick(newLocale);
	};

	const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setState({ languageMenuAnchor: event.currentTarget });
	};

	const handleLanguageMenuClose = () => {
		setState({ languageMenuAnchor: null });
	};

	const handleLanguageSelect = (locale: string) => {
		handleLanguageChange(locale);
		handleLanguageMenuClose();
	};

	return (
		<>
			<AppBar
				position="sticky"
				// 'elevation={0}' removes the default shadow for a cleaner look
				elevation={0}
				classes={{
					root: `transition-all duration-300 ${
						state.isWindowScrolled
							? "bg-surface! bg-opacity-30! backdrop-blur-lg! border-b shadow-xl border-primary/20"
							: "bg-surface!"
					}`,
				}}
				// className={`transition-all duration-300 ${
				// 	state.isWindowScrolled
				// 		? "bg-surface! bg-opacity-30! backdrop-blur-lg! border-b shadow-xl border-primary/20"
				// 		: "bg-transparent!"
				// }`}
			>
				<Container maxWidth="xl">
					<Toolbar disableGutters className={`bg-transparent!`}>
						{/* Drawer Toggle Button - Visible only on small devices */}

						<IconButton
							onClick={handleDrawerToggle}
							classes={{ root: "md:hidden! mr-4!" }}
							sx={{ color: "inherit" }}
						>
							<MenuIcon />
						</IconButton>

						<Link href="/" className="flex items-center gap-2">
							<Image
								className="hidden md:flex md:mr-1"
								src="/img/logo-three-tone.svg"
								alt="logo"
								width={32}
								height={32}
							/>
							<Typography
								variant="h5"
								noWrap
								className="mr-2 flex font-mono font-bold text-primary-500  text-inherit no-underline"
							>
								{t("site.title")}
							</Typography>
						</Link>

						<Box className="hidden md:flex flex-1 md:flex-grow md:gap-4 md:items-center md:justify-end">
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
											className={`text-sm mr-4 no-underline! font-light tracking-[0.03em] hover:text-primary-500 transition-colors ${linkProps?.className ?? ""}`}
											href={path ? path : "#"}
											key={`nav-${i}`}
										>
											{labelKey ? t(`nav.${labelKey}`) : name}
										</Component>
									)
							)}
						</Box>

						{/* Language Toggle - Visible on all devices */}
						<Box className="md:hidden flex-grow" />
						<Box className="flex items-center gap-2">
							<Avatar
								onClick={handleLanguageMenuOpen}
								className="mx-4  cursor-pointer"
								sx={{ width: 24, height: 24 }}
								src={localeObj.icon}
								alt={localeObj.name}
								title={t("changeLanguage")}
							/>
							<Menu
								anchorEl={state.languageMenuAnchor}
								open={Boolean(state.languageMenuAnchor)}
								onClose={handleLanguageMenuClose}
							>
								{locales.map((locale) => (
									<MenuItem
										key={locale.code}
										onClick={() => handleLanguageSelect(locale.code)}
										selected={router.locale === locale.code}
									>
										<Image
											className="mr-2"
											width={14}
											height={10}
											src={locale.icon}
											alt={locale.name}
										/>
										{locale.name}
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			{/* Mobile Drawer */}
			<Drawer
				anchor="left"
				open={state.drawerOpen}
				className="block md:hidden"
				onClose={handleDrawerToggle}
			>
				<Box
					sx={{
						width: 280,
						p: 2,
					}}
				>
					{/* Close Button */}
					<IconButton
						onClick={handleDrawerToggle}
						sx={{
							minWidth: "auto",
							p: 0,
							mb: 2,
							color: "inherit",
						}}
					>
						<CloseIcon />
					</IconButton>

					{/* Mobile Navigation Links */}
					<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
										key={`mobile-nav-${i}`}
										href={path ? path : "#"}
										onClick={handleDrawerToggle}
										sx={{
											py: 1,
											px: 2,
											borderRadius: 1,
											"&:hover": {
												backgroundColor: "rgba(0, 0, 0, 0.05)",
											},
										}}
										className="no-underline"
									>
										{labelKey ? t(`nav.${labelKey}`) : name}
									</Component>
								)
						)}
					</Box>

					{/* Mobile Language Toggle */}
					{/* <Box sx={{ mt: 3, pt: 2, borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}>
						<Button
							onClick={() => {
								handleLanguageChange(router.locale === "en" ? "de" : "en");
							}}
							sx={{
								textTransform: "none",
								border: "1px solid currentColor",
								color: "inherit",
							}}
						>
							Switch to {router.locale === "en" ? "Deutsch" : "English"}
						</Button>
					</Box> */}
				</Box>
			</Drawer>
		</>
	);
}
