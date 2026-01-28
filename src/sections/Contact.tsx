import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation } from 'lucide-react';

const Contact = () => {
  const departments = [
    { name: 'General Inquiries', email: 'lishacharitabletrust888@gmail.com' },
    { name: 'Donation Inquiries', email: 'lishacharitabletrust888@gmail.com' },
    { name: 'Volunteer Inquiries', email: 'anjanaanjana42045@gmail.com' },
    { name: 'Partnership Inquiries', email: 'lishacharitabletrust888@gmail.com' },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch with us for any inquiries, support, or collaboration opportunities
          </p>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 rounded-3xl p-6 md:p-8 mb-16 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <p className="font-semibold mb-1">Address</p>
                <p className="text-green-100 text-sm leading-relaxed">
                  Doddabidare, Chikkabidare (Post)<br />
                  C N Halli Tq, Tumkur Dist. - 572228
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-white/20" />

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-green-100 text-sm">+91 9663993161</p>
                <p className="text-green-100 text-sm">+91 9380328365</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-white/20" />

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <p className="font-semibold mb-1">Email</p>
                <p className="text-green-100 text-sm break-all">lishacharitabletrust888@gmail.com</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-white/20" />

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <p className="font-semibold mb-1">Office Hours</p>
                <p className="text-green-100 text-sm">Mon - Sat: 9AM - 6PM</p>
                <p className="text-green-100 text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
                <p className="text-gray-500 text-sm">We'll get back to you soon</p>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Map & Departments */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-3 mb-4 px-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Location</h4>
                  <p className="text-gray-500 text-xs">Doddabidare, Tumkur District</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5!2d76.556250!3d13.555802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMzJzIwLjkiTiA3NsKwMzMnMjIuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Lisha Charitable Seva Trust Location"
                ></iframe>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Department Contacts</h3>
              <div className="space-y-3">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{dept.name}</h4>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-green-600 hover:text-green-700 text-xs"
                      >
                        {dept.email}
                      </a>
                    </div>
                    <a
                      href={`mailto:${dept.email}`}
                      className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all"
                    >
                      <Mail className="w-4 h-4 text-green-600 group-hover:text-white" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
