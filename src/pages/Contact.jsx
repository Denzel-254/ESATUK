import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../components/forms/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone',
      details: ['+254 742 748 797', '+254 793 962 548'],
      link: 'tel:+254742748797'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      details: ['esatukofficialw@gmail.com', 'info@esatuk.org'],
      link: 'mailto:esatukofficialw@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Location',
      details: ['Technical University of Kenya', 'Nairobi, Kenya'],
      link: 'https://goo.gl/maps/xxxx'
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
      link: null
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="Contact ESATUK - Get in Touch with Environmental Students' Association"
        description="Contact ESATUK for inquiries, partnerships, or questions about environmental initiatives. Reach us via phone, email, WhatsApp, or visit our office at TUK."
        keywords="contact ESATUK, environmental students TUK, ESATUK email, ESATUK phone, environmental association Kenya"
        url="https://esatuk.org/contact"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with us. We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg card-hover"
              >
                <div className="text-primary mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">
                    {info.link && i === 0 ? (
                      <a href={info.link} className="hover:text-primary transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* WhatsApp Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="text-lg font-semibold text-gray-700">
                Quick Chat on WhatsApp:
              </span>
              <a
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '254742748797'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1DA851] transition-colors inline-flex items-center gap-2"
              >
                <FaWhatsapp />
                Chat Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="section-subtitle">
                Have questions, suggestions, or partnership inquiries? Reach out to us!
              </p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.720570786486!2d36.816389!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f114e12064ad1%3A0xb3e9d4bf06b2a6e4!2sTechnical%20University%20of%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ESATUK Location - Technical University of Kenya"
              className="w-full"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;