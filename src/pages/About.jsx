import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaLeaf, FaRecycle, FaHands, FaTree, FaUsers, 
  FaShieldAlt, FaHandsHelping, FaBriefcase, 
  FaHeart, FaLightbulb, FaGlobe, FaArrowRight 
} from 'react-icons/fa';

const About = () => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark to-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About ESATUK
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Environmental Students' Association of the Technical University of Kenya
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary-pale p-8 rounded-3xl shadow-lg card-hover"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                <FaGlobe className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading student-driven environmental platform championing sustainability, 
                climate action, innovation, and environmental stewardship within the Technical 
                University of Kenya and beyond.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary-pale p-8 rounded-3xl shadow-lg card-hover"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                <FaLeaf className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To inspire, educate, and empower students to protect the environment through 
                research, advocacy, innovation, conservation, partnerships, and community 
                engagement while promoting sustainable development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Motto</h2>
            <p className="text-4xl md:text-5xl font-light text-primary-mint italic">
              "Integrity to Nature"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our actions and define our character as an association.
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

      {/* History Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="section-title">Our History</h2>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-primary">ESATUK</span> was founded with a vision 
                  to create a platform where students passionate about environmental conservation 
                  could come together and make a tangible impact.
                </p>
                <p>
                  Over the years, we have grown from a small group of environmental enthusiasts 
                  to a vibrant community of over 500 members dedicated to sustainability, climate 
                  action, and environmental stewardship.
                </p>
                <p>
                  Our journey has been marked by numerous successful projects, impactful community 
                  engagements, and a growing network of partners who share our vision for a 
                  sustainable future.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2018</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-gray-600">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-gray-600">Trees Planted</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Dedicated individuals leading our association towards a sustainable future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'John Mwangi', role: 'Chairperson', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Sarah Wanjiru', role: 'Vice Chairperson', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'David Ochieng', role: 'Secretary General', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Grace Akinyi', role: 'Treasurer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-primary-dark">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Environmental Movement
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Be part of the change. Together, we can create a sustainable future for generations to come.
            </p>
            <Link to="/membership" className="btn-secondary inline-flex items-center gap-2 text-primary-dark">
              Join ESATUK Today
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;