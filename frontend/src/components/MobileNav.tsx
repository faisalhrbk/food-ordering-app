import { Menu } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text-orange-500" />
				<SheetContent className="space-y-3">
					<SheetTitle>Welcome to orangePanda.com</SheetTitle>
					<Separator />
					<SheetDescription className="flex">
						<Button className="flex-1 font-bold bg-orange-500">Login</Button>
					</SheetDescription>
				</SheetContent>
			</SheetTrigger>
		</Sheet>
	);
};

export default MobileNav;
