import { Users, Heart, Globe } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Community First',
    description:
      'We are a grassroots organization founded by Afghan families, for Afghan families — rooted in the belief that belonging is built together.',
  },
  {
    icon: Heart,
    title: 'Cultural Preservation',
    description:
      'Our center will be a living space for Afghan language, arts, traditions, and heritage — ensuring future generations stay connected to their roots.',
  },
  {
    icon: Globe,
    title: 'Bridging Two Worlds',
    description:
      'We help newly arrived Afghans navigate American life while celebrating the rich culture and values we bring to the Pacific Northwest.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Afghan Association <br /> of Puget Sound
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              The Afghan Association of Puget Sound represents thousands of Afghan families
              who have made the greater Seattle area their home. From longtime residents
              to recently resettled families, our community is vibrant, resilient, and
              deeply committed to one another.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              For years, we have gathered in homes, parks, and borrowed halls. Now, we
              are working toward something permanent — a dedicated space where every
              Afghan family in our region can find community, support, and belonging.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-bold text-amber-600">300+</p>
                <p className="text-stone-500 text-sm mt-1">Afghan families served</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-amber-600">7</p>
                <p className="text-stone-500 text-sm mt-1">Cities in our region</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-amber-600">2021</p>
                <p className="text-stone-500 text-sm mt-1">Community founded</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-5 p-6 rounded-2xl bg-stone-50 hover:bg-amber-50 transition-colors duration-200 border border-stone-100"
              >
                <div className="shrink-0 w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center shadow">
                  <value.icon className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="text-stone-900 font-semibold text-lg mb-1">{value.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
