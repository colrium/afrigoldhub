import { Box } from "@mui/material";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LandingPageLayout({ children }: { children: ReactNode }) {
	return (
		<Box className="flex flex-col min-h-screen bg-gray-50">
			<Navbar />
			<main className="flex-1 dark">{children}</main>
			<Footer />
		</Box>
	);
}
