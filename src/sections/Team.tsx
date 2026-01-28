import { Users, UserCircle, Shield } from 'lucide-react';

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
      description: 'Founder and visionary leader driving the Trust\'s mission of community development and empowerment across Tumkur District.'
    },
    {
      name: 'Treasurer',
      designation: 'Treasurer',
      image: treasurerImg,
      description: 'Ensuring financial accountability and transparency in all Trust operations and fund management.'
    },
    {
      name: 'Trustee',
      designation: 'Trustee',
      image: trustee1Img,
      description: 'Contributing to strategic decision-making and governance of Trust programs and initiatives.'
    },
    {
      name: 'Trustee',
      designation: 'Trustee',
      image: trustee2Img,
      description: 'Supporting community outreach and program implementation across rural areas.'
    },
  ];

  const stats = [
    { icon: Shield, value: '6', label: 'Leadership Members' },
    { icon: Users, value: '18', label: 'Staff Members' },
    { icon: UserCircle, value: '20', label: 'Volunteers' },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated team of professionals committed to serving the community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Trust Administration
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full pt-[100%] bg-gray-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-green-600 font-semibold mb-2">{member.designation}</p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Users className="w-10 h-10 text-green-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Program Office</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Our program office comprises 18 dedicated staff members working across various
              departments including education, agriculture, women empowerment, and livelihood
              programs.
            </p>
            <p className="text-gray-600">
              Each team member brings specialized expertise to ensure effective program implementation
              and community engagement.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <UserCircle className="w-10 h-10 text-green-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Voluntary Work Force</h3>
            </div>
            <p className="text-gray-700 mb-4">
              A passionate group of 20 volunteers support our initiatives through field work,
              training, and community mobilization efforts.
            </p>
            <p className="text-gray-600">
              Our volunteers are the backbone of our grassroots programs, bringing energy and
              commitment to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
