import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Membership from './pages/Membership';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SEO from './components/common/SEO';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/events" element={<Events />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;