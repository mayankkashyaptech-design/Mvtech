import React, { useState } from "react";
import Lottie from "lottie-react";
import serviceAnimation from "../assets/service-req.json";
import { useGlobalcontext } from "../Features/Context";

const ServiceForm = () => {
  let {User}=useGlobalcontext();
  const [form, setForm] = useState({
    name: User.userInfo.name,
    email: User.userInfo.email,
    address: "",
    phoneNo: "",
    maintenancePeriod: "1year",
    startDate: "",
    endDate: "",
    facilities: [],
  });

  const [errors, setErrors] = useState({}); // To hold validation errors

  const facilitiesOptions = [
    "Cleaning",
    "Inspection",
    "Repairs",
    "Parts Replacement",
    "Lubrication",
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle checkbox changes for facilities
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      facilities: checked
        ? [...prevForm.facilities, value]
        : prevForm.facilities.filter((f) => f !== value),
    }));
  };

  // Validate the form data
  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Check for required fields
    if (!form.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!form.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!form.phoneNo) {
      errors.phoneNo = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(form.phoneNo)) {
      errors.phoneNo = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!form.startDate) {
      errors.startDate = "Start date is required";
      isValid = false;
    }

    if (!form.endDate) {
      errors.endDate = "End date is required";
      isValid = false;
    } else if (new Date(form.endDate) <= new Date(form.startDate)) {
      errors.endDate = "End date must be after the start date";
      isValid = false;
    }

    if (!form.address) {
      errors.address = "Address is required";
      isValid = false;
    }

    // Update errors state
    setErrors(errors);
    return isValid;
  };

  // Handle form submit
 const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(form);
      // Proceed with form submission
      let responce = await fetch('http://localhost:8000/service-order',{
        method:"POST",
        body:JSON.stringify(form),
        headers:{
          'Content-Type':'application/json'
        }
      })
      let message=await responce.json();
      console.log(message)

    }
  };

  return (
    
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 flex items-center justify-center px-4 py-12">
      <div className="bg-white dark:bg-slate-800 shadow-2xl rounded-lg overflow-hidden max-w-7xl w-full grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side Animation */}
        <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-slate-700 dark:to-purple-900 p-6">
          <Lottie animationData={serviceAnimation} loop={true} className="w-full h-full max-w-xs sm:max-w-sm md:max-w-md" />
        </div>

        {/* Right Side Form */}
        <div className="p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
            Service Request
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={User.userInfo.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-black dark:text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-black dark:text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
              <input
                type="tel"
                name="phoneNo"
                value={form.phoneNo}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-black dark:text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              {errors.phoneNo && <span className="text-red-500 text-sm">{errors.phoneNo}</span>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Maintenance Period</label>
                <select
                  name="maintenancePeriod"
                  value={form.maintenancePeriod}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-black dark:text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="1year">1 Year</option>
                  <option value="6months">6 Months</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-black dark:text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={form.endDate}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-black dark:text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                {errors.endDate && <span className="text-red-500 text-sm">{errors.endDate}</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-black dark:text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Facilities Covered</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {facilitiesOptions.map((facility) => (
                  <label key={facility} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                    <input
                      type="checkbox"
                      value={facility}
                      checked={form.facilities.includes(facility)}
                      onChange={handleCheckboxChange}
                      className="accent-blue-600"
                    />
                    {facility}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition dark:bg-purple-700 dark:hover:bg-purple-800"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
