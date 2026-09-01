import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUsers, FaTree, FaProjectDiagram, FaHandshake } from 'react-icons/fa';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState({ members: 0, trees: 0, projects: 0, partners: 0 });

  const stats = [
    { id: 'members', icon: <FaUsers />, label: 'Active Members', target: 500, suffix: '+' },
    { id: 'trees', icon: <FaTree />, label: 'Trees Planted', target: 1000, suffix: '+' },
    { id: 'projects', icon: <FaProjectDiagram />, label: 'Projects', target: 50, suffix: '+' },
    { id: 'partners', icon: <FaHandshake />, label: 'Partners', target: 20, suffix: '+' },
  ];

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat) => {
        let current = 0;
        const increment = Math.ceil(stat.target / 50);
        const interval = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(interval);
          }
          setCounts(prev => ({ ...prev, [stat.id]: current }));
        }, 30);
        return () => clearInterval(interval);
      });
    }
  }, [isInView]);

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-dark to-primary">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl text-primary-mint mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold">
                {counts[stat.id]}{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-300 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;