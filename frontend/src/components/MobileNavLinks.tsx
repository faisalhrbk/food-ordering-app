import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileNavLinks = () => {
	return <>
    <Link className="flex bg-white items-center font-bold hover:text-orange-500" to={"/user-profile"}>User Profile</Link>
    <Button className=" flex items-center px-2 font-bold hover:bg-gray-500"></Button></>;
};

export default MobileNavLinks;
