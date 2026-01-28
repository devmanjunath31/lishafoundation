import { FileText, Download, Award, User } from 'lucide-react';

import cert12A from '../assets/docs/12 A Certificate.pdf';
import cert80G from '../assets/docs/80G Certificate.pdf';
import leiCert from '../assets/docs/LEI Certificate 984500C0A2KH9EB4C891.pdf';
import secretaryBiodata from '../assets/docs/Secretary Biodata.pdf';

const Downloads = () => {
  const documents = [
    {
      category: 'Registration Certificates',
      icon: Award,
      files: [
        { name: '12A Registration Certificate', size: '658 KB', file: cert12A },
        { name: '80G Registration Certificate', size: '527 KB', file: cert80G },
        { name: 'LEI Certificate', size: '249 KB', file: leiCert },
      ],
    },
    {
      category: 'Team Information',
      icon: User,
      files: [
        { name: 'Secretary Biodata - G. Brahmananda', size: '5.5 MB', file: secretaryBiodata },
      ],
    },
  ];

  const registrationInfo = [
    { label: 'Trust Registration', value: 'Trust Registration Act 1882' },
    { label: 'PAN', value: 'AACTL6698K' },
    { label: '12A Status', value: 'Active' },
    { label: '80G Status', value: 'Active' },
    { label: 'Darpan ID', value: 'KA/2025/091091' },
    { label: 'LEI Number', value: '984500C0A2KH9EB4C891' },
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
            Access our certificates, documents, and registration information
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
                    <a
                      key={idx}
                      href={file.file}
                      download
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
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Registration Information
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {registrationInfo.map((info, index) => (
              <div
                key={index}
                className="p-4 bg-green-50 rounded-lg text-center"
              >
                <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                <p className="font-bold text-green-700">{info.value}</p>
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
