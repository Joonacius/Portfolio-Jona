import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext); // obtenemos el tema actual

  return (
    <>
      {/* JC - Home Button */}
      <Link
        to="/"
        className="absolute left-[160px] top-[10px] text-center font-migella text-black dark:text-white"
        style={{ fontSize: "50px" }}
      >
        JC
      </Link>

      {/* LIGHT / DARK Toggle Button */}
<div
  onClick={toggleTheme}
  className="absolute left-1/2 transform -translate-x-1/2 text-black dark:text-white font-plus font-extralight cursor-pointer w-fit"
  style={{
    top: "38px",
    fontSize: "20px",
  }}
>
  {theme === "dark" ? "DARK" : "LIGHT"}
</div>

      {/* WORKS, ABOUT, CONTACT */}
      <div
        className="absolute right-24 top-[38px] z-[999] flex gap-14 text-2xl text-black dark:text-white font-plus font-light"
        style={{
          fontSize: "20px",
        }}
      >
        <Link
          to="/works"
          className="relative group font-plus text-black dark:text-white mr-[170px]"
        >
          WORKS
          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>
    </>
  );
}

export default Navbar;
