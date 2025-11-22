import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', class: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['9676387108', '6304998492'],
      color: 'from-blue-500 to-cyan-500',
      action: 'tel:9676387108',
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['upadhyayatutorials@gmail.com'],
      color: 'from-purple-500 to-pink-500',
      action: 'mailto:upadhyayatutorials@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['50, 2nd Cross Road', 'Lakshmamma Layout, Dodda Banaswadi', 'Bengaluru, 560043'],
      color: 'from-orange-500 to-red-500',
      action: 'https://maps.google.com/?q=Dodda+Banaswadi+Bengaluru+560043',
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 2:00 PM' },
  ];

  return (
    <div className="relative pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
              <MessageCircle className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-blue-300">Get In Touch</span>
            </div>
            <h1 className="text-4xl lg:text-6xl text-white mb-6">
              Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions? We're here to help you start your learning journey
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.action}
              target={info.title === 'Our Location' ? '_blank' : undefined}
              rel={info.title === 'Our Location' ? 'noopener noreferrer' : undefined}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 overflow-hidden h-full">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-white mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 lg:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <h2 className="text-3xl text-white mb-2">Send us a Message</h2>
                <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you soon</p>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for contacting us. We'll respond within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white transition-colors"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-white mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white transition-colors"
                          placeholder="9876543210"
                        />
                      </div>

                      <div>
                        <label className="block text-white mb-2">Class/Grade *</label>
                        <select
                          name="class"
                          value={formData.class}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white transition-colors"
                        >
                          <option value="">Select class</option>
                          <option value="1-5">Classes 1-5</option>
                          <option value="6-8">Classes 6-8</option>
                          <option value="9-10">Classes 9-10</option>
                          <option value="11-12">Classes 11-12 (PUC)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white transition-colors resize-none"
                        placeholder="Tell us about your learning needs..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:scale-105 text-white flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Office Hours */}
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>

              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white">Office Hours</h3>
                </div>

                <div className="space-y-3">
                  {officeHours.map((schedule, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{schedule.day}</span>
                      <span className="text-gray-300">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 overflow-hidden group cursor-pointer hover:from-green-500 hover:to-emerald-500 transition-all duration-300">
              <a
                href="https://wa.me/919676387108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                <MessageCircle className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl text-white mb-2">Chat on WhatsApp</h3>
                <p className="text-green-100 text-sm">Get instant responses to your queries</p>
              </a>
            </div>

            {/* Quick Info */}
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
              <h3 className="text-xl text-white mb-4">Quick Info</h3>
              <ul className="space-y-3">
                {[
                  'Free demo class available',
                  'Flexible batch timings',
                  'Online & Offline options',
                  'Individual attention guaranteed',
                ].map((info, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-4 lg:p-8 overflow-hidden">
            <h2 className="text-2xl text-white mb-6">Find Us on Map</h2>
            <div className="relative rounded-2xl overflow-hidden h-[400px] bg-gray-800">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296524!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale contrast-125 invert opacity-70"
              ></iframe>
              {/* Overlay with address */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">Upadhyaya Tutorials</h4>
                    <p className="text-gray-400 text-sm">
                      50, 2nd Cross Road, Lakshmamma Layout<br />
                      Dodda Banaswadi Main Road<br />
                      Bengaluru, Karnataka 560043
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
