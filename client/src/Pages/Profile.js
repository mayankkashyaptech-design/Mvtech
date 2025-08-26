import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import defaultImg from "../assets/defaultimg.png.png";
import { useGlobalcontext } from "../Features/Context";

const ProfilePage = () => {
  const { User } = useGlobalcontext();
  
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    profileImage: null,
  });

  // Load user info into formData when User changes
  useEffect(() => {
    if (User?.userInfo) {
      setFormData({
        name: User.userInfo.name || "",
        email: User.userInfo.email || "",
        phoneNo: User.userInfo.phoneNo || "",
        profileImage: null,
      });
    }
  }, [User]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, profileImage: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Form Data:", formData);
    setEditMode(false);
    // Here you can also call API to update the profile info
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen flex justify-center items-center py-12 px-4">
      
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-6">
            <img
              src={formData.profileImage || defaultImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-gray-200 dark:border-slate-600 shadow-lg"
            />
            <label className="absolute bottom-0 right-0 w-8 h-8 bg-black text-white rounded-full cursor-pointer flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 16v4m4-4v4m-2-2h2m-1-4l1-1m-1 1l-1 1m-6-5l2 2m0 0l2-2m-2 2V5"
                ></path>
              </svg>
            </label>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            Profile Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500"
                  disabled={!editMode}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500"
                  disabled={!editMode}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Phone Number</label>
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500"
                disabled={!editMode}
              />
            </div>

            <div className="flex justify-between mt-8">
              {editMode ? (
                <div className="flex space-x-4 w-full">
                  <button
                    type="submit"
                    className="w-full py-3 bg-slate-900 dark:bg-purple-700 text-white rounded-full transition-all hover:bg-slate-800 dark:hover:bg-purple-800"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditMode(false)}
                    className="w-full py-3 bg-gray-300 dark:bg-slate-600 text-gray-700 dark:text-white rounded-full hover:bg-gray-400 dark:hover:bg-slate-500 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setEditMode(true)}
                  className="w-full py-3 bg-slate-900 dark:bg-purple-700 text-white rounded-full transition-all hover:bg-slate-800 dark:hover:bg-purple-800"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </form>
        </div>
      {/* </motion.div> */}
    </div>
  );
};

export default ProfilePage;
