import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheck, FaUsers, FaLeaf, FaHands, FaUserPlus } from 'react-icons/fa';
import MembershipForm from '../components/forms/MembershipForm';

const Membership = () => {
  const benefits = [
    { icon: <FaLeaf />, title: 'Environmental Impact', desc: 'Be part of meaningful environmental conservation projects.' },
    { icon: <FaUsers />, title: 'Community', desc: 'Connect with like-minded students passionate about sustainability.' },
    { icon: <FaHands />, title: 'Skills Development', desc: 'Gain valuable skills in leadership, advocacy, and project management.' },
    { icon: <FaUserPlus />, title: 'Networking', desc: 'Build connections with professionals and organizations in the environmental sector.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
              Join ESATUK
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Become part of a vibrant community dedicated to environmental sustainability 
              and climate action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Why Join ESATUK?</h2>
            <p className="section-subtitle">
              Discover the benefits of being part of our environmental community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg card-hover text-center"
              >
                <div className="inline-block p-4 bg-primary-pale rounded-full mb-4">
                  <span className="text-3xl text-primary">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="section-title text-center">Membership Requirements</h2>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <ul className="space-y-4">
                {[
                  'Must be a registered student at the Technical University of Kenya',
                  'Passionate about environmental conservation and sustainability',
                  'Committed to the vision and mission of ESATUK',
                  'Willing to participate in association activities and projects',
                  'Pay the membership fee (KES 500 per semester)'
                ].map((requirement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="section-title">Register Now</h2>
              <p className="section-subtitle">
                Fill in the form below to become a member of ESATUK.
              </p>
            </div>
            <MembershipForm />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Membership;