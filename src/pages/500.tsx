import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function ServerError() {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			minHeight="100vh"
			gap={2}
		>
			<Typography
				variant="h1"
				fontWeight="bold"
			>
				500
			</Typography>
			<Typography
				variant="h6"
				color="text.secondary"
			>
				Internal server error
			</Typography>
			<Button
				component={Link}
				href="/"
				variant="contained"
			>
				Go Home
			</Button>
		</Box>
	);
}
