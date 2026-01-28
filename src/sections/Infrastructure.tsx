import { Building, Monitor, Car, Presentation, Armchair, MapPin, CheckCircle2, Boxes, Navigation } from 'lucide-react';

const Infrastructure = () => {
  const facilities = [
    {
      icon: Building,
      title: 'Main Office',
      details: ['13 x 17 sq ft workspace', 'Located in Doddabidare', 'Administrative operations'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Presentation,
      title: 'Training Hall',
      details: ['50 x 60 sq ft rental space', 'Capacity for 50+ people', 'Modern training facilities'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Monitor,
      title: 'Technology Infrastructure',
      details: ['3 Desktop computers', '1 Laptop', '1 Projector & Camera', '1 Printer/Scanner'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Armchair,
      title: 'Furniture & Equipment',
      details: ['50 Table & Chair sets', 'Conference facilities', 'Office furniture'],
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Car,
      title: 'Vehicles',
      details: ['2 Two-wheelers', 'For field visits', 'Community outreach'],
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50',
    },
    {
      icon: MapPin,
      title: 'Field Operations',
      details: ['Coverage across 50+ villages', 'Mobile service points', 'Community centers'],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
    },
  ];

  const stats = [
    { value: '13x17', label: 'Main Office Space', unit: 'sq ft', color: 'from-blue-500 to-cyan-500' },
    { value: '50x60', label: 'Training Hall', unit: 'sq ft', color: 'from-green-500 to-emerald-500' },
    { value: '50+', label: 'Training Capacity', unit: 'people', color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section id="infrastructure" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Boxes className="w-4 h-4" />
            Our Resources
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Infrastructure & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Well-equipped facilities to support our community development programs and drive meaningful impact
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${facility.color} mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">{facility.title}</h3>

                {/* Details */}
                <ul className="space-y-3">
                  {facility.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 text-transparent bg-clip-text bg-gradient-to-r ${facility.color}`} style={{ color: facility.color.includes('blue') ? '#3b82f6' : facility.color.includes('green') ? '#22c55e' : facility.color.includes('purple') ? '#8b5cf6' : facility.color.includes('amber') ? '#f59e0b' : facility.color.includes('rose') ? '#f43f5e' : '#14b8a6' }} />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative corner */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${facility.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Location Section */}
        <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden mb-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Address */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Navigation className="w-4 h-4" />
                Find Us
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Location</h3>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-lg mb-2">Lisha Charitable Seva Trust (R)</p>
                    <p className="text-green-100 leading-relaxed">
                      Doddabidare, Chikkabidare (Post)<br />
                      C N Halli Tq, Tumkur Dist.<br />
                      Karnataka State, Pin - 572228
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Info Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 shadow-lg">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Modern Facilities</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our infrastructure is designed to support effective program delivery and
                  community engagement across all our operational areas.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">6+</p>
                      <p className="text-gray-500">Facilities</p>
                    </div>
                    <div className="w-px h-10 bg-gray-200" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">50+</p>
                      <p className="text-gray-500">Villages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
