import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLeaf, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaLeaf className="text-2xl text-primary-mint" />
              <span className="text-xl font-bold">ESATUK</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Environmental Students' Association of the Technical University of Kenya.
              Championing sustainability, climate action, and environmental stewardship.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-primary-mint transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-mint transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-mint transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-mint transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-mint">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Gallery', 'Events', 'Membership', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary-mint transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-mint">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-mint mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Technical University of Kenya,<br />
                  Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary-mint flex-shrink-0" />
                <span className="text-sm text-gray-300">+254 700 000 000</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary-mint flex-shrink-0" />
                <span className="text-sm text-gray-300">esatuk@tukenya.ac.ke</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-mint">Stay Updated</h4>
            <p className="text-sm text-gray-300 mb-3">
              Subscribe to our newsletter for environmental updates and events.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-primary-mint"
              />
              <button className="btn-primary text-sm py-2 px-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} ESATUK. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Integrity to Nature 🌿
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;