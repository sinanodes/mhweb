"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold tracking-widest uppercase hover:opacity-75 transition-opacity">
          Machinehead
        </Link>
        <div className="flex gap-8">
          <Link href="#work" className="text-white/80 hover:text-white uppercase tracking-wider text-sm transition-colors">
            Work
          </Link>
          <Link href="#about" className="text-white/80 hover:text-white uppercase tracking-wider text-sm transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-white/80 hover:text-white uppercase tracking-wider text-sm transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
