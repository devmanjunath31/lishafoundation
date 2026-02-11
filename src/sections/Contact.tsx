import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const departments = [
    { name: 'General Inquiries', email: 'lishacharitabletrust888@gmail.com' },
    { name: 'Donation Inquiries', email: 'lishacharitabletrust888@gmail.com' },
    { name: 'Volunteer Inquiries', email: 'anjanaanjana42045@gmail.com' },
    { name: 'Partnership Inquiries', email: 'lishacharitabletrust888@gmail.com' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your .env file.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Lisha Charitable Seva Trust',
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

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

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white resize-none"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  <p className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-sm font-medium">Failed to send message. Please try again or contact us directly.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
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
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3878.6706714727675!2d76.55357007508674!3d13.55578298681594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDMzJzIwLjgiTiA3NsKwMzMnMjIuMSJF!5e0!3m2!1sen!2sin!4v1769615837036!5m2!1sen!2sin"
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
