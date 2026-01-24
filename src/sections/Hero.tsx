import { Heart, Users, Leaf, TrendingUp } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Beneficiaries Reached' },
    { icon: Leaf, value: '50+', label: 'Villages Covered' },
    { icon: Heart, value: '15+', label: 'Ongoing Projects' },
    { icon: TrendingUp, value: '1+', label: 'Years of Service' },
  ];

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Lisha Charitable Seva Trust
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Selfless Service to Community
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Empowering communities through education, women empowerment, sustainable agriculture,
            and livelihood programs across Tumkur District, Karnataka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#donate"
              className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Donate Now
            </a>
            <a
              href="#get-involved"
              className="px-8 py-4 bg-white text-green-600 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Become a Volunteer
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-500/90 flex items-center justify-center">
              <div className="text-center text-white">
                <Users size={80} className="mx-auto mb-4" />
                <p className="text-2xl font-semibold">Transforming Lives, Building Communities</p>
                <p className="text-lg mt-2">Founded on 06-06-2025 in Hurulihal, Tumkur District</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-3">Recent Achievement</h3>
              <p className="text-green-100">
                Successfully established 5 Self Help Groups impacting 150 women in rural areas
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Latest Project</h3>
              <p className="text-green-100">
                Watershed development project covering 500 acres in 3 villages
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
              <p className="text-green-100">
                25 school dropout children rejoined education programs this year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
