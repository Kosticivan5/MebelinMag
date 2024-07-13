import { Bird } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="hidden lg:flex justify-center items-center  p-2 cursor-pointer"
    >
      <Bird className="w-8 h-8 text-primary" />
    </Link>
  );
};
export default Logo;
