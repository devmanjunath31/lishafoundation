import { Target, Eye, Award, Shield, Lightbulb, Users, Heart, Flag, FileCheck, BadgeCheck, Building2, Sparkles } from 'lucide-react';

const About = () => {
  const coreValues = [
    { icon: Shield, title: 'Integrity', description: 'Maintaining highest standards of honesty and transparency' },
    { icon: Award, title: 'Assurance', description: 'Committed to delivering on our promises' },
    { icon: Lightbulb, title: 'Innovation', description: 'Finding creative solutions to community challenges' },
    { icon: Heart, title: 'Humanity', description: 'Compassion and empathy in all our actions' },
    { icon: Users, title: 'Coordinate', description: 'Collaborative approach to community development' },
    { icon: Target, title: 'Excellence', description: 'Striving for quality in every initiative' },
  ];

  const milestones = [
    { year: '2025', event: 'Trust founded in Hurulihal, Tumkur District', icon: Flag, color: 'from-green-500 to-emerald-500' },
    { year: '2025', event: 'Registered under Trust Registration Act 1882', icon: Building2, color: 'from-blue-500 to-cyan-500' },
    { year: '2025', event: 'Obtained 12A and 80G tax exemption certificates', icon: FileCheck, color: 'from-amber-500 to-orange-500' },
    { year: '2025', event: 'Darpan Registration completed (KA/2025/091091)', icon: BadgeCheck, color: 'from-purple-500 to-violet-500' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lisha Charitable Seva Trust is dedicated to empowering rural communities through
            sustainable development programs and selfless service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <Eye className="w-10 h-10 text-green-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To create empowered and self-reliant communities where every individual has access
              to education, sustainable livelihoods, and a dignified life. We envision a future
              where rural areas thrive with prosperity, environmental sustainability, and social equity.
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <Target className="w-10 h-10 text-green-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To implement holistic development programs in education, women empowerment,
              sustainable agriculture, and livelihood generation. We work collaboratively with
              communities, government, and partners to create lasting positive change.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-green-100 rounded-xl p-6 hover:border-green-600 hover:shadow-lg transition-all"
                >
                  <Icon className="w-12 h-12 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Milestones
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our Journey</h3>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-emerald-500 to-green-600" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <div key={index} className="relative flex gap-6 md:gap-8">
                      {/* Icon */}
                      <div className={`relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 group">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${milestone.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                              {milestone.year}
                            </span>
                            <span className="text-xs text-gray-400 font-medium">Step {index + 1}</span>
                          </div>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {milestone.event}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* End marker */}
              <div className="absolute left-6 md:left-8 -bottom-4 w-0.5 h-8 flex items-end justify-center">
                <div className="w-3 h-3 rounded-full bg-green-600 -ml-[5px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Trust Reg. Act 1882', value: 'Registered' },
            { label: 'PAN', value: 'AACTL6698K' },
            { label: '12A Registration', value: 'Active' },
            { label: '80G Registration', value: 'Active' },
          ].map((cert, index) => (
            <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">{cert.label}</p>
              <p className="font-semibold text-green-700">{cert.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
