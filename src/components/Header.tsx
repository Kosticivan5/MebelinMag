import { useNavigate, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  // temp
  const [user, setUser] = useState<{ username: string } | null>({
    username: "demo user",
  });

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2">
        {/* USER */}
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm capitalize">
              здравствуйте, {user.username}
            </p>
            <Button
              variant={"link"}
              size={"sm"}
              className="capitalize"
              onClick={handleLogout}
            >
              выйти
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center -mr-4">
            <Button asChild variant={"link"} size={"sm"}>
              <Link to={"/login"} className="capitalize">
                войти / гость
              </Link>
            </Button>
            <Button asChild variant={"link"} size={"sm"}>
              <Link to={"/register"} className="capitalize">
                зарегистрироваться
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
