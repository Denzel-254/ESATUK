import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { useState } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: '/three.jpeg', title: 'Tree Planting Drive', category: 'Activities' },
    { id: 2, src: '/one.jpeg', title: 'Environmental Workshop', category: 'Workshops' },
    { id: 3, src: '/treasurer.jpeg', title: 'Beach Cleanup', category: 'Activities' },
    { id: 4, src: '/logo.jpeg', title: 'Nature Conservation', category: 'Conservation' },
    { id: 5, src: '/two.jpeg', title: 'Community Engagement', category: 'Community' },
    { id: 6, src: '/three.jpeg', title: 'Environmental Education', category: 'Education' },
    { id: 7, src: '/two.jpeg', title: 'Biodiversity Conservation', category: 'Conservation' },
    { id: 8, src: '/vice.jpeg', title: 'Forest Exploration', category: 'Activities' },
    { id: 9, src: '/treasurer.jpeg', title: 'Mountain Cleanup', category: 'Activities' },
    { id: 10, src: '/one.jpeg', title: 'Sustainable Living', category: 'Education' },
    { id: 11, src: '/two.jpeg', title: 'Green Campus Initiative', category: 'Activities' },
    { id: 12, src: '/organizer.jpeg', title: 'River Cleanup', category: 'Activities' },
  ];

  const categories = ['All', ...new Set(images.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="Gallery - ESATUK Environmental Activities & Events"
        description="Explore ESATUK's photo gallery showcasing environmental activities, tree planting, beach cleanups, workshops, and community engagement initiatives at TUK."
        keywords="ESATUK gallery, environmental activities Kenya, TUK events, tree planting photos, beach cleanup, environmental workshops"
        url="https://esatuk.org/gallery"
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
              Our Gallery
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Capturing moments of environmental stewardship, community engagement, 
              and impactful initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-light">
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
                    : 'bg-white text-primary hover:bg-primary-pale'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => openLightbox(images.indexOf(image))}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl hover:text-primary-mint transition-colors"
          >
            <FaTimes />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
            className="absolute left-4 text-white text-3xl hover:text-primary-mint transition-colors"
          >
            <FaArrowLeft />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
            className="absolute right-4 text-white text-3xl hover:text-primary-mint transition-colors"
          >
            <FaArrowRight />
          </button>

          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Gallery;