import { Header, Navbar } from "@/components";
import { Outlet, NavLink } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        <Outlet />
      </div>
    </>
  );
};
export default HomeLayout;
