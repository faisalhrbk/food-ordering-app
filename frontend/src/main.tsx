import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthOProviderWithNavigate from "./auth/AuthOProviderWithNavigate";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<AuthOProviderWithNavigate>
				<App />
			</AuthOProviderWithNavigate>
		</QueryClientProvider>
	</BrowserRouter>
);
