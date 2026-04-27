import { BookOpen, Utensils, Music, Briefcase, Baby, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Education & Tutoring',
    description: 'After-school programs, language classes in Dari and Pashto, and adult literacy support.',
  },
  {
    icon: Utensils,
    title: 'Community Dining Hall',
    description: 'A gathering space for Eid celebrations, Nowruz, weddings, and weekly community meals.',
  },
  {
    icon: Music,
    title: 'Cultural Arts Center',
    description: 'Space for traditional Afghan music, dance, storytelling, and visual arts exhibitions.',
  },
  {
    icon: Briefcase,
    title: 'Career & Business Services',
    description: 'Job placement assistance, small business support, and professional development workshops.',
  },
  {
    icon: Baby,
    title: 'Youth & Family Programs',
    description: 'Childcare, youth sports, mentorship programs, and family counseling services.',
  },
  {
    icon: HeartHandshake,
    title: 'Resettlement Support',
    description: 'Assistance navigating housing, healthcare, legal resources, and government services.',
  },
];

export default function Project() {
  return (
    <section id="project" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Our Vision
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The Afghan Community Center
          </h2>
          <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We are planning and fundraising for a permanent, purpose-built community center
            to serve Afghan families across the greater North Seattle and South Snohomish
            County region. This will be a place of gathering, learning, healing, and joy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-amber-600/40 rounded-2xl p-6 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-amber-600/20 group-hover:bg-amber-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200">
                <feature.icon className="text-amber-400 group-hover:text-white" size={22} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-600 rounded-3xl p-10 md:p-14 text-center">
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Target: $2,500,000
          </h3>
          <p className="text-amber-100 text-lg max-w-2xl mx-auto mb-8">
            We are raising funds to purchase and develop a facility of approximately
            10,000–15,000 sq ft in the North Seattle / South Snohomish County corridor.
            Every dollar brings us closer to breaking ground.
          </p>
          <a
            href="#donate"
            className="inline-block bg-white text-amber-700 font-bold px-10 py-4 rounded-full hover:bg-amber-50 transition-colors duration-200 shadow-lg"
          >
            Contribute to the Fund
          </a>
        </div>
      </div>
    </section>
  );
}
