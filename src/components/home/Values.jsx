import { motion } from 'framer-motion';
import { 
  FaLeaf, FaShieldAlt, FaUsers, FaHandsHelping, 
  FaBriefcase, FaHeart, FaLightbulb, FaGlobe 
} from 'react-icons/fa';

const Values = () => {
  const values = [
    { icon: <FaLeaf />, title: 'Sustainability', desc: 'Committed to sustainable practices and long-term environmental well-being.' },
    { icon: <FaShieldAlt />, title: 'Integrity', desc: 'Upholding honesty, transparency, and ethical standards in all actions.' },
    { icon: <FaUsers />, title: 'Inclusivity', desc: 'Welcoming diverse perspectives and ensuring equal participation for all.' },
    { icon: <FaHandsHelping />, title: 'Teamwork', desc: 'Collaborating effectively to achieve shared environmental goals.' },
    { icon: <FaBriefcase />, title: 'Professionalism', desc: 'Maintaining high standards of excellence and accountability.' },
    { icon: <FaHeart />, title: 'Volunteerism', desc: 'Dedicated to serving communities and protecting the environment selflessly.' },
    { icon: <FaLightbulb />, title: 'Innovation', desc: 'Embracing creative solutions to environmental challenges.' },
    { icon: <FaGlobe />, title: 'Service to Humanity', desc: 'Putting people and the planet at the center of our mission.' },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary-pale text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Foundation
          </span>
          <h2 className="section-title">Core Values</h2>
          <p className="section-subtitle">
            Guiding principles that shape our actions, decisions, and commitment 
            to environmental stewardship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg card-hover border border-gray-100 hover:border-primary/30 group"
            >
              <div className="text-3xl text-primary mb-3 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;