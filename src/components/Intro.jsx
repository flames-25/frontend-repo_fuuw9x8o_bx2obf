import React from 'react';

const Intro = () => {
  return (
    <section id="learn" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Knowledge. Compassion. Action.</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Early detection saves lives. Regular screenings, understanding risk factors, and adopting healthy habits can make a real difference. We share resources, community programs, and supportive services to help you or your loved ones navigate the journey.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
            <li>Understand screening guidelines for different ages</li>
            <li>Connect with local support groups and counseling</li>
            <li>Find trustworthy educational materials</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="text-3xl font-semibold text-blue-600">1 in 3</p>
              <p className="text-sm text-gray-500">Cancers preventable</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="text-3xl font-semibold text-blue-600">Early</p>
              <p className="text-sm text-gray-500">Detection matters</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="text-3xl font-semibold text-blue-600">24/7</p>
              <p className="text-sm text-gray-500">Care resources</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
