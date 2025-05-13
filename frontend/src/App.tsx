import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";


const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<Layout>CHildren</Layout>} />
		<Route path="/user-profile" element={<span>profile</span>} />
		<Route path="/*" element={<Navigate to="/" />} />
	</Routes>
);

export default AppRoutes;
