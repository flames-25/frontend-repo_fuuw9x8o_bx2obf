import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Cancer Awareness & Support. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#learn" className="hover:text-white transition">Learn</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#top" className="hover:text-white transition">Back to top</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
