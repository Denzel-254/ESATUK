import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { useState } from 'react';
import { FaCalendar, FaMapMarkerAlt, FaClock, FaUsers, FaSearch } from 'react-icons/fa';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Annual Tree Planting Drive',
      date: 'March 20, 2026',
      time: '8:00 AM - 1:00 PM',
      location: 'Karura Forest, Nairobi',
      type: 'Upcoming',
      image: '/two.jpeg',
      description: 'Join us for our annual tree planting initiative to restore and protect forest ecosystems. We aim to plant 500 trees this year.',
      capacity: 200,
      registered: 145
    },
    {
      id: 2,
      title: 'Environmental Awareness Workshop',
      date: 'April 5, 2026',
      time: '2:00 PM - 5:00 PM',
      location: 'TUK Main Campus, Hall B',
      type: 'Upcoming',
      image: '/two.jpeg',
      description: 'Interactive workshop on climate change, sustainability, and actionable solutions for students. Featuring guest speakers from leading environmental organizations.',
      capacity: 100,
      registered: 78
    },
    {
      id: 3,
      title: 'Beach Cleanup Initiative',
      date: 'May 12, 2026',
      time: '7:00 AM - 12:00 PM',
      location: 'Mombasa Beach, Kenya',
      type: 'Upcoming',
      image: '/two.jpeg',
      description: 'Help us protect marine ecosystems through this massive beach cleanup campaign. All equipment and transportation provided.',
      capacity: 150,
      registered: 92
    },
    {
      id: 4,
      title: 'Sustainability Conference 2025',
      date: 'December 10, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'KICC, Nairobi',
      type: 'Past',
      image: '/two.jpeg',
      description: 'Annual sustainability conference bringing together students, professionals, and policymakers to discuss environmental challenges and solutions.',
      capacity: 500,
      registered: 423
    },
    {
      id: 5,
      title: 'Green Campus Initiative',
      date: 'November 15, 2025',
      time: '8:00 AM - 4:00 PM',
      location: 'TUK Campus',
      type: 'Past',
      image: '/two.jpeg',
      description: 'Campus-wide initiative to promote sustainable practices, waste management, and green infrastructure on campus.',
      capacity: 300,
      registered: 267
    },
    {
      id: 6,
      title: 'River Cleanup Campaign',
      date: 'October 8, 2025',
      time: '7:00 AM - 12:00 PM',
      location: 'Nairobi River',
      type: 'Past',
      image: '/two.jpeg',
      description: 'Community effort to clean and restore Nairobi River, raising awareness about water pollution and conservation.',
      capacity: 200,
      registered: 178
    }
  ];

  const filteredEvents = events
    .filter(event => 
      (filterType === 'all' || event.type.toLowerCase() === filterType) &&
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       event.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="ESATUK Events - Environmental Activities & Initiatives"
        description="Discover upcoming and past environmental events at ESATUK. Join tree planting drives, workshops, beach cleanups, and sustainability conferences at TUK."
        keywords="ESATUK events, environmental activities Kenya, tree planting events, TUK workshops, beach cleanup, sustainability conference"
        url="https://esatuk.org/events"
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
              Our Events
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover and participate in our environmental activities and initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full md:max-w-md">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                {['all', 'upcoming', 'past'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-6 py-2 rounded-full font-semibold capitalize transition-all duration-300 ${
                      filterType === type
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-primary-pale'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold ${
                    event.type === 'Upcoming' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-500 text-white'
                  }`}>
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">
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
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaUsers className="text-primary flex-shrink-0" />
                      <span>{event.registered} / {event.capacity} registered</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>
                  {event.type === 'Upcoming' && (
                    <button className="btn-primary w-full text-center">
                      Register Now
                    </button>
                  )}
                  {event.type === 'Past' && (
                    <button className="w-full py-3 rounded-lg bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 transition-colors">
                      View Event Report
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Events;