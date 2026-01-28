import { Heart, Building2, ShieldCheck, FileCheck, CreditCard } from 'lucide-react';
import qrCodeImg from '../assets/images/bank/Screenshot_20260128-133947_M365 Copilot.png';

const Donation = () => {
  const bankDetails = [
    { label: 'Account Name', value: 'Lisha charitable seva trust' },
    { label: 'Bank', value: 'State Bank of India' },
    { label: 'Branch', value: 'Huliyar, Ramgopal circle' },
    { label: 'Account Number', value: '44249639311', isMono: true },
    { label: 'IFSC Code', value: 'SBIN0041115', isMono: true },
    { label: 'Account Type', value: 'Current Account' },
  ];

  const certifications = [
    { label: 'Trust Reg. Act 1882', value: 'Registered', icon: Building2, color: 'from-blue-500 to-cyan-500' },
    { label: 'PAN', value: 'AACTL6698K', icon: FileCheck, color: 'from-green-500 to-emerald-500' },
    { label: '12A Registration', value: 'Active', icon: ShieldCheck, color: 'from-amber-500 to-orange-500' },
    { label: '80G Registration', value: 'Active', icon: ShieldCheck, color: 'from-purple-500 to-violet-500' },
  ];

  return (
    <section id="donate" className="py-24 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Make a Difference
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Support Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Cause</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your contribution can transform lives and build stronger communities across Tumkur District
          </p>
        </div>

        {/* Main Donation Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Bank Details + Certifications */}
          <div className="space-y-6">
            {/* Bank Details Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <CreditCard className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Bank Transfer</h3>
                  <p className="text-gray-500 text-sm">Direct bank deposit</p>
                </div>
              </div>

              <div className="space-y-4">
                {bankDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 px-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors"
                  >
                    <span className="text-gray-600 font-medium">{detail.label}</span>
                    <span className={`text-gray-900 font-semibold ${detail.isMono ? 'font-mono bg-gray-100 px-3 py-1 rounded-lg text-sm' : ''}`}>
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{cert.label}</p>
                    <p className="font-bold text-gray-900 text-sm">{cert.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - QR Code Card */}
          <div className="group relative bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 rounded-3xl px-8 py-6 text-white overflow-hidden shadow-xl h-fit">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl" />

            <div className="relative z-10">
              {/* <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <QrCode className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Scan & Pay</h3>
                  <p className="text-green-200 text-sm">Quick UPI payment</p>
                </div>
              </div> */}

              {/* QR Code Image */}
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <img
                  src={qrCodeImg}
                  alt="UPI QR Code for Donation"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* <p className="text-center text-green-100 text-sm mt-4">
                Scan the QR code using any UPI app to donate
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
