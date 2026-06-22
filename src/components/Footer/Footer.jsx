import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
      border-t
      border-slate-800
      py-8
      mt-20
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        px-6
        "
      >
        <p>
          © 2026 LoanWise AI
        </p>

        <div className="text-sm text-gray-400">
          <p>Amit Sain | amit2976297@gmail.com</p>
        </div>

        <div
          className="
          flex
          gap-4
          text-xl
          "
        >
          <FaGithub />

          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;