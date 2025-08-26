import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function Greeting({message}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-md text-center space-y-6 transition-all duration-500">
        {loading ? (
          <>
            <div className="w-12 h-12 mx-auto border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">Booking your meeting...</h2>
            <p className="text-gray-500 dark:text-gray-400">Please wait a moment.</p>
          </>
        ) : (
          <>
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto animate-bounce" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{message}</h2>
            <p className="text-gray-600 dark:text-gray-300">Thank you! We'll be in touch with you soon.</p>
          </>
        )}
      </div>
    </div>
  );
}
