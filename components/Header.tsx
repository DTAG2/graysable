"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-grey-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/greysable/logo.png"
            alt="GreySable"
            width={20}
            height={20}
            className="group-hover:opacity-90 transition-opacity"
          />
          <span className="text-sm font-bold tracking-tight uppercase">
            Grey<span className="text-grey-500">Sable</span>
          </span>
        </Link>

        <nav className="flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-medium uppercase tracking-widest transition-colors duration-150 ${
                  isActive ? "text-white" : "text-grey-500 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-white" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
