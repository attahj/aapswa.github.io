import { MapPin } from 'lucide-react';

const cities = [
  { name: 'North Seattle', note: 'Primary anchor area', highlight: true },
  { name: 'Shoreline', note: 'King County', highlight: false },
  { name: 'Lynnwood', note: 'Snohomish County', highlight: true },
  { name: 'Edmonds', note: 'Snohomish County', highlight: false },
  { name: 'Mountlake Terrace', note: 'Snohomish County', highlight: false },
  { name: 'Bothell', note: 'King / Snohomish County', highlight: true },
  { name: 'Kenmore', note: 'King County', highlight: false },
  { name: 'Mukilteo', note: 'Snohomish County', highlight: false },
  { name: 'Mill Creek', note: 'Snohomish County', highlight: false },
  { name: 'Everett', note: 'Snohomish County', highlight: true },
];

export default function Coverage() {
  return (
    <section id="coverage" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Our Region
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Serving Communities <br /> Across the Corridor
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              The Afghan Association of Puget Sound spans the I-5 corridor from North
              Seattle north to Everett, encompassing dozens of cities and neighborhoods
              that are home to thousands of Afghan families.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Our planned community center will be centrally located to maximize
              accessibility for the greatest number of families — with public transit
              access, ample parking, and proximity to the communities we serve.
            </p>
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-amber-600" size={20} />
                <h3 className="text-stone-900 font-semibold">Site Selection in Progress</h3>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">
                We are currently evaluating properties along the I-5 and SR-99 corridors
                between North Seattle and Lynnwood for our permanent facility. Your
                donations are helping make this possible.
              </p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className={`rounded-xl p-4 border transition-all duration-200 ${
                    city.highlight
                      ? 'bg-amber-600 border-amber-500 text-white'
                      : 'bg-white border-stone-200 hover:border-amber-300 hover:shadow-sm text-stone-900'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <MapPin
                      size={15}
                      className={`mt-0.5 shrink-0 ${city.highlight ? 'text-amber-200' : 'text-amber-600'}`}
                    />
                    <div>
                      <p className={`font-semibold text-sm ${city.highlight ? 'text-white' : 'text-stone-900'}`}>
                        {city.name}
                      </p>
                      <p className={`text-xs mt-0.5 ${city.highlight ? 'text-amber-200' : 'text-stone-400'}`}>
                        {city.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-stone-400 text-sm mt-4 text-center">
              + all cities and neighborhoods in between
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
