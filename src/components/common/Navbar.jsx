import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaLeaf } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/events', label: 'Events' },
    { path: '/membership', label: 'Join Us' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <FaLeaf className={`text-3xl transition-colors ${
              scrolled ? 'text-primary' : 'text-white'
            } group-hover:rotate-12 transition-transform`} />
            <div>
              <span className={`text-xl font-bold transition-colors ${
                scrolled ? 'text-primary-dark' : 'text-white'
              }`}>ESATUK</span>
              <span className={`block text-[10px] uppercase tracking-wider transition-colors ${
                scrolled ? 'text-primary' : 'text-green-200'
              }`}>Integrity to Nature</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? scrolled ? 'text-primary' : 'text-white'
                    : scrolled ? 'text-secondary hover:text-primary' : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      scrolled ? 'bg-primary' : 'bg-white'
                    }`}
                    transition={{ type: 'spring', bounce: 0.2 }}
                  />
                )}
              </Link>
            ))}
            <Link 
              to="/membership" 
              className={`text-sm py-2 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                scrolled 
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-lg' 
                  : 'bg-white text-primary hover:bg-gray-100 shadow-lg'
              }`}
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl transition-colors ${
              scrolled ? 'text-primary-dark' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white shadow-lg rounded-b-2xl"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/membership"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center"
            >
              Join Now
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;