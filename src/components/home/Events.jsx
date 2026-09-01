import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendar, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Tree Planting Drive',
      date: 'March 20, 2026',
      time: '8:00 AM - 1:00 PM',
      location: 'Karura Forest, Nairobi',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Join us for our annual tree planting initiative to restore and protect forest ecosystems.'
    },
    {
      id: 2,
      title: 'Environmental Awareness Workshop',
      date: 'April 5, 2026',
      time: '2:00 PM - 5:00 PM',
      location: 'TUK Main Campus, Hall B',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Interactive workshop on climate change, sustainability, and actionable solutions for students.'
    },
    {
      id: 3,
      title: 'Beach Cleanup Initiative',
      date: 'May 12, 2026',
      time: '7:00 AM - 12:00 PM',
      location: 'Mombasa Beach, Kenya',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Help us protect marine ecosystems through this massive beach cleanup campaign.'
    }
  ];

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary-pale text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Upcoming Activities
          </span>
          <h2 className="section-title">Our Events</h2>
          <p className="section-subtitle">
            Join us in making a difference through our various environmental activities 
            and initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Upcoming
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-2">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCalendar className="text-primary flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaClock className="text-primary flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaMapMarkerAlt className="text-primary flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {event.description}
                </p>
                <button className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center gap-2 text-sm">
                  Learn More <FaArrowRight className="text-xs" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/events" className="btn-primary inline-flex items-center gap-2">
            View All Events
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;