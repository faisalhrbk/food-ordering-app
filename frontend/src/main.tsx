import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthOProviderWithNavigate from "./auth/AuthOProviderWithNavigate";
createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<AuthOProviderWithNavigate>
			<App />
		</AuthOProviderWithNavigate>
	</BrowserRouter>
);
