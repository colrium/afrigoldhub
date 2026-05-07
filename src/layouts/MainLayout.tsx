import { Box } from "@mui/material";
import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <header className="border-b border-gray-200 p-2">
                {/* Navbar goes here */}
                Navbar
            </header>
            <main className="flex-1 p-3">
                {children}
            </main>
            <footer className="border-t border-gray-200 p-2">
                {/* Footer goes here */}
                Footer
            </footer>
        </div>
	);
}
