import { CheckCircle, Circle, Clock } from 'lucide-react';

const milestones = [
  {
    phase: 'Phase 1',
    title: 'Community Organization',
    description: 'Established the Afghan Association of Puget Sound, registered as a nonprofit, and formed our founding board of directors.',
    status: 'complete',
  },
  {
    phase: 'Phase 2',
    title: 'Needs Assessment & Planning',
    description: 'Conducted community surveys, held town halls across the region, and developed a comprehensive needs assessment report.',
    status: 'complete',
  },
  {
    phase: 'Phase 3',
    title: 'Fundraising Campaign',
    description: 'Launched our capital campaign with a goal of $2.5 million. Currently accepting donations from community members, businesses, and foundations.',
    status: 'active',
  },
  {
    phase: 'Phase 4',
    title: 'Site Acquisition',
    description: 'Identify and purchase a property centrally located to serve all communities along the I-5 / SR-99 corridor.',
    status: 'pending',
  },
  {
    phase: 'Phase 5',
    title: 'Design & Permitting',
    description: 'Engage an architect to design the facility reflecting Afghan cultural aesthetics, and obtain all necessary permits from the city.',
    status: 'pending',
  },
  {
    phase: 'Phase 6',
    title: 'Construction & Grand Opening',
    description: 'Break ground, complete construction, and open the doors to the Afghan Association Center of Puget Sound.',
    status: 'pending',
  },
];

export default function Progress() {
  return (
    <section id="progress" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Where We Stand
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Project Milestones
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Here is a transparent look at where we are in our journey toward opening the
            doors of our community center.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-stone-200 md:left-1/2 md:-translate-x-0.5" />

          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.phase}
                className={`relative flex gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="shrink-0 relative z-10 flex items-start md:items-center md:justify-center md:w-1/2">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${
                      milestone.status === 'complete'
                        ? 'bg-emerald-600'
                        : milestone.status === 'active'
                        ? 'bg-amber-600'
                        : 'bg-stone-200'
                    }`}
                  >
                    {milestone.status === 'complete' ? (
                      <CheckCircle className="text-white" size={22} />
                    ) : milestone.status === 'active' ? (
                      <Clock className="text-white" size={22} />
                    ) : (
                      <Circle className="text-stone-400" size={22} />
                    )}
                  </div>
                </div>

                <div
                  className={`flex-1 pb-2 md:w-1/2 ${
                    index % 2 === 0
                      ? 'md:pr-12 md:text-right'
                      : 'md:pl-12'
                  }`}
                >
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      milestone.status === 'complete'
                        ? 'bg-emerald-100 text-emerald-700'
                        : milestone.status === 'active'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {milestone.status === 'complete'
                      ? 'Completed'
                      : milestone.status === 'active'
                      ? 'In Progress'
                      : 'Upcoming'}
                  </div>
                  <p className="text-amber-600 text-xs font-semibold uppercase tracking-wide mb-1">
                    {milestone.phase}
                  </p>
                  <h3 className="text-stone-900 font-bold text-lg mb-2">{milestone.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
