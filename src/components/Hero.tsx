import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/70 to-stone-900/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Afghan Association of Puget Sound
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Building a Home <br />
          <span className="text-amber-400">for Our Community</span>
        </h1>
        <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          We are creating a permanent community center to serve Afghan families across
          North Seattle, Lynnwood, Shoreline, Edmonds, Bothell, Everett, and the
          communities in between.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#project"
            className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-amber-600/30 hover:-translate-y-0.5"
          >
            Learn About the Project
          </a>
          <a
            href="#donate"
            className="border-2 border-white text-white hover:bg-white hover:text-stone-900 font-semibold px-8 py-4 rounded-full transition-all duration-200"
          >
            Support Our Mission
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
