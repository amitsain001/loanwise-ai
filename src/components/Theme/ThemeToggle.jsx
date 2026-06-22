import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import {
  useTheme,
} from "/src/Context/ThemeContext";

const ThemeToggle = () => {
  const {
    dark,
    setDark,
  } = useTheme();

  return (
    <button
      onClick={() =>
        setDark(!dark)
      }
      className="
      text-xl
      cursor-pointer
      "
    >
      {dark ? (
        <FaSun />
      ) : (
        <FaMoon />
      )}
    </button>
  );
};

export default ThemeToggle;