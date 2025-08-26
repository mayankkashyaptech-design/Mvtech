
import React, { useState } from "react";
import ButtonPost from "../Components/GoogleSingupbtn";
import { useGlobalcontext } from "../Features/Context";
import BookMeetingValidation from "../js/BookMeetingValidation";
import POST from "../js/POST";
import { ThreeDots } from "react-loader-spinner";
import Greeting from "../Components/greeting";
import { X } from "lucide-react";
import Lottie from "lottie-react";
import bookAnimation from "../assets/book-meeting-animation.json";

export default function BookMeetingPage() {
  const { User, btndisable, setbtndisable } = useGlobalcontext();
  const [showGreeting, setShowGreeting] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [errors, setErrors] = useState({});

  const change = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      email: User.userInfo.email, // keep syncing user email
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setbtndisable(true);
    setErrors({});

    const validationErrors = BookMeetingValidation(formData);

    if (validationErrors.length === 0) {
      const response = await POST("book-meeting", formData);
      if (response.statusCode === 200) {
        setResponseMessage(response.message);
        setShowGreeting(true);
        setTimeout(() => setShowGreeting(false), 7000);
      } else {
        setResponseMessage(response.message);
        setErrorToast(true);
        setTimeout(() => setErrorToast(false), 6000);
      }
    } else {
      setErrors(validationErrors.error || {});
    }

    setbtndisable(false);
    setLoading(false);
  };

  return (
    <>
   {showGreeting ? (
        <Greeting message={responseMessage} />
      ) : errorToast ? (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4">
          <div className="max-w-md w-full px-4">
            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-lg flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg mb-1">Booking Failed</h3>
                <h2>{responseMessage}</h2>
              </div>
              <button className="text-red-600 hover:text-red-800 transition">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-900 flex items-center justify-center px-4 py-12">
          <div className="bg-white dark:bg-slate-800 shadow-2xl rounded-lg overflow-hidden max-w-7xl w-full grid grid-cols-1 md:grid-cols-2">
            {/* Lottie Animation - Now visible on all screens */}
            <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-slate-700 dark:to-purple-900 p-6">
              <Lottie animationData={bookAnimation} loop={true} className="w-full max-w-md h-auto" />
            </div>

            {/* Right Side Form */}
            <div className="p-6 sm:p-8 md:p-12">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Book a Meeting</h1>
              <p className="text-blue-600 dark:text-blue-400 text-sm sm:text-md font-medium mb-4">
                "Connecting people, building futures – one meeting at a time."
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6">
                Schedule a time to connect with our team. Fill in your details and we’ll get back to you to confirm.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                  <input
                    placeholder="Name"
                    name="name"
                    onChange={change}
                    className="mt-1 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                  {errors.name && <div className="text-red-600">{errors.name}</div>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={change}
                      value={User.userInfo.email}
                      placeholder="you@example.com"
                      className="mt-1 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                    <input
                      type="tel"
                      name="phoneNo"
                      onChange={change}
                      placeholder="(123) 456-7890"
                      className="mt-1 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                {errors.phoneNo && <div className="text-red-600">{errors.phoneNo}</div>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
                    <input
                      type="date"
                      name="preferred_date"
                      onChange={change}
                      className="mt-1 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                    {errors.preferred_date && <div className="text-red-600">{errors.preferred_date}</div>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Time</label>
                    <input
                      type="time"
                      name="preferred_time"
                      onChange={change}
                      className="mt-1 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Meeting Type</label>
                  <select
                    name="Meeting_type"
                    onChange={change}
                    className="mt-1 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  >
                    <option>Consultation</option>
                    <option>Project Discussion</option>
                    <option>Follow-up</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Additional Information</label>
                  <textarea
                    rows="4"
                    name="message"
                    onChange={change}
                    placeholder="Share any specific details..."
                    className="mt-1 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  ></textarea>
                  {errors.message && <div className="text-red-600">{errors.message}</div>}
                </div>

                <button
                  className="flex items-center justify-center w-full bg-slate-950 dark:bg-purple-700 hover:bg-slate-800 dark:hover:bg-purple-800 text-white font-semibold py-4 rounded-lg transition duration-200"
                  type="submit"
                  disabled={btndisable}
                >
                  {loading ? (
                    <ThreeDots visible={true} height="30" width="60" color="#fff" radius="2" ariaLabel="three-dots-loading" />
                  ) : (
                    "Book Meeting"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


