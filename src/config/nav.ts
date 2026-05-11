import Button from "@mui/material/Button";
interface NavItem {
	name: string;
	path: string;
	excludeOnMainNav?: boolean;
	linkProps?: { className: string };
	labelKey?: string;
    Component?: React.ComponentType<never>;
	props?: { variant: "outlined" | "contained"; color: string };
}

export const landingPageNavs: NavItem[] = [
	{ name: "home", path: "/", excludeOnMainNav: true, linkProps: { className: "text-center" } },
	{ name: "about", path: "/about", labelKey: "about" },
	{ name: "contact-us", path: "/contact-us", labelKey: "contactUs" },
	{ name: "operations", path: "/operations", labelKey: "operations" },
	{ name: "gallery", path: "/gallery", labelKey: "gallery" },
	{
		name: "learn",
		path: "/learn",
		labelKey: "learnMore",
		Component: Button,
		props: { variant: "outlined", color: "primary" },
	},
	{
		name: "invest",
		path: "/invest",
		labelKey: "partnerWithUs",
		Component: Button,
		props: { variant: "contained", color: "primary" },
	},
];
