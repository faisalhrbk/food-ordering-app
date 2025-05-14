import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
} from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

const UserNameMenu = () => {
	const { user, logout } = useAuth0();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center gap-2 px-3 font-bold hover:text-orange-500">
				<CircleUserRound className="text-orange-500" />
				{user?.name}
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuItem className="text-sm text-gray-600">
					{user?.email}
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link
						to="/user-profile"
						className="font-bold hover:text-orange-500 cursor-pointer"
					>
						User Profile
					</Link>
				</DropdownMenuItem>

				<Separator className="my-1" />

				<Separator className="my-1" />

				<DropdownMenuItem
					onClick={() => logout()}
					className="font-bold text-white bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 cursor-pointer"
				>
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserNameMenu;
