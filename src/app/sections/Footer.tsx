import { mySocials } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black/80 backdrop-blur-md border-t border-gray-700/50 mt-20 px-6 py-8 text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Legal */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-sm">
          <p className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</p>
          <span>|</span>
          <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex gap-4">
          {mySocials.map((social, index) => (
            <Link
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Image src={social.icon} alt={social.name} height={35} width={35} className="filter invert text-white dark:invert-0" />
            </Link>
          ))}
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-gray-500 md:text-right">
          © 2025 Uday Singh. All rights reserved.
        </div>
      </div>

      {/* Bottom border */}
      <div className="mt-6 bg-gradient-to-r from-transparent via-gray-700 to-transparent h-[1px] w-full" />
    </footer>
  );
};
