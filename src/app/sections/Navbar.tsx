"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ✅ MenuToggle component
function MenuToggle({ isOpen }: { isOpen: boolean }) {
  return isOpen ? <X /> : <Menu />;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a
            href="/"
            className="text-xl font-semibold text-neutral-300 cursor-pointer hover:text-white transition-colors"
          >
            Uday Singh
          </a>

          {/* ✅ Nav items visible from md and up */}
          <div className="hidden md:flex space-x-8 text-neutral-400">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-white text-neutral-300 transition-colors hover:underline"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-neutral-300 hover:text-white cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <MenuToggle isOpen={isOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="absolute top-full left-0 w-full z-50 bg-black/75 text-white flex flex-col space-y-4 px-6 py-6"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-center hover:text-white hover:underline cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
