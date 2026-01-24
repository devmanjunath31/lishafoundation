import { Target, Eye, Award, Shield, Lightbulb, Users, Heart } from 'lucide-react';

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
    { year: '2025', event: 'Trust founded in Hurulihal, Tumkur District' },
    { year: '2025', event: 'Registered under Trust Registration Act 1882' },
    { year: '2025', event: 'Obtained 12A and 80G tax exemption certificates' },
    { year: '2025', event: 'Darpan Registration completed (KA/2025/091091)' },
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

        {/* <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center text-white">
                <Users size={80} />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Founder's Message</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                "Our journey began with a simple belief - that every individual, regardless of their
                background, deserves the opportunity to live a life of dignity and prosperity. Through
                Lisha Charitable Seva Trust, we are committed to making this vision a reality by
                working hand-in-hand with communities across Tumkur District."
              </p>
              <p className="text-gray-900 font-semibold">- G. Brahmananda, Secretary</p>
            </div>
          </div>
        </div> */}

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

        <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h3>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-6">
                  <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-semibold">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-grow border-l-2 border-green-600 pl-6 pb-6">
                  <p className="text-gray-700 text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
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
