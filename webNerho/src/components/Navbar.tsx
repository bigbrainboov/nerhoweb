import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDownloadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDownloadModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-nav relative z-40 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <a
          href="/"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
          aria-label="Nerho Home"
        >
          <img src="/images/nerhoLogo.webp" width="91" height="28" alt="nerho" />
        </a>

        {/* Desktop Nav Zone */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 ml-auto">
          <a href="/terms" className="flex items-center gap-1 hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            Terms &amp; Conditions
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href="/contact"
            aria-current={window.location.pathname.replace(/\/$/, '') === '/contact' ? 'page' : undefined}
            className="flex items-center gap-1 hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            Contact Us
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </nav>

        {/* Primary Action Zone */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={onOpenDownloadModal}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 active:scale-98 shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
          >
            Download the app
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenDownloadModal}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Get App
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3">
          <a href="/terms" className="w-full flex items-center justify-between py-2 text-base font-medium text-slate-800">
            <span>Terms &amp; Conditions</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
          <a href="/contact" className="w-full flex items-center justify-between py-2 text-base font-medium text-slate-800">
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownloadModal();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-blue-600 rounded-xl shadow"
            >
              Download the app
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
