import { MapPin, Phone, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // const resources = [
  //   { name: 'Downloads', href: '#downloads' },
  //   { name: 'Transparency', href: '#transparency' },
  //   { name: 'Annual Reports', href: '#downloads' },
  //   { name: 'Certificates', href: '#downloads' },
  // ];

  const getInvolved = [
    { name: 'Donate', href: '#donate' },
    { name: 'Volunteer', href: '#get-involved' },
    { name: 'Partner With Us', href: '#partners' },
    { name: 'CSR Opportunities', href: '#donate' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                L
              </div>
              <div>
                <h3 className="text-xl font-bold">Lisha Charitable Seva Trust</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Selfless Service to Community. Empowering rural communities through sustainable
              development programs in education, agriculture, and livelihoods.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <span className="text-sm">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <span className="text-sm">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <span className="text-sm">yt</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Get Involved</h4>
            <ul className="space-y-3">
              {getInvolved.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Doddabidare, Chikkabidare (Post)
                  <br />
                  C N Halli Tq, Tumkur Dist.
                  <br />
                  Karnataka - 572228
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <div>+91 9663993161</div>
                  <div>+91 9380328365</div>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm break-all">
                  lishacharitabletrust888@gmail.com
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h5 className="font-semibold mb-3">Registration Details</h5>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                <div>PAN: AACTL6698K</div>
                <div>80G: Active</div>
                <div>12A: Active</div>
                <div>Darpan: KA/2025/091091</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                <ArrowUp className="w-5 h-5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Lisha Charitable Seva Trust. All rights reserved.
            </p>
            <p className="flex items-center mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
