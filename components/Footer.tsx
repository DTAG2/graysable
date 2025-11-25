import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-grey-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center" style={{ backgroundColor: "#000000" }}>
                <img
                  src="/greysable/logo.png"
                  alt="GreySable"
                  width={20}
                  height={20}
                />
              </div>
              <span className="text-sm font-bold tracking-tight uppercase">
                Grey<span className="text-grey-500">Sable</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-grey-500 leading-relaxed max-w-xs">
              Precision automation systems. Built to last.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-grey-400 mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-grey-500 hover:text-white transition-colors duration-150"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-grey-500 hover:text-white transition-colors duration-150"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-grey-500 hover:text-white transition-colors duration-150"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-grey-400 mb-4">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              <span className="text-sm text-grey-500">Custom Automation</span>
              <span className="text-sm text-grey-500">Hardware Design</span>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-grey-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-grey-600 uppercase tracking-wider">
            &copy; {new Date().getFullYear()} GreySable
          </p>
          <p className="text-xs text-grey-700">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
