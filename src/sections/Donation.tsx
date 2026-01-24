// import { Heart, Shield, TrendingUp, Users, GraduationCap, Leaf, Building } from 'lucide-react';

const Donation = () => {
  // const programs = [
  //   {
  //     icon: GraduationCap,
  //     title: 'Sponsor a Child\'s Education',
  //     amount: '₹5,000',
  //     period: '/year',
  //     description: 'Support a child\'s educational journey',
  //   },
  //   {
  //     icon: Users,
  //     title: 'Support Women\'s Livelihood',
  //     amount: '₹10,000',
  //     period: '/program',
  //     description: 'Empower women through skill development',
  //   },
  //   {
  //     icon: Leaf,
  //     title: 'Watershed Development',
  //     amount: '₹25,000',
  //     period: '/acre',
  //     description: 'Contribute to sustainable agriculture',
  //   },
  //   {
  //     icon: Heart,
  //     title: 'Livestock Support',
  //     amount: '₹15,000',
  //     period: '/family',
  //     description: 'Provide livestock to a family',
  //   },
  //   {
  //     icon: Building,
  //     title: 'Old Age Home Support',
  //     amount: '₹3,000',
  //     period: '/month',
  //     description: 'Care for elderly community members',
  //   },
  // ];

  // const benefits = [
  //   { icon: Shield, title: '80G Tax Exemption', description: 'Save up to 50% on your donation' },
  //   { icon: TrendingUp, title: '100% Transparency', description: 'Track how your donation is used' },
  //   { icon: Heart, title: 'Direct Impact', description: 'See the change you create' },
  // ];

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Support Our Cause</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your contribution can transform lives and build stronger communities
          </p>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choose a Program to Support
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-green-600"
                >
                  <div className="bg-gradient-to-br from-green-600 to-green-500 p-6 text-white text-center">
                    <Icon className="w-12 h-12 mx-auto mb-3" />
                    <h4 className="text-xl font-bold mb-2">{program.title}</h4>
                    <div className="text-3xl font-bold">
                      {program.amount}
                      <span className="text-lg font-normal">{program.period}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Donate Now
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="bg-gradient-to-br from-gray-100 to-white rounded-xl p-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
              <Heart className="w-16 h-16 text-gray-400 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Custom Amount</h4>
              <p className="text-gray-600 text-center mb-4">
                Donate any amount to support our general programs
              </p>
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Donate Custom Amount
              </button>
            </div>
          </div>
        </div> */}

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bank Transfer Details</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-semibold">Account Name:</span>
                <span>Lisha charitable seva trust</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-semibold">Bank:</span>
                <span>State Bank of India</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-semibold">Branch:</span>
                <span>Huliyar, Ramgopal circle</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-semibold">Account Number:</span>
                <span className="font-mono">44249639311</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-semibold">IFSC Code:</span>
                <span className="font-mono">SBIN0041115</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-semibold">Account Type:</span>
                <span>Current Account</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">How Your Donation is Used</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Program Expenses</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Administrative Costs</span>
                  <span className="font-bold">10%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Fundraising Costs</span>
                  <span className="font-bold">5%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{ width: '5%' }}></div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-green-100 text-sm">
              We maintain complete transparency in fund utilization. Annual audit reports are
              available for download.
            </p>
          </div>
        </div>

        {/* <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">CSR Partnerships</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We welcome corporate partnerships under CSR initiatives. Contact us for detailed
            project proposals and collaboration opportunities.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
          >
            Explore CSR Opportunities
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Donation;
