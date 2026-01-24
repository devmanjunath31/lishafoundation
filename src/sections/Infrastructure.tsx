import { Building, Monitor, Car, Presentation, Armchair, MapPin } from 'lucide-react';

const Infrastructure = () => {
  const facilities = [
    {
      icon: Building,
      title: 'Main Office',
      details: ['13 x 17 sq ft workspace', 'Located in Doddabidare', 'Administrative operations'],
    },
    {
      icon: Presentation,
      title: 'Training Hall',
      details: ['50 x 60 sq ft rental space', 'Capacity for 50+ people', 'Modern training facilities'],
    },
    {
      icon: Monitor,
      title: 'Technology Infrastructure',
      details: ['3 Desktop computers', '1 Laptop', '1 Projector & Camera', '1 Printer/Scanner'],
    },
    {
      icon: Armchair,
      title: 'Furniture & Equipment',
      details: ['50 Table & Chair sets', 'Conference facilities', 'Office furniture'],
    },
    {
      icon: Car,
      title: 'Vehicles',
      details: ['2 Two-wheelers', 'For field visits', 'Community outreach'],
    },
    {
      icon: MapPin,
      title: 'Field Operations',
      details: ['Coverage across 50+ villages', 'Mobile service points', 'Community centers'],
    },
  ];

  return (
    <section id="infrastructure" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Infrastructure & Facilities
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Well-equipped facilities to support our community development programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{facility.title}</h3>
                </div>
                <ul className="space-y-2">
                  {facility.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Lisha Charitable Seva Trust (R)</strong><br />
                    Doddabidare, Chikkabidare (Post)<br />
                    C N Halli Tq, Tumkur Dist.<br />
                    Karnataka State, Pin - 572228
                  </span>
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <Monitor className="w-20 h-20 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Modern Facilities</h4>
              <p className="text-gray-700">
                Our infrastructure is designed to support effective program delivery and
                community engagement across all our operational areas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-green-600 rounded-xl p-6 text-white text-center">
            <p className="text-4xl font-bold mb-2">13x17</p>
            <p className="text-green-100">Main Office Space (sq ft)</p>
          </div>
          <div className="bg-green-600 rounded-xl p-6 text-white text-center">
            <p className="text-4xl font-bold mb-2">50x60</p>
            <p className="text-green-100">Training Hall (sq ft)</p>
          </div>
          <div className="bg-green-600 rounded-xl p-6 text-white text-center">
            <p className="text-4xl font-bold mb-2">50+</p>
            <p className="text-green-100">Training Capacity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
