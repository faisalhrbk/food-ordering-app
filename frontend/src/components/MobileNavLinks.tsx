import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
	const { logout } = useAuth0();
	return (
		<div className="flex flex-col w-full gap-4 py-3">
			<Link
				className="text-base w-full text-center py-2 px-3 font-bold hover:text-orange-500 transition-colors"
				to={"/user-profile"}
			>
				User Profile
			</Link>
			<Button onClick={() => logout()} className="text-base w-full py-2 px-3 font-bold bg-orange-500 hover:bg-orange-600 text-white transition-colors">
				Logout
			</Button>
		</div>
	);
};

export default MobileNavLinks;
