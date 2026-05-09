import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
	return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-2 border-l shimmer-top">
            <Typography variant="h1" className="font-bold">
                404
            </Typography>
            <Typography variant="h6" className="text-gray-600">
                Page not found
            </Typography>
            <Button component={Link} href="/" variant="contained">
                Go Home
            </Button>
        </div>
	);
}
