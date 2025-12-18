import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Icon } from '../components/SharedComponents.jsx';
import { contactDetails, contactServiceOptions } from '../components/Data.js';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_cesd6xk',
        'template_rqnz7u4',
        e.target,
        'gMnwuBkg-JdrEmXB7'
      )
      .then(() => {
        setSuccess(true);
        e.target.reset();
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {/* Contact Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-gray-800 to-gray-900 border-b border-yellow-500 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #e8be69 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #e8be69 0%, transparent 50%),
                              radial-gradient(circle at 40% 40%, #e8be69 0%, transparent 50%)`
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-yellow-500 text-sm md:text-lg font-medium mb-6">
              Home / Contact Us
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
              NEED ANY <span className="text-yellow-500">HELP</span>?
            </h1>
            <p className="text-base md:text-lg text-gray-300">
              Get in touch with us. We’ll respond quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gray-50 p-6 md:p-8 rounded-2xl shadow-xl border">
              <h2 className="text-3xl font-bold mb-2">SEND US EMAIL</h2>
              <p className="text-gray-600 mb-6">Feel free to write.</p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-yellow-500"
                  />
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                    className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full p-4 rounded-lg border text-gray-600 focus:ring-2 focus:ring-yellow-500"
                >
                  {contactServiceOptions.map((option, index) => (
                    <option key={index} value={option} disabled={index === 0}>
                      {option}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full p-4 rounded-lg border resize-none focus:ring-2 focus:ring-yellow-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-yellow-500 text-white font-bold rounded-lg
                             hover:bg-yellow-400 transition inline-flex items-center
                             justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Icon path="M9 5l7 7-7 7" className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-xl border">
                <h3 className="text-2xl font-bold flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-3 text-yellow-500" /> UAE
                </h3>
                <p className="mb-2">{contactDetails.uae.addressDetail}</p>
                <p>
                  <Phone className="inline w-4 h-4 mr-2 text-yellow-500" />
                  {contactDetails.uae.phone}
                </p>
                <p>
                  <Mail className="inline w-4 h-4 mr-2 text-yellow-500" />
                  {contactDetails.uae.email}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl border">
                <h3 className="text-2xl font-bold flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-3 text-yellow-500" /> India
                </h3>
                <p className="mb-2">{contactDetails.india.addressDetail}</p>
                <p>
                  <Phone className="inline w-4 h-4 mr-2 text-yellow-500" />
                  {contactDetails.india.phone2}
                </p>
                <p>
                  <Mail className="inline w-4 h-4 mr-2 text-yellow-500" />
                  {contactDetails.uae.email}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl text-center max-w-sm w-full shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Message Sent </h3>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. We’ll get back to you soon.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-bold hover:bg-yellow-400"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPage;
