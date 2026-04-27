import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'The Project', href: '#project' },
  { label: 'Our Region', href: '#coverage' },
  { label: 'Progress', href: '#progress' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg leading-none">ا</span>
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">Afghan Association</p>
            <p className="text-amber-400 text-xs leading-tight">of Puget Sound</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-200 hover:text-amber-400 text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200 shadow"
          >
            Give Now
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-stone-900 border-t border-stone-700 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-200 hover:text-amber-400 text-sm font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold px-5 py-2 rounded-full text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Give Now
          </a>
        </div>
      )}
    </header>
  );
}
