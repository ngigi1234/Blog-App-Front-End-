import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-indigo-100 py-7 flex flex-col justify-center items-center gap-6">
      <div className="flex justify-center items-center gap-4 flex-col flex-wrap md:gap-8">
        <NavLink to={"/"}>
          <img
            src="/logo.png"
            alt="icon"
            className="w-32 md:w-32"
          />
        </NavLink>
        <div className="flex flex-row justify-center items-center gap-6 md:gap-10 text-base md:text-lg uppercase font-gara flex-wrap text-blue-800">
          <NavLink to={"/"}>
            <span className="hover:text-black ">Home</span>
          </NavLink>
          <NavLink to={"/about"}>
            <span className="hover:text-black">About</span>
          </NavLink>
          <NavLink to={"/blog"}>
            <span className="hover:text-black">Blogs</span>
          </NavLink>
          <NavLink to={"/developer"}>
            <span className="hover:text-black">Developers</span>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center gap-2 mx-3 text-base">
        <span>Copyright © 2024 All rights reserved</span>

      </div>
    </footer>
  );
};
export default Footer;
