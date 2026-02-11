import { useState } from 'react';
import { Award, FileText, Download, Eye, X, Shield, BookOpen } from 'lucide-react';

// PDF imports
import cert12A from '../assets/docs/12 A Certificate.pdf';
import cert80G from '../assets/docs/80G Certificate.pdf';
import certLEI from '../assets/docs/LEI Certificate 984500C0A2KH9EB4C891.pdf';
import certDoc2 from '../assets/docs/DOC-20260120-WA0084.(6).pdf';

// Image import
import certificateImg from '../assets/docs/certificate/certificate.jpg';

interface Certificate {
  name: string;
  description: string;
  type: 'pdf' | 'image';
  file: string;
  icon: 'award' | 'shield' | 'file' | 'book';
  color: string;
}

const certificates: Certificate[] = [
  {
    name: '12A Certificate',
    description: 'Income Tax Exemption Certificate under Section 12A',
    type: 'pdf',
    file: cert12A,
    icon: 'award',
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: '80G Certificate',
    description: 'Tax Deduction Certificate under Section 80G for donors',
    type: 'pdf',
    file: cert80G,
    icon: 'shield',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'LEI Certificate',
    description: 'Legal Entity Identifier Certificate',
    type: 'pdf',
    file: certLEI,
    icon: 'file',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Registration Certificate',
    description: 'Trust Registration Certificate',
    type: 'image',
    file: certificateImg,
    icon: 'award',
    color: 'from-purple-500 to-pink-500',
  },
  // {
  //   name: 'Trust Deed',
  //   description: 'Official Trust Deed Document',
  //   type: 'pdf',
  //   file: certDoc1,
  //   icon: 'book',
  //   color: 'from-teal-500 to-cyan-500',
  // },
  {
    name: 'Compliance Certificate',
    description: 'Regulatory Compliance Document',
    type: 'pdf',
    file: certDoc2,
    icon: 'shield',
    color: 'from-rose-500 to-red-500',
  },
  // {
  //   name: 'Secretary Biodata',
  //   description: 'Profile & Biodata of the Trust Secretary',
  //   type: 'pdf',
  //   file: secretaryBio,
  //   icon: 'book',
  //   color: 'from-violet-500 to-purple-500',
  // },
];

const iconMap = {
  award: Award,
  shield: Shield,
  file: FileText,
  book: BookOpen,
};

const Certificates = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleView = (cert: Certificate) => {
    if (cert.type === 'image') {
      setPreviewImage(cert.file);
    } else {
      window.open(cert.file, '_blank');
    }
  };

  const handleDownload = (cert: Certificate) => {
    const link = document.createElement('a');
    link.href = cert.file;
    link.download = cert.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award size={16} />
            Legal & Compliance
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Certificates</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Verified documents and certifications ensuring transparency and legal compliance of our trust
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const IconComponent = iconMap[cert.icon];
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient top bar */}
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />

                <div className="p-6">
                  {/* Icon and type badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                      cert.type === 'pdf'
                        ? 'bg-red-50 text-red-600'
                        : 'bg-blue-50 text-blue-600'
                    }`}>
                      {cert.type === 'pdf' ? 'PDF' : 'Image'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleView(cert)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-amber-50 text-gray-700 hover:text-amber-700 rounded-xl text-sm font-medium transition-all duration-300 border border-gray-200 hover:border-amber-200"
                    >
                      <Eye size={16} />
                      View
                    </button>
                    <button
                      onClick={() => handleDownload(cert)}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${cert.color} text-white rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105`}
                    >
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 px-6 py-3 rounded-2xl">
            <Shield size={20} className="text-green-600" />
            <p className="text-sm text-green-700 font-medium">
              All documents are verified and legally compliant as per Indian Trust Act
            </p>
          </div>
        </div>
      </div>

      {/* Image Preview Lightbox */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <button
            className="absolute top-20 right-4 md:top-24 md:right-6 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 transition-all duration-300 hover:scale-110 shadow-lg"
            onClick={() => setPreviewImage(null)}
          >
            <X size={24} />
          </button>
          <img
            src={previewImage}
            alt="Certificate Preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;
