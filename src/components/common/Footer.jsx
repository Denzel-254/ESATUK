import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLeaf, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaWhatsapp, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social Media Links - REPLACE THESE WITH YOUR ACTUAL LINKS
  const socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=61570999286319',
    instagram: 'https://www.instagram.com/esatuk_',
    linkedin: 'https://www.linkedin.com/company/e-satuk'
  };

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
            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-mint transition-colors hover:scale-110 transform duration-200"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-mint transition-colors hover:scale-110 transform duration-200"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-mint transition-colors hover:scale-110 transform duration-200"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href={socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-mint transition-colors hover:scale-110 transform duration-200"
                aria-label="Subscribe to our YouTube channel"
              >
                <FaYoutube size={20} />
              </a>
              {/* Optional: Add TikTok and LinkedIn */}
              <a 
                href={socialLinks.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-mint transition-colors hover:scale-110 transform duration-200"
                aria-label="Follow us on TikTok"
              >
                <FaTiktok size={20} />
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-mint transition-colors hover:scale-110 transform duration-200"
                aria-label="Connect with us on LinkedIn"
              >
                <FaLinkedin size={20} />
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
                <div className="text-sm text-gray-300">
                  <div>+254 742 748 797</div>
                  <div>+254 793 962 548</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-primary-mint flex-shrink-0" />
                <a 
                  href="https://wa.me/254742748797" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-primary-mint transition-colors"
                >
                  +254 742 748 797
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary-mint flex-shrink-0" />
                <a 
                  href="mailto:esatukofficialw@gmail.com"
                  className="text-sm text-gray-300 hover:text-primary-mint transition-colors"
                >
                  esatukofficialw@gmail.com
                </a>
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
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-400">
            <span>Integrity to Nature 🌿</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Built by 
              <a 
                href="http://calvinweb.co.ke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-mint hover:text-white transition-colors flex items-center gap-1 font-semibold"
              >
                <FaCode className="text-xs" />
                Calvinweb Solutions
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;