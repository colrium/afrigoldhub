import { createTheme } from "@mui/material/styles";

const gold = {
	50: "#fef9e7",
	100: "#fdf0c0",
	200: "#fbe596",
	300: "#f9d96b",
	400: "#f7ce4a",
	500: "#f3bd27", // primary
	600: "#e0a820",
	700: "#c48f18",
	800: "#a87610",
	900: "#7d5508",
};

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: gold[500],
			light: gold[300],
			dark: gold[700],
			contrastText: "#1A1A1A",
		},
		secondary: {
			main: gold[300],
			light: gold[100],
			dark: gold[600],
			contrastText: "#1A1A1A",
		},
		background: {
			default: "#1A1A1A",
			paper: "#242424",
		},
		text: {
			primary: "#f5f5f5",
			secondary: "#a0a0a0",
		},
		divider: "rgba(243,189,39,0.15)",
		error: { main: "#f44336" },
		warning: { main: "#ff9800" },
		success: { main: "#66bb6a" },
		info: { main: "#29b6f6" },
	},
	typography: {
		fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
		h1: { color: gold[500], fontWeight: 700 },
		h2: { color: gold[400], fontWeight: 700 },
		h3: { color: gold[300], fontWeight: 600 },
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: "8px",
					textTransform: "none",
					fontWeight: 600,
				},
				containedPrimary: {
					backgroundColor: gold[500],
					color: "#1A1A1A",
					"&:hover": {
						backgroundColor: gold[600],
					},
				},
				outlinedPrimary: {
					borderColor: gold[500],
					color: gold[500],
					"&:hover": {
						borderColor: gold[400],
						backgroundColor: "rgba(243,189,39,0.08)",
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: "none",
					backgroundColor: "#242424",
					borderRadius: "12px",
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: "#242424",
					border: "1px solid rgba(243,189,39,0.1)",
					borderRadius: "12px",
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: "rgba(243,189,39,0.15)",
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					"& .MuiOutlinedInput-root": {
						"& fieldset": {
							borderColor: "rgba(243,189,39,0.3)",
						},
						"&:hover fieldset": {
							borderColor: gold[500],
						},
						"&.Mui-focused fieldset": {
							borderColor: gold[500],
						},
					},
					"& .MuiInputLabel-root.Mui-focused": {
						color: gold[500],
					},
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "#1A1A1A",
					borderBottom: "1px solid rgba(243,189,39,0.15)",
					boxShadow: "none",
				},
			},
		},
	},
});

export { gold };
export default theme;
