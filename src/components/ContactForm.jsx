import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend required; simple UX feedback
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-gray-600">
            Reach out for information, resources, or emotional support. We're here to help and guide you to the right services.
          </p>
          <div className="mt-6 p-5 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50">
            <p className="text-sm text-blue-900">
              If this is an emergency, please contact your local emergency number immediately. For medical advice, consult a healthcare professional.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="How can we support you?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex justify-center items-center rounded-md bg-blue-600 px-5 py-3 text-white hover:bg-blue-500 transition disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending…' : status === 'success' ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
