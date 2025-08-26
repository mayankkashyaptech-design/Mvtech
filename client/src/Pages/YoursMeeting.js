import React from "react";
import { CalendarDays, Clock, MapPin, MessageCircle } from "lucide-react";

const mockMeetings = [
  {
    id: 1,
    name: "John Doe",
    date: "2025-05-05",
    time: "14:00",
    type: "Consultation",
    message: "Looking forward to discussing the UI revamp.",
    location: "Online",
  },
  {
    id: 2,
    name: "Sarah Smith",
    date: "2025-05-10",
    time: "11:00",
    type: "Project Discussion",
    message: "We need to finalize the backend strategy.",
    location: "Zoom",
  },
];

export default function YourMeetingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-white mb-8">
          Your Booked Meetings
        </h1>

        {mockMeetings.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No meetings booked yet.
          </p>
        ) : (
          <div className="space-y-6">
            {mockMeetings.map((meeting) => (
              <div
                key={meeting.id}
                className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg rounded-xl p-6 transition hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {meeting.name}
                  </h2>
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {meeting.type}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5" />
                    <span>{meeting.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{meeting.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{meeting.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span className="truncate">{meeting.message}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
