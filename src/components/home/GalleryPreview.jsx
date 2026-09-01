import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaImages, FaArrowRight } from 'react-icons/fa';

const GalleryPreview = () => {
  const images = [
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
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
            Our Activities
          </span>
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">
            Capturing moments of environmental stewardship, community engagement, 
            and impactful initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-2xl ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ height: index === 0 ? '400px' : '200px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
            <FaImages />
            View Full Gallery
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;