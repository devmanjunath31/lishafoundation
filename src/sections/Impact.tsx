import { TrendingUp, Users, Award, MapPin } from 'lucide-react';

const Impact = () => {
  const metrics = [
    { icon: Users, value: '10,000+', label: 'Lives Impacted', color: 'text-blue-600' },
    { icon: MapPin, value: '50+', label: 'Villages Covered', color: 'text-green-600' },
    { icon: TrendingUp, value: '200+', label: 'Farmers Trained', color: 'text-orange-600' },
    { icon: Award, value: '15+', label: 'Active Programs', color: 'text-purple-600' },
  ];

  const successStories = [
    {
      name: 'Lakshmi Devi',
      location: 'Doddabidare Village',
      story: 'Through our Women Empowerment program, Lakshmi joined a Self Help Group and started a small dairy business. Today, she earns a sustainable income and supports her family.',
      impact: 'Monthly income increased by 150%',
    },
    {
      name: 'Ravi Kumar',
      location: 'Chikkabidare Village',
      story: 'A beneficiary of our sustainable agriculture program, Ravi adopted organic farming practices. His farm productivity increased significantly while reducing input costs.',
      impact: '40% increase in crop yield',
    },
    {
      name: 'Manjula',
      location: 'Hurulihal Village',
      story: 'Her son was a school dropout. Through our education program, he rejoined school and is now excelling in his studies, aspiring to become a teacher.',
      impact: 'Child back in education and thriving',
    },
  ];

  const impactData = [
    { category: 'Education', metric: '25+ Children', description: 'Brought back to school' },
    { category: 'Women Empowerment', metric: '150+ Women', description: 'Active in SHGs/JLGs' },
    { category: 'Watershed Projects', metric: '500+ Acres', description: 'Land under development' },
    { category: 'Micro Loans', metric: '₹10+ Lakhs', description: 'Loans facilitated' },
    { category: 'Solar Energy', metric: '50+ Units', description: 'Installations completed' },
    { category: 'Livelihood', metric: '100+ Families', description: 'With sustainable income' },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Impact & Achievements
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measuring the change we create in communities across Tumkur District
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className={`w-12 h-12 ${metric.color} mx-auto mb-4`} />
                <p className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</p>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Impact Across Programs</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border-l-4 border-green-600 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.category}</h4>
                <p className="text-2xl font-bold text-green-600 mb-1">{item.metric}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-white">
                  <div className="text-center p-6">
                    <Users size={48} className="mx-auto mb-2" />
                    <h4 className="text-xl font-bold">{story.name}</h4>
                    <p className="text-sm text-green-100">{story.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{story.story}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-green-600">{story.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Growing Impact</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Since our inception in 2025, we've been committed to creating measurable,
              sustainable change in rural communities. Our programs continue to expand,
              reaching more villages and transforming more lives each month.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">100%</p>
                <p className="text-gray-700">Transparency in Operations</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">50+</p>
                <p className="text-gray-700">Villages Covered</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">24/7</p>
                <p className="text-gray-700">Community Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
