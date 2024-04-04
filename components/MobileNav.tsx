"use client";
import { navLinks, socialLinks } from "@/constants";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="tablet:hidden">
      <button
        onClick={toggleMenu}
        className="text-grey-700 hover:text-purple transition-colors"
      >
        <Menu />
      </button>
      <div
        className={`w-full h-full flex flex-col bg-peach-600 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? "transition-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full items-center justify-between h-20 max-width border-b border-peach">
          <Link href={"/"}>
            <h5 className="text-purple text-xl font-semibold">
              Bereket Dinku.
            </h5>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-grey-700 hover:text-purple transition-colors"
          >
            <X />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-10">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index} onClick={toggleMenu}>
                <NavLink
                  href={link.url}
                  label={link.label}
                  className="text-3xl"
                />
              </li>
            ))}
            <ul>
              <Link href={"/contact"} className="btn btn-primary">
                <Phone size={24} />
              </Link>
            </ul>
          </ul>
        </nav>
        <div className="w-full h-20 flex items-center justify-between max-width border-t border-peach">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-grey-700 hover:text-purple transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
