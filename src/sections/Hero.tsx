import { Heart, Users, Leaf, TrendingUp, ArrowRight, Sparkles, Award, BookOpen, Play } from 'lucide-react';

import heroImage from '../assets/NGO-LOGO.jpg';

const Hero = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Beneficiaries Reached', color: 'from-blue-500 to-cyan-500' },
    { icon: Leaf, value: '50+', label: 'Villages Covered', color: 'from-green-500 to-emerald-500' },
    { icon: Heart, value: '15+', label: 'Ongoing Projects', color: 'from-rose-500 to-pink-500' },
    { icon: TrendingUp, value: '1+', label: 'Years of Service', color: 'from-amber-500 to-orange-500' },
  ];

  const achievements = [
    { icon: Users, title: 'Recent Achievement', description: 'Successfully established 5 Self Help Groups impacting 150 women in rural areas' },
    { icon: Leaf, title: 'Latest Project', description: 'Watershed development project covering 500 acres in 3 villages' },
    { icon: BookOpen, title: 'Community Impact', description: '25 school dropout children rejoined education programs this year' },
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Main Hero Area */}
      <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-20">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-0 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />

        {/* Floating decorative shapes */}
        <div className="absolute top-32 left-10 w-4 h-4 bg-green-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-48 right-20 w-3 h-3 bg-emerald-500 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-64 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Serving Since 2025
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">
                  Lisha Charitable
                </span>
                <br />
                <span className="text-gray-900">Seva Trust</span>
              </h1>

              {/* Tagline */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6 font-light">
                Selfless Service to <span className="text-green-600 font-medium">Community</span>
              </p>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Empowering communities through education, women empowerment, sustainable agriculture,
                and livelihood programs across Tumkur District, Karnataka.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="#donate"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-60 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5 text-white"
                >
                  Donate Now
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#get-involved"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 border-2 border-green-200 rounded-full font-semibold hover:border-green-600 hover:bg-green-50 transition-all duration-300"
                >
                  Become a Volunteer
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Trust Info */}
              <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-600" />
                  <span>Registered Trust</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>Huliyar, Tumkur District</span>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative order-1 lg:order-2">
              {/* Main Image Container */}
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-20 blur-xl" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Lisha Charitable Seva Trust Community Work"
                    className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Play button overlay (optional visual element) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-green-600 ml-1" />
                    </div>
                  </div>

                  {/* Bottom text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xl sm:text-2xl font-bold mb-1">Transforming Lives</p>
                    <p className="text-green-200 text-sm sm:text-base">Building stronger communities together</p>
                  </div>
                </div>

                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">10K+</p>
                      <p className="text-xs text-gray-500">Lives Impacted</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hidden sm:flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Est. 2025
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Achievement Banner */}
      <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white py-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Impact at a Glance</h2>
            <p className="text-green-200">Making a difference every day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-green-100 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
