import { GraduationCap, Users, Sprout, TreePine, Zap, ShoppingBag } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Education',
      color: 'from-blue-500 to-blue-600',
      initiatives: [
        'School Dropout Children Rejoin Program',
        'Pre-nursery School Establishment',
        'Educational Support & Scholarships',
      ],
      impact: '25+ children brought back to school',
    },
    {
      icon: Users,
      title: 'Women Empowerment',
      color: 'from-pink-500 to-pink-600',
      initiatives: [
        'Self Help Groups (SHGs) Formation',
        'Joint Liability Groups (JLGs)',
        'Skill Development & Training',
        'Sustainability Programs',
      ],
      impact: '150+ women in active SHGs/JLGs',
    },
    {
      icon: ShoppingBag,
      title: 'Livelihood Programs',
      color: 'from-orange-500 to-orange-600',
      initiatives: [
        'Sheep & Goat Rearing',
        'Cow Rearing & Dairy',
        'Small Poultry Units',
        'Petty Shops & Coffee/Tea Bars',
        'Carpentry, Goldsmith, Blacksmith',
        'Rental Auto Services',
        'Old Age Home Support',
      ],
      impact: '100+ families with sustainable livelihoods',
    },
    {
      icon: Sprout,
      title: 'Agriculture',
      color: 'from-green-500 to-green-600',
      initiatives: [
        'IFS Modal Sustainable Agriculture',
        'Soil & Water Management',
        'Organic Farming Projects',
        'Farmer Producer Companies',
      ],
      impact: '200+ farmers trained in sustainable practices',
    },
    {
      icon: TreePine,
      title: 'Environment & Climate',
      color: 'from-teal-500 to-teal-600',
      initiatives: [
        'Watershed Development Projects',
        'Tank Development',
        'Fodder Development',
        'Climate Change Adaptation',
        'Mining Impact Zone Improvement',
        'Green Environment Initiatives',
      ],
      impact: '500+ acres under watershed projects',
    },
    {
      icon: Zap,
      title: 'Energy',
      color: 'from-yellow-500 to-yellow-600',
      initiatives: [
        'Solar Energy Conversion Programs',
        'Renewable Energy Awareness',
        'Community Energy Solutions',
      ],
      impact: '50+ solar installations completed',
    },
    // {
    //   icon: CreditCard,
    //   title: 'Financial Services',
    //   color: 'from-purple-500 to-purple-600',
    //   initiatives: [
    //     'Banking Micro Loans to SHGs/JLGs',
    //     'Financial Literacy Programs',
    //     'Linkage with Banking Institutions',
    //   ],
    //   impact: '₹10+ lakhs in micro-loans facilitated',
    // },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Programs & Services
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive development programs designed to create lasting impact in rural communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200"
              >
                <div className={`h-32 bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                  <Icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {program.initiatives.map((initiative, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span className="text-gray-700 text-sm">{initiative}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-green-600">{program.impact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Creating Sustainable Change</h3>
          <p className="text-xl text-green-50 max-w-3xl mx-auto mb-8">
            Our programs are designed with community participation at their core, ensuring sustainable
            impact and long-term empowerment of rural communities across Tumkur District.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More About Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
