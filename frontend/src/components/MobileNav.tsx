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

const MobileNav = () => {
	const { user, isAuthenticated, loginWithRedirect } = useAuth0();
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text-orange-500" />
				<SheetContent className="space-y-3">
					<SheetTitle>
						{isAuthenticated ? (
							<span className="flex items-center font-bold gap-2">
								<CircleUserRound className="text-orange-500">
									{" "}
									{user?.name}
								</CircleUserRound>
							</span>
						) : (
							"Welcome to orangePanda.com"
						)}
					</SheetTitle>
					<Separator />
					<SheetDescription className="flex">
						{isAuthenticated ? (
							<MobileNavLinks />
						) : (
							<Button className="flex-1 font-bold bg-orange-500">Login</Button>
						)}
					</SheetDescription>
				</SheetContent>
			</SheetTrigger>
		</Sheet>
	);
};

export default MobileNav;
