import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import Values from '../components/home/Values';
import Events from '../components/home/Events';
import Stats from '../components/home/Stats';
import GalleryPreview from '../components/home/GalleryPreview';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <AboutPreview />
      <Stats />
      <Values />
      <Events />
      <GalleryPreview />
    </motion.div>
  );
};

export default Home;