import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="GraySable"
                width={20}
                height={20}
              />
              <span className="text-sm font-bold tracking-tight uppercase">
                Gray<span className="text-gray-500">Sable</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
              Custom automation. Integrated intelligently.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-gray-500 hover:text-white transition-colors duration-150"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-500 hover:text-white transition-colors duration-150"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-500 hover:text-white transition-colors duration-150"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              <span className="text-sm text-gray-500">Custom Automation</span>
              <span className="text-sm text-gray-500">Hardware Design</span>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 uppercase tracking-wider">
            &copy; {new Date().getFullYear()} GraySable
          </p>
          <p className="text-xs text-gray-700">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
