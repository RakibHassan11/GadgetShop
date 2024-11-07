// src/Components/UniquePage/UniquePage.jsx
import React, { useState } from 'react';

const UniquePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opinion: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // You can send the form data to an API or store it here
    // For now, we'll just log it to the console
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="p-8 ">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-purple-600">We Value Your Opinion!</h1>
        <p className="mt-4 text-center text-gray-600 ">Please share your thoughts with us</p>

        {isSubmitted ? (
          <div className="text-center mt-8 p-4 bg-green-100 text-green-600 rounded-md">
            <h2 className="text-xl font-semibold">Thank you for your opinion!</h2>
            <p>Your feedback is important to us.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold text-lg">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold text-lg">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="opinion" className="block font-semibold text-lg">
                  Your Opinion
                </label>
                <textarea
                  id="opinion"
                  name="opinion"
                  value={formData.opinion}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  rows="4"
                  placeholder="Enter your opinion"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3 bg-purple-600 text-white font-semibold rounded-lg"
              >
                Submit Opinion
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UniquePage;
