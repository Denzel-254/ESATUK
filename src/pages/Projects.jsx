import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTree, FaRecycle, FaWater, FaLeaf, FaHands, FaGlobe, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Green Campus Initiative',
      category: 'Sustainability',
      icon: <FaLeaf />,
      image: '/three.jpeg',
      description: 'Transforming our campus into a model of environmental sustainability through waste management, energy efficiency, and green infrastructure.',
      impact: 'Reduced campus waste by 40%, installed solar panels on 5 buildings',
      status: 'Ongoing'
    },
    {
      id: 2,
      title: 'Tree Planting Program',
      category: 'Conservation',
      icon: <FaTree />,
      image: '/three.jpeg',
      description: 'Annual tree planting drives in various locations across Kenya, contributing to reforestation and biodiversity conservation efforts.',
      impact: 'Planted over 1000 trees across 5 counties',
      status: 'Ongoing'
    },
    {
      id: 3,
      title: 'Water Conservation Project',
      category: 'Conservation',
      icon: <FaWater />,
      image: '/three.jpeg',
      description: 'Promoting water conservation through awareness campaigns, rainwater harvesting, and clean water access initiatives in local communities.',
      impact: 'Installed 10 rainwater harvesting systems in 5 schools',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Recycling & Waste Management',
      category: 'Sustainability',
      icon: <FaRecycle />,
      image: '/three.jpeg',
      description: 'Implementing recycling programs and waste reduction strategies across campus and in partner communities.',
      impact: 'Recycled 5 tons of waste, created 20 recycling points',
      status: 'Ongoing'
    },
    {
      id: 5,
      title: 'Community Engagement Program',
      category: 'Community',
      icon: <FaHands />,
      image: '/three.jpeg',
      description: 'Empowering local communities through environmental education, capacity building, and sustainable livelihood initiatives.',
      impact: 'Trained 500 community members, established 3 community gardens',
      status: 'Ongoing'
    },
    {
      id: 6,
      title: 'Climate Action Advocacy',
      category: 'Advocacy',
      icon: <FaGlobe />,
      image: '/three.jpeg',
      description: 'Advocating for climate action through policy engagement, awareness campaigns, and youth mobilization.',
      impact: 'Engaged 1000+ youth, submitted 3 policy briefs',
      status: 'Completed'
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
              Our Projects
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Impactful environmental initiatives making a difference in our communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-pale'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 px-4 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Ongoing' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {project.status}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-3xl bg-primary/80 p-3 rounded-full backdrop-blur-sm">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="bg-primary-pale p-4 rounded-xl mb-4">
                    <p className="text-sm text-primary-dark font-semibold">
                      Impact: {project.impact}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center gap-2"
                  >
                    Learn More <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={activeProject.image} 
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary text-2xl">{activeProject.icon}</span>
                <span className={`px-4 py-1 rounded-full text-xs font-semibold ${
                  activeProject.status === 'Ongoing' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-blue-500 text-white'
                }`}>
                  {activeProject.status}
                </span>
                <span className="text-sm text-gray-500">{activeProject.category}</span>
              </div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                {activeProject.title}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {activeProject.description}
              </p>
              <div className="bg-primary-pale p-6 rounded-xl">
                <h4 className="font-bold text-primary-dark mb-2">Project Impact</h4>
                <p className="text-gray-700">{activeProject.impact}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;