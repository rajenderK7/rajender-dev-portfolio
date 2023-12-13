"use client";

import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";
import { usePathname } from "next/navigation";

interface NavItemI {
  title: string;
  path: string;
}

const navItems: NavItemI[] = [
  { title: "home", path: "/" },
  { title: "projects", path: "/projects" },
  { title: "blog", path: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center max-w-3xl w-full mx-auto justify-between border-b-2 p-4 lg:px-0 sticky top-0 bg-background z-10">
      <div className="flex gap-4">
        {navItems.map((n) => {
          return (
            <Link
              key={n.path}
              className={
                pathname === n.path
                  ? "underline underline-offset-4"
                  : "" + "hover:underline underline-offset-4"
              }
              href={n.path}
            >
              {n.title}
            </Link>
          );
        })}
      </div>
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
