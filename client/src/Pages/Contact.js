import React, { useState } from "react";
import ButtonPost from "../Components/GoogleSingupbtn";
import { useGlobalcontext } from "../Features/Context";

const ContactPage = () => {
  let {User}=useGlobalcontext();
  const [form, setForm] = useState({
    name: "",
    email: "" || User.userInfo.email,
    phone: "" || User.userInfo.phoneNo,
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", form);
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 dark:bg-slate-900">
      {/* Banner */}
      <section className="bg-gradient-to-r from-indigo-200 to-slate-300 dark:from-slate-800 dark:to-purple-900 text-slate-900 dark:text-white py-20 text-center px-6">
  <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
  <p className="max-w-xl mx-auto text-lg text-slate-800 dark:text-slate-300">
    We're here to help you with all your elevator needs. Let's get in touch!
  </p>
</section>


      {/* Get in Touch Form */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-10">
          Get In Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 grid grid-cols-1 gap-6"
        >
          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+1 234 567 8900"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            />
          </div>
          <div>
            {/* <ButtonPost path='send-mail'data={form} 
              className="w-full bg-blue-600 dark:bg-purple-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-purple-800 transition"
               buttonText="Send Message"
            /> */}
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-purple-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-purple-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Google Map Section */}
      <section className="pb-0">
        <h2 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-400 mb-6">
          Find Us On the Map
        </h2>
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9337527695916!2d-122.08424968469264!3d37.421999979825735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24b6f763e3f%3A0xc3b4b6af9c8f7f09!2sGoogleplex!5e0!3m2!1sen!2sus!4v1679999999999"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
