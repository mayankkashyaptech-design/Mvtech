import React from 'react';
import { Link } from 'react-router-dom'; // Import Link instead of useNavigate

export default function HelpCenter() {
  return (
    <div className='section-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white'>
      <div className='max-container'>
        <section className="py-20 space-y-20">
          
          {/* Section 1: Main Title */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">We Are Here To Help You</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              At <span className="text-blue-600 font-semibold">Alivetor</span>, we believe support should be personal, fast, and reliable.
              Whether you’re starting a journey or facing a challenge, our team is always ready.
            </p>
          </div>

          {/* Section 2: Features */}
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center hover:scale-90 transition-transform duration-300">
              <div className="text-blue-600 text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold mb-3">Fast Response</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our team is on standby — most inquiries get answered in under 30 minutes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center hover:scale-90 transition-transform duration-300">
              <div className="text-blue-600 text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We don’t just solve problems — we help you find smarter solutions to move forward faster.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center hover:scale-90 transition-transform duration-300">
              <div className="text-blue-600 text-5xl mb-4">🌙</div>
              <h3 className="text-2xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Day or night, weekday or weekend — Alivetor support is always available when you need it most.
              </p>
            </div>
          </div>

          {/* Section 3: Still Need Help */}
          <div className="rounded py-16 px-8 text-center mx-auto space-y-6 shadow-lg bg-blue-600 dark:bg-gray-800 transition-all duration-500">
            <h2 className="text-4xl font-bold text-white">Still Need Help?</h2>
            <p className="text-blue-100 dark:text-gray-400 text-lg">
              Can’t find the answer you're looking for? Our customer success team is ready to jump in.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/contact"
                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-100 transition-all duration-300"
              >
                Contact Support
              </Link>
              <Link
                to="/faq"
                className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Visit FAQ
              </Link>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
