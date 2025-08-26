import React from "react";

const MeetingCard = ({ name, email, phoneNo, time, MeetingType }) => (
  <div className="mt-2.5 w-full bg-white p-4 rounded shadow-sm xl-1500:">
    <div className="mb-4">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">{email}</p>
      <span className="text-sm text-gray-500">{phoneNo}</span>
    </div>

    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3 space-x-2">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M5 11h14M5 19h14M5 15h14" />
      </svg>
      <span className="text-sm text-black">{MeetingType}</span>
      <span>{time}</span>
    </div>

    {/* <p className="text-gray-800 mb-3">{message}</p>

    <div className="text-sm text-gray-700 dark:text-gray-200 border-t pt-4">
      <h3 className="text-black font-semibold mb-2">Status Info</h3>
      <ul className="list-disc list-inside">
        {Object.entries(Additional_info).map(([key, value], index) => (
          <li key={index} className="text-black">
            <span className="font-medium text-gray-700">{key}</span>: {value}
          </li>
        ))}
      </ul>
    </div> */}
  </div>
);

export default MeetingCard;
