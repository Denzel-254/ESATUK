import { motion } from 'framer-motion';
import { useState } from 'react';

const Partners = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Partner data - Replace with your actual partners
  const partners = [
    {
      id: 1,
      name: 'KUNEC',
      logo: '/kunec.jpg',
      description: 'Kenyatta University Environmental Club'
    },
    {
      id: 2,
      name: 'WWF',
      logo: 'https://placehold.co/200x80/2E7D32/FFFFFF?text=WWF',
      description: 'World Wildlife Fund'
    },
    {
      id: 3,
      name: 'Greenpeace',
      logo: 'https://placehold.co/200x80/2E7D32/FFFFFF?text=Greenpeace',
      description: 'Environmental Organization'
    },
    {
      id: 4,
      name: 'TUK',
      logo: 'https://placehold.co/200x80/2E7D32/FFFFFF?text=TUK',
      description: 'Technical University of Kenya'
    },
    {
      id: 5,
      name: 'CWS',
      logo: '/icon.png',
      description: 'Calvinweb Solutions'
    },
    {
      id: 6,
      name: 'NEMA',
      logo: 'https://placehold.co/200x80/2E7D32/FFFFFF?text=NEMA',
      description: 'National Environment Management Authority'
    },
    {
      id: 7,
      name: 'Sustainable Kenya',
      logo: 'https://placehold.co/200x80/2E7D32/FFFFFF?text=Sustainable+Kenya',
      description: 'Sustainable Development Initiative'
    },
    {
      id: 8,
      name: 'EcoTrust',
      logo: 'https://placehold.co/200x80/2E7D32/FFFFFF?text=EcoTrust',
      description: 'Environmental Trust Fund'
    },
    {
      id: 9,
      name: 'Green Belt Movement',
      logo: 'https://placehold.co/200x80/2E7D32/FFFFFF?text=Green+Belt',
      description: 'Environmental Conservation Movement'
    },
  ];

  // Triple the partners for seamless infinite scrolling
  const scrollingPartners = [...partners, ...partners, ...partners];

  return (
    <section className="section-padding bg-gray-light overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-block bg-primary-pale text-primary px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            Our Partners
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-2 md:mb-4">
            Trusted by Organizations
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Collaborating with leading environmental organizations to create a sustainable future.
          </p>
        </motion.div>

        {/* Partner Logos Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-gray-light via-gray-light/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-gray-light via-gray-light/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="relative py-6 md:py-8 lg:py-10">
            <motion.div
              className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center"
              animate={{
                x: isHovered ? 0 : ['0%', '-50%'],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatType: 'loop',
                },
              }}
              style={{
                width: 'max-content',
              }}
            >
              {scrollingPartners.map((partner, index) => (
                <motion.div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 min-w-[100px] sm:min-w-[140px] md:min-w-[180px] lg:min-w-[200px] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative border border-gray-50 hover:border-primary/20">
                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
                      {/* Partner Logo */}
                      <div className="w-16 h-12 sm:w-20 sm:h-14 md:w-28 md:h-20 lg:w-36 lg:h-24 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo - Environmental partner`}
                          className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 filter grayscale group-hover:grayscale-0"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Partner Name */}
                      <div className="text-center w-full">
                        <p className="text-xs sm:text-sm font-bold text-primary-dark group-hover:text-primary transition-colors">
                          {partner.name}
                        </p>
                        <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[120px] sm:max-w-[150px] mx-auto leading-tight">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator - Mobile Friendly */}
          <div className="flex justify-center items-center gap-2 mt-2 md:mt-4">
            <span className="text-[10px] md:text-xs text-primary/60">◄</span>
            <span className="text-[10px] md:text-xs text-primary/60 animate-pulse">
              {isHovered ? 'Paused' : 'Scrolling Partners'}
            </span>
            <span className="text-[10px] md:text-xs text-primary/60">►</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;