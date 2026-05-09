import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function ServerError() {
	return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-2">
            <h1 className="text-4xl font-bold">
                500
            </h1>
            <h6 className="text-base text-gray-600">
                Internal server error
            </h6>
            <Link
                href="/"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Go Home
            </Link>
        </div>
	);
}
