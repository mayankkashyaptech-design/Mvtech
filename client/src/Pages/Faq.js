import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Alivetor?",
    answer:
      "Alivetor is a platform designed to simplify your digital journey by offering a range of professional services — from web development and marketing solutions to technical support — all in one place.",
  },
  {
    question: "How quickly can I expect support from Alivetor?",
    answer:
      "We pride ourselves on a rapid response system. Most inquiries are answered within 30 minutes, and critical support requests are prioritized instantly, 24/7.",
  },
  {
    question: "Can I customize the services according to my needs?",
    answer:
      "Absolutely! At Alivetor, we believe every client is unique. You can customize any of our services to fit your specific business requirements.",
  },
  {
    question: "Is Alivetor available internationally?",
    answer:
      "Yes! Our services are available worldwide. Wherever you are, our digital solutions can reach you without barriers.",
  },
  {
    question: "How do I get started with Alivetor?",
    answer:
      "Getting started is easy. Simply contact us through our platform, schedule a free consultation, and we'll guide you through the entire process tailored to your needs.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action at bottom */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Still have questions? Our support team is ready to help you 24/7.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
