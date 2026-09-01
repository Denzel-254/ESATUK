import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLeaf, FaRecycle, FaHands, FaTree } from 'react-icons/fa';

const AboutPreview = () => {
  const features = [
    {
      icon: <FaLeaf className="text-3xl text-primary" />,
      title: 'Sustainability',
      desc: 'Promoting sustainable practices for a better future.'
    },
    {
      icon: <FaRecycle className="text-3xl text-primary" />,
      title: 'Innovation',
      desc: 'Driving environmental innovation through research.'
    },
    {
      icon: <FaHands className="text-3xl text-primary" />,
      title: 'Community',
      desc: 'Engaging communities in environmental stewardship.'
    },
    {
      icon: <FaTree className="text-3xl text-primary" />,
      title: 'Conservation',
      desc: 'Protecting and preserving our natural resources.'
    }
  ];

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About ESATUK</h2>
          <p className="section-subtitle">
            Empowering students to protect the environment through research, advocacy, 
            innovation, and community engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg card-hover text-center"
            >
              <div className="inline-block p-4 bg-primary-pale rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/about" className="btn-primary inline-flex items-center gap-2">
            Discover More About Us
            <FaLeaf className="animate-pulse" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;