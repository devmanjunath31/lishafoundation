import { FileText, Download, Award, BookOpen, Briefcase } from 'lucide-react';

const Downloads = () => {
  const documents = [
    {
      category: 'Registration Documents',
      icon: Award,
      files: [
        { name: 'Trust Registration Act 1882 Certificate', size: '2.5 MB' },
        { name: 'PAN Card (AACTL6698K)', size: '1.2 MB' },
        { name: '12A Registration Certificate', size: '1.8 MB' },
        { name: '80G Registration Certificate', size: '1.5 MB' },
        { name: 'Darpan Registration (KA/2025/091091)', size: '1.3 MB' },
      ],
    },
    {
      category: 'Annual Reports',
      icon: FileText,
      files: [
        { name: 'Annual Report 2025-26', size: '5.2 MB' },
        { name: 'Impact Assessment Report 2025', size: '3.8 MB' },
      ],
    },
    {
      category: 'Financial Documents',
      icon: Briefcase,
      files: [
        { name: 'Audited Financial Statement 2025-26', size: '4.1 MB' },
        { name: 'Balance Sheet', size: '2.3 MB' },
        { name: 'Income & Expenditure Statement', size: '2.1 MB' },
      ],
    },
    {
      category: 'Brochures & Materials',
      icon: BookOpen,
      files: [
        { name: 'Organizational Brochure', size: '6.5 MB' },
        { name: 'Program Overview', size: '4.2 MB' },
        { name: 'Donor Information Kit', size: '3.9 MB' },
      ],
    },
  ];

  const forms = [
    'Volunteer Application Form',
    'Internship Application Form',
    'Beneficiary Enrollment Form',
    'Partnership Proposal Form',
  ];

  return (
    <section id="downloads" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Downloads & Resources
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our reports, certificates, brochures, and application forms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{doc.category}</h3>
                </div>
                <div className="space-y-3">
                  {doc.files.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center flex-grow">
                        <FileText className="w-5 h-5 text-green-600 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900 group-hover:text-green-600">
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-500">{file.size}</p>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-gray-400 group-hover:text-green-600" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Application Forms
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {forms.map((form, index) => (
              <div
                key={index}
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:shadow-lg transition-all cursor-pointer text-center group"
              >
                <Download className="w-10 h-10 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-gray-900 group-hover:text-green-600">{form}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need More Information?</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Can't find the document you're looking for? Contact us and we'll be happy to assist
            you.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
