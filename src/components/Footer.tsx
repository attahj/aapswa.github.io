import { Heart } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'The Project', href: '#project' },
  { label: 'Our Region', href: '#coverage' },
  { label: 'Progress', href: '#progress' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">ا</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">Afghan Association</p>
                <p className="text-amber-400 text-xs leading-tight">of Puget Sound</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm max-w-xs leading-relaxed">
              Building a permanent home for Afghan families across the greater Seattle and
              South Snohomish County region.
            </p>
          </div>

          <div>
            <p className="text-stone-300 font-semibold text-sm mb-4 text-center md:text-left">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-stone-300 font-semibold text-sm mb-3">Support the Mission</p>
            <a
              href="#donate"
              className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-sm"
            >
              Donate Now
            </a>
            <p className="text-stone-500 text-xs mt-4">
              donate@acpugetsound.org<br />
              (206) 555-0000
            </p>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-xs">
            &copy; {new Date().getFullYear()} Afghan Association of Puget Sound. All rights reserved.
          </p>
          <p className="text-stone-500 text-xs flex items-center gap-1">
            Built with <Heart size={11} className="text-amber-500 fill-amber-500" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
