"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md bg-[#f6f3ec]" : "bg-[#f6f3ec]"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-5">
        {/* Logo */}
        <Link href="#hero" className="text-lg font-semibold text-[#40403e]">
          Dr. Serena Blake
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-[#40403e] font-medium">
          <a href="#services" className="hover:text-[#40403e]">
            Services
          </a>
          <a href="#about" className="hover:text-[#40403e]">
            About
          </a>
          <a href="#fee" className="hover:text-[#40403e]">
            Rates
          </a>
          <a href="#faq" className="hover:text-[#40403e]">
            FAQs
          </a>
          <a href="#footer" className="hover:text-[#40403e]">
            Contact
          </a>
        </nav>

        {/* Get Started */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-[#40403e] text-white px-4 py-2 rounded-md hover:bg-[#40403e] text-sm font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
