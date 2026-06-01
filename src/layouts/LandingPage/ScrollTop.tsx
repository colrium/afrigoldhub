import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import { useTranslation } from "@/hooks";

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
	children?: React.ReactElement<unknown>;
	querySelector: string;
}

const ScrollTop = (props: Props) => {
	const { children, window, querySelector = "#back-to-top-anchor" } = props;
	const { t, i18n } = useTranslation("common");
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
			querySelector
		);

		if (anchor) {
			anchor.scrollIntoView({
				block: "center",
				behavior: "smooth",
			});
		}
	};

	return (
		<Fade in={trigger}>
			<Box onClick={handleClick} role="presentation" sx={{ position: "fixed", bottom: 16, right: 16 }}>
				<Fab size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
				{children}
			</Box>
		</Fade>
	);
};

export default ScrollTop;
