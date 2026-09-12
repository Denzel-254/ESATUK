import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { useState } from 'react';
import { 
  FaCheck, 
  FaUsers, 
  FaLeaf, 
  FaHands, 
  FaUserPlus, 
  FaMobileAlt, 
  FaCopy, 
  FaMoneyBillWave,
  FaInfoCircle 
} from 'react-icons/fa';
import MembershipForm from '../components/forms/MembershipForm';

const Membership = () => {
  const [copied, setCopied] = useState(false);

  const benefits = [
    { icon: <FaLeaf />, title: 'Environmental Impact', desc: 'Be part of meaningful environmental conservation projects.' },
    { icon: <FaUsers />, title: 'Community', desc: 'Connect with like-minded students passionate about sustainability.' },
    { icon: <FaHands />, title: 'Skills Development', desc: 'Gain valuable skills in leadership, advocacy, and project management.' },
    { icon: <FaUserPlus />, title: 'Networking', desc: 'Build connections with professionals and organizations in the environmental sector.' },
  ];

  const handleCopyNumber = () => {
    navigator.clipboard.writeText('0743120050');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="Join ESATUK - Membership Registration & Benefits"
        description="Join ESATUK, the Environmental Students' Association of TUK. Register online for KES 100 and become part of a community championing sustainability, climate action, and environmental stewardship."
        keywords="ESATUK membership, join environmental club TUK, student sustainability Kenya, climate action students, register ESATUK"
        url="https://esatuk.org/membership"
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
                  'Passionate about environmental conservation and sustainability',
                  'Committed to the vision and mission of ESATUK',
                  'Willing to participate in association activities and projects',
                  'Pay the membership fee (KES 100)'
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

      {/* Payment Details Section */}
      <section className="section-padding bg-gradient-to-br from-primary-pale to-green-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <FaMoneyBillWave />
                Payment Instructions
              </div>
              <h2 className="section-title">How to Pay Your Membership Fee</h2>
              <p className="section-subtitle">
                Pay your KES 100 registration fee via M-Pesa Pochi la Biashara to the Treasurer.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <FaMobileAlt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">M-Pesa Pochi la Biashara</h3>
                    <p className="text-sm text-primary-mint">Send KES 100 to register</p>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Treasurer Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Treasurer Name</p>
                    <p className="text-lg md:text-xl font-bold text-primary-dark">
                      Graca Asiko
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-sm text-gray-500 mb-1">Amount</p>
                    <p className="text-2xl md:text-3xl font-bold text-primary">
                      KES 100
                    </p>
                  </div>
                </div>

                {/* Phone Number with Copy Button */}
                <div>
                  <p className="text-sm text-gray-500 mb-2">Pochi la Biashara Number</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-primary-pale rounded-xl px-5 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FaMobileAlt className="text-primary text-xl" />
                        <span className="text-xl md:text-2xl font-bold text-primary-dark tracking-wider">
                          0743120050
                        </span>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={handleCopyNumber}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                          copied
                            ? 'bg-green-500 text-white'
                            : 'bg-primary text-white hover:bg-primary-dark'
                        }`}
                      >
                        {copied ? (
                          <>
                            <FaCheck className="text-xs" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <FaCopy className="text-xs" />
                            Copy
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Step by Step Instructions */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-primary-dark mb-4 flex items-center gap-2">
                    <FaInfoCircle className="text-primary" />
                    How to Pay via Pochi la Biashara
                  </h4>
                  <ol className="space-y-3">
                    {[
                      'Go to M-Pesa menu on your phone',
                      'Select "Send Money"',
                      'Enter the number: 0743120050',
                      'Enter amount: KES 100',
                      'Enter your M-Pesa PIN and confirm',
                      'Save the M-Pesa confirmation message',
                      'Paste the M-Pesa code in the registration form below'
                    ].map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 text-sm md:text-base">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Important Note */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <FaInfoCircle className="text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-yellow-800 mb-1">
                        Important
                      </p>
                      <p className="text-sm text-yellow-700">
                        After payment, make sure to fill in the registration form below 
                        and include your M-Pesa transaction code. Your membership will be 
                        activated once payment is confirmed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
