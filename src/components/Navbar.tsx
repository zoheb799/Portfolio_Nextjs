import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ Lucide icons
import Link from "next/link";
import Logo from "../assets/Logo.tsx"; // Assuming this is your custom logo component

interface NavLink {
  id: string;
  title: string;
}

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-30 fixed top-0 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md border-b border-white/10 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Logo />
          <p className="text-white text-xl font-bold tracking-wide">
            ZOH<span className="hidden sm:inline">EB</span>
          </p>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden sm:flex gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-gray-300"
              } hover:text-white text-base font-medium transition-colors duration-200`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden justify-between items-center flex">
          {toggle ? (
            <X
              className="w-7 h-7 text-white cursor-pointer"
              onClick={() => setToggle(false)}
            />
          ) : (
            <Menu
              className="w-7 h-7 text-white cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-80 backdrop-blur-lg z-50 transform ${
            toggle ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 sm:hidden`}
        >
          <div className="flex items-center justify-center p-6 border-b border-white/10">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                setToggle(false);
                window.scrollTo(0, 0);
              }}
            >
              <Logo />
              <p className="text-white text-xl font-bold">
                ZOH<span className="hidden sm:inline">EB</span>
              </p>
            </Link>
            <X
              className="w-7 h-7 text-white cursor-pointer"
              onClick={() => setToggle(false)}
            />
          </div>
          <ul className="flex flex-col gap-6 p-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-gray-300"
                } hover:text-white text-lg font-medium transition-colors duration-200`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
