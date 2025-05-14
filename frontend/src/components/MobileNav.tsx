import { CircleUserRound, Menu } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
	const { user, isAuthenticated, loginWithRedirect } = useAuth0();
	return (
		<Sheet>
			<SheetTrigger className="p-2">
				<Menu className="text-orange-500 h-6 w-6" />
			</SheetTrigger>
			<SheetContent className="space-y-3 bg-white border-l border-orange-200">
				<SheetTitle className="text-xl font-bold text-orange-500">
					{isAuthenticated ? (
						<span className="flex items-center gap-2">
							<CircleUserRound className="text-orange-500" />
							<span>{user?.name}</span>
						</span>
					) : (
						"Welcome to orangePanda.com"
					)}
				</SheetTitle>
				<Separator className="bg-orange-200" />
				<SheetDescription className="flex py-4 flex-col ">
					{isAuthenticated ? (
						<MobileNavLinks />
					) : (
						<Button 
							onClick={() => loginWithRedirect()}
							className="flex-1 font-bold bg-orange-500 hover:bg-orange-800 text-white py-2 cursor-pointer"
						>
							Login
						</Button>
					)}
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
