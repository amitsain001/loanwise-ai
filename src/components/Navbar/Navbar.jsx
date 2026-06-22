import ThemeToggle from "../Theme/ThemeToggle";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="
      fixed
      w-full
      top-0
      z-50
      glass
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
      >
        <div className="flex items-center gap-8">
        <h1
            className="
            text-2xl
            font-bold
            gradient-text
            "
        >
            LoanWise AI
        </h1>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition hover:text-cyan-400 ${
              isActive
                ? "text-cyan-400 font-semibold"
                : ""
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/compare"
          className={({ isActive }) =>
            `transition hover:text-cyan-400 ${
              isActive
                ? "text-cyan-400 font-semibold"
                : ""
            }`
          }
        >
          Compare
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `transition hover:text-cyan-400 ${
              isActive
                ? "text-cyan-400 font-semibold"
                : ""
            }`
          }
        >
          Dashboard
        </NavLink>
        
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;