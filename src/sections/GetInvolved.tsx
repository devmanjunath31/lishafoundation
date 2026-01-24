import { Users, Briefcase, GraduationCap, Heart, CheckCircle } from 'lucide-react';

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Users,
      title: 'Field Work Volunteers',
      description: 'Work directly with communities on our programs',
      requirements: ['Age 18+', 'Basic local language', '10 hrs/week commitment'],
    },
    {
      icon: Briefcase,
      title: 'Administrative Support',
      description: 'Help with office operations and documentation',
      requirements: ['Computer skills', 'Communication skills', 'Flexible timing'],
    },
    {
      icon: GraduationCap,
      title: 'Technical Expertise',
      description: 'Provide specialized knowledge in agriculture, engineering, etc.',
      requirements: ['Relevant qualifications', 'Professional experience', 'Monthly visits'],
    },
    {
      icon: Heart,
      title: 'Training & Capacity Building',
      description: 'Conduct training programs for communities',
      requirements: ['Subject expertise', 'Training experience', 'Weekend availability'],
    },
  ];

  const internships = [
    { field: 'Rural Development', duration: '3-6 months' },
    { field: 'Social Work', duration: '2-4 months' },
    { field: 'Agriculture', duration: '3-6 months' },
    { field: 'Community Development', duration: '3-6 months' },
  ];

  const benefits = [
    'Hands-on experience in grassroots development',
    'Certificate of service and recommendation letter',
    'Opportunity to make real impact in communities',
    'Network with development professionals',
    'Skill development and capacity building',
    'Exposure to diverse programs and communities',
  ];

  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in creating positive change in rural communities
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Volunteer Opportunities
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opp, index) => {
              const Icon = opp.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border-2 border-green-100 hover:border-green-600 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 ml-4">{opp.title}</h4>
                  </div>
                  <p className="text-gray-700 mb-4">{opp.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">Requirements:</p>
                    {opp.requirements.map((req, idx) => (
                      <p key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-600 mr-2">•</span>
                        {req}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Internship Programs</h3>
            <div className="space-y-4">
              {internships.map((internship, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-green-50 rounded-lg"
                >
                  <span className="font-semibold text-gray-900">{internship.field}</span>
                  <span className="text-green-600">{internship.duration}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-600 text-sm">
              Internships are available for students pursuing degrees in relevant fields.
              Stipend may be provided based on availability.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-xl text-green-50 max-w-2xl mx-auto">
              Fill out the volunteer application form and our team will get in touch with you
            </p>
          </div>

          <form className="max-w-2xl mx-auto space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-100 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-100 focus:outline-none focus:border-white"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-100 focus:outline-none focus:border-white"
              />
              <select className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white">
                <option value="">Select Opportunity</option>
                <option value="field">Field Work</option>
                <option value="admin">Administrative</option>
                <option value="technical">Technical</option>
                <option value="training">Training</option>
              </select>
            </div>
            <textarea
              rows={4}
              placeholder="Tell us about yourself and why you want to volunteer"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-100 focus:outline-none focus:border-white"
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
