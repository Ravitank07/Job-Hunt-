import { useState } from 'react';
import { FaUser, FaEnvelope, FaMobileAlt, FaBookOpen } from 'react-icons/fa';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    query: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Valid 10-digit mobile number is required';
    }

    if (!formData.query) {
      newErrors.query = 'Query is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission here (e.g., send data to a server)
      console.log(formData);
      // Reset form data and errors after successful submission
      setFormData({ fullName: '', email: '', mobile: '', query: '' });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4 mt-[7rem]">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-md shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
            <FaUser className="inline-block mr-2 text-gray-400" />
            Your Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            <FaEnvelope className="inline-block mr-2 text-gray-400" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2">
            <FaMobileAlt className="inline-block mr-2 text-gray-400" />
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="query" className="block text-gray-700 font-bold mb-2">
            <FaBookOpen className="inline-block mr-2 text-gray-400" />
            Query
          </label>
          <textarea
            id="query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
          />
          {errors.query && (
            <p className="text-red-500 text-xs mt-1">{errors.query}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-purple-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;