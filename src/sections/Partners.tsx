import { Handshake, Building2, Globe, Briefcase } from 'lucide-react';

const Partners = () => {
  // const partners = [
  //   { name: 'SCODWES', full: 'Sahyadri Community Development Women Empowerment Society' },
  //   { name: 'BIRDS', full: 'Bapuji Integrated Development Society' },
  //   { name: 'IRIDS', full: 'Indian Rural Integrated Develop Society' },
  //   { name: 'KFPC', full: 'Kalpamitra Farmer Producer Company' },
  //   { name: 'MFPCL', full: 'Magadi Farmer Producer Company' },
  //   { name: 'SEVA TRUST', full: 'Sarojini Educational Valientry Action' },
  //   { name: 'NRDS', full: 'Navachaithanya Rural Development Society' },
  //   { name: 'JSRDS', full: 'Janaspandana Rural Development Society' },
  //   { name: 'Vikasana NGO', full: 'Vikasana NGO' },
  //   { name: 'MYRADA', full: 'Mysore Resettlement and Development Agency' },
  // ];

  // const funding = [
  //   { name: 'NABARD', type: 'Development Banking' },
  //   { name: 'CSR Partners', type: 'Corporate Social Responsibility' },
  //   { name: 'Government Schemes', type: 'Public Sector' },
  //   { name: 'Grant Providers', type: 'International & Domestic' },
  // ];

  const collaborationTypes = [
    {
      icon: Handshake,
      title: 'Technical Collaboration',
      description: 'Knowledge sharing and capacity building partnerships',
    },
    {
      icon: Briefcase,
      title: 'Implementation Partners',
      description: 'Joint program execution and field-level collaboration',
    },
    {
      icon: Building2,
      title: 'Financial Partners',
      description: 'Funding agencies and CSR collaborations',
    },
    {
      icon: Globe,
      title: 'Network Organizations',
      description: 'Resource sharing and advocacy partnerships',
    },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Associates & Partners
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading organizations to amplify our community impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {collaborationTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-100 hover:border-green-600 transition-all"
              >
                <Icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            );
          })}
        </div>

        {/* <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Partner Organizations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-green-600 hover:shadow-lg transition-all text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {partner.name.charAt(0)}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h4>
                <p className="text-gray-600 text-sm">{partner.full}</p>
              </div>
            ))}
          </div>
        </div> */}
{/* 
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Funding & Support Agencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funding.map((agency, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Building2 className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">{agency.name}</h4>
                <p className="text-sm text-green-100">{agency.type}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Partnership Opportunities</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We welcome collaborations with organizations, corporates, and government agencies
              to create greater impact in rural communities.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
            >
              Partner With Us
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Partners;
