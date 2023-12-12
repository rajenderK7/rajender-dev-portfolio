import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";

const Navbar = () => {
  return (
    <nav className="flex items-center max-w-3xl w-full mx-auto justify-between border-b-2 p-4 lg:px-0">
      <div className="flex gap-4">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/projects">
          Projects
        </Link>
        <Link className="hover:underline" href="/blog">
          Blog
        </Link>
      </div>
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
