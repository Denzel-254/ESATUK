import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaCheck, FaSpinner } from 'react-icons/fa';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    regNumber: '',
    course: '',
    yearOfStudy: '',
    reason: '',
    interests: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const interestsOptions = [
    'Climate Action',
    'Tree Planting',
    'Waste Management',
    'Biodiversity',
    'Sustainable Development',
    'Environmental Education',
    'Policy Advocacy',
    'Research'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // EmailJS configuration - Replace with your actual credentials
      const templateParams = {
        to_name: 'ESATUK Admin',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        reg_number: formData.regNumber,
        course: formData.course,
        year: formData.yearOfStudy,
        reason: formData.reason,
        interests: formData.interests.join(', '),
        subject: 'New Membership Registration'
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        regNumber: '',
        course: '',
        yearOfStudy: '',
        reason: '',
        interests: []
      });
    } catch (err) {
      setError('Failed to submit registration. Please try again.');
      console.error('EmailJS error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-3xl shadow-lg text-center"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCheck className="text-4xl text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-primary-dark mb-2">
          Registration Successful!
        </h3>
        <p className="text-gray-600">
          Thank you for joining ESATUK. You will receive a confirmation email shortly.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="btn-primary mt-6"
        >
          Register Another Member
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-8 rounded-3xl shadow-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="john@tukenya.ac.ke"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="+254 700 000 000"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Registration Number *
          </label>
          <input
            type="text"
            name="regNumber"
            value={formData.regNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="TUK/2024/XXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Course/Program *
          </label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="BSc. Environmental Science"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Year of Study *
          </label>
          <select
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          >
            <option value="">Select Year</option>
            <option value="1">Year 1</option>
            <option value="2">Year 2</option>
            <option value="3">Year 3</option>
            <option value="4">Year 4</option>
            <option value="5+">Year 5+</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Why do you want to join ESATUK? *
        </label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
          rows="3"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="Share your motivation for joining our environmental community..."
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Areas of Interest (Select all that apply)
        </label>
        <div className="flex flex-wrap gap-3">
          {interestsOptions.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => handleInterestChange(interest)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                formData.interests.includes(interest)
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-primary-pale'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full mt-8 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <FaSpinner className="animate-spin" />
            Submitting...
          </>
        ) : (
          'Join ESATUK Now'
        )}
      </button>
    </motion.form>
  );
};

export default MembershipForm;