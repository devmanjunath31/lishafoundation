import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Lisha Charitable Seva Trust (R)',
        'Doddabidare, Chikkabidare (Post)',
        'C N Halli Tq, Tumkur Dist.',
        'Karnataka State, Pin - 572228',
      ],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9663993161', '+91 9380328365'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['lishacharitabletrust888@gmail.com', 'anjanaanjana42045@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Saturday', '9:00 AM - 6:00 PM', 'Closed on Sundays'],
    },
  ];

  const departments = [
    { name: 'General Inquiries', email: 'lishacharitabletrust888@gmail.com' },
    { name: 'Donation Inquiries', email: 'lishacharitabletrust888@gmail.com' },
    { name: 'Volunteer Inquiries', email: 'anjanaanjana42045@gmail.com' },
    { name: 'Partnership Inquiries', email: 'lishacharitabletrust888@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any inquiries, support, or collaboration opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{info.title}</h3>
                </div>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h3>
            <div className="space-y-4 mb-8">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-green-600 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 mb-1">{dept.name}</h4>
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-green-600 hover:text-green-700 text-sm"
                  >
                    {dept.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
              <p className="text-green-100 mb-6">
                We welcome visitors to our office during working hours. Please call ahead to
                schedule a meeting.
              </p>
              <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p className="text-sm">
                    Latitude: 13.555802
                    <br />
                    Longitude: 76.556250
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
