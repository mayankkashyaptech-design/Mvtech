import React, { useState } from "react";

const SubscribeBanner = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Validate the email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
     
    // If valid, clear the error and reset email
    setError("");
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 text-white py-14 px-6 min-h-[30vh]  flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-2 text-white dark:text-white">Stay in the Loop 🚀</h2>
          <p className="text-lg text-white/90 dark:text-white/80 max-w-md">
            Subscribe to receive the latest news, updates, and exclusive offers about our lift & elevator solutions.
          </p>
        </div>

        {/* Subscribe Form */}
        <form
          onSubmit={handleSubscribe}
          className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="relative w-full">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white dark:bg-white/10 dark:border-white/20"
            />
            {error && (
              <span className="absolute text-sm text-red-500 -bottom-6 left-0">{error}</span>
            )}
          </div>
          <button
            type="submit"
            className="bg-white text-indigo-700 dark:bg-gray-100 dark:text-indigo-800 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-white transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeBanner;
