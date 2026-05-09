import Image from "next/image";
import Link from "@/components/Link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { useTranslation } from "next-i18next/pages";
import { landingPageNavs } from "@/config/nav";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];


export default function Navbar() {
    const { t } = useTranslation("common");
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};


    return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Link href="#" className="flex items-center gap-2.5">
						<Image src="/img/logo-three-tone.svg" alt="logo" width={32} height={32} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            className="hidden md:flex font-serif mr-2 text-[1.3rem] font-bold tracking-[0.04em] text-primary"
                        >
                            {t("site.title")}
                        </Typography>
					</Link>
					<Image
						className="xs:hidden md:flex md:mr-1"
						src="/img/logo-three-tone.svg"
						alt="logo"
						width={32}
						height={32}
					/>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: "block", md: "none" } }}
						>
							{landingPageNavs.map(
								({ excludeOnMainNav, labelKey, name, path, linkProps }, i) =>
									!excludeOnMainNav && (
										<Link
											component={MenuItem}
											href={path ? path : "#"}
											className={linkProps?.className || "text-center"}
											passHref
											{...linkProps}
											key={`nav-${i}`}
											onClick={handleCloseNavMenu}
										>
											{labelKey ? t(labelKey) : name}
										</Link>
									)
							)}
						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        className="mr-2 flex md:hidden flex-grow font-mono font-bold tracking-widest text-inherit no-underline"
                    >
                        LOGO
                    </Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{landingPageNavs.map(
							({ excludeOnMainNav, labelKey, name, path, linkProps }, i) =>
								!excludeOnMainNav && (
									<Link
										component={MenuItem}
										href={path ? path : "#"}
										className={linkProps?.className || "text-center"}
										passHref
										{...linkProps}
										key={`nav-${i}`}
										onClick={handleCloseNavMenu}
									>
										{labelKey ? t(labelKey) : name}
									</Link>
								)
						)}
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))}
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
