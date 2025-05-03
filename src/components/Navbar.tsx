import React, { useEffect, useState } from "react";
import Menu from "../assets/Menu";
import Close from "../assets/close";
import Logo from "../assets/Logo.svg";
import Link from "next/link";

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
      className={`w-full z-10 flex items-center justify-center py-5 fixed top-0 ${
        scrolled ? "bg-black bg-opacity-[5%] backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={Logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex justify-center items-center">
            ZOH<span className="sm:block">EB</span>
          </p>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <Close
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(false)}
            />
          ) : (
            <Menu
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
        </div>

        {/* Sidebar for Mobile View */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-primary1 z-20 transform ${
            toggle ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 sm:hidden`}
        >
          <div className="flex justify-between items-center p-5">
            {/* Logo in Sidebar */}
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                setToggle(false);
                window.scrollTo(0, 0);
              }}
            >
              <img src={Logo} alt="Logo" className="w-9 h-9 object-contain" />
              <p className="text-white text-[18px] font-bold cursor-pointer">
                ZOH<span className="sm:block">EB</span>
              </p>
            </Link>

            {/* Close Icon in Sidebar */}
            <Close
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(false)}
            />
          </div>

          {/* Sidebar Nav Links */}
          <ul className="list-none flex flex-col gap-8 p-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
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
