import { Box, CircularProgress, Typography } from '@mui/material';

export default function Loading({ message = 'Loading...' }: { message?: string }) {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			minHeight="100vh"
			gap={2}
		>
			<CircularProgress />
			<Typography
				variant="body2"
				color="text.secondary"
			>
				{message}
			</Typography>
		</Box>
	);
}
