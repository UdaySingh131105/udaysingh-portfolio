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
    <nav className="w-full backdrop-blur-lg bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a
            href="/"
            className="text-xl font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            Uday
          </a>

          {/* ✅ Nav items visible from md and up */}
          <div className="hidden md:flex space-x-8 text-neutral-400">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-neutral-400 hover:text-white"
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
            className="md:hidden bg-black/80 text-neutral-400 px-4 py-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-center hover:text-white transition-colors"
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
