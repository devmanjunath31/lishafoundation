import { Users, UserCircle, Shield, Heart, Award, Sparkles } from 'lucide-react';

import secretaryImg from '../assets/images/team/secretary.jpg';
import treasurerImg from '../assets/images/team/treasurer.jpg';
import trustee1Img from '../assets/images/team/trustee-1.jpg';
import trustee2Img from '../assets/images/team/trustee-2.jpg';

const Team = () => {
  const leadership = [
    {
      name: 'G. Brahmananda',
      designation: 'Secretary',
      image: secretaryImg,
      description: 'Founder and visionary leader driving the Trust\'s mission of community development and empowerment across Tumkur District.',
      highlight: true,
      isLandscape: true
    },
    {
      name: 'Treasurer',
      designation: 'Treasurer',
      image: treasurerImg,
      description: 'Ensuring financial accountability and transparency in all Trust operations and fund management.',
      highlight: false,
      isLandscape: false
    },
    {
      name: 'Trustee',
      designation: 'Trustee',
      image: trustee1Img,
      description: 'Contributing to strategic decision-making and governance of Trust programs and initiatives.',
      highlight: false,
      isLandscape: true
    },
    {
      name: 'Trustee',
      designation: 'Trustee',
      image: trustee2Img,
      description: 'Supporting community outreach and program implementation across rural areas.',
      highlight: false,
      isLandscape: false
    },
  ];

  const stats = [
    { icon: Shield, value: '6', label: 'Leadership Members', color: 'from-green-500 to-emerald-600' },
    { icon: Users, value: '18', label: 'Staff Members', color: 'from-blue-500 to-cyan-600' },
    { icon: UserCircle, value: '20', label: 'Volunteers', color: 'from-amber-500 to-orange-600' },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-50 to-emerald-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            The People Behind Our Mission
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A dedicated team of professionals committed to transforming lives and serving the community with passion and purpose
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-5xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="w-8 h-8 text-green-600" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trust Administration
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${member.highlight ? 'ring-2 ring-green-500 ring-offset-4' : ''}`}
              >
                {/* Image container - fixed height with smart positioning based on aspect ratio */}
                <div className="relative h-72 sm:h-64 lg:h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      member.isLandscape ? 'object-center' : 'object-top'
                    }`}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Designation badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-green-700 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {member.highlight && <Sparkles className="w-3 h-3" />}
                      {member.designation}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                    {member.name}
                  </h4>
                  <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-3 group-hover:w-20 transition-all duration-500" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl" />

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Program Office</h3>
                  <p className="text-green-200 text-sm">18 Dedicated Members</p>
                </div>
              </div>
              <p className="text-white/90 mb-4 leading-relaxed">
                Our program office comprises 18 dedicated staff members working across various
                departments including education, agriculture, women empowerment, and livelihood
                programs.
              </p>
              <p className="text-green-200 text-sm leading-relaxed">
                Each team member brings specialized expertise to ensure effective program implementation
                and community engagement.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl" />

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-500">
                  <UserCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Voluntary Work Force</h3>
                  <p className="text-amber-200 text-sm">20 Passionate Volunteers</p>
                </div>
              </div>
              <p className="text-white/90 mb-4 leading-relaxed">
                A passionate group of 20 volunteers support our initiatives through field work,
                training, and community mobilization efforts.
              </p>
              <p className="text-amber-200 text-sm leading-relaxed">
                Our volunteers are the backbone of our grassroots programs, bringing energy and
                commitment to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
