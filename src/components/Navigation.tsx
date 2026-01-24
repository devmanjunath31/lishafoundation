import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Programs', href: '#programs' },
    // { name: 'Impact', href: '#impact' },
    // { name: 'Partners', href: '#partners' },
    { name: 'Infrastructure', href: '#infrastructure' },
    // { name: 'Get Involved', href: '#get-involved' },
    { name: 'Donate', href: '#donate' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              L
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-700">Lisha Charitable Seva Trust</h1>
              <p className="text-xs text-gray-600">Selfless Service to Community</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
