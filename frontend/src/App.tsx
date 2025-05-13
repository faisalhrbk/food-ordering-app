import { Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<span>home</span>} />
		<Route path="/user-profile" element={<span>profile</span>} />
		<Route path="/*" element={<Navigate to="/" />} />
	</Routes>
);

export default AppRoutes;
