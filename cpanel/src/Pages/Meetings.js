import React, { useEffect, useState, Suspense, lazy } from "react";
import GET from "../Features/GET";
import CubeLoader from "../Components/CubeLoader";
import { Link } from "react-router-dom";

const MeetingCard = lazy(() => import("../Components/MeetingCard"));

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await GET("get-all-meetings");
    
        setMeetings(response || []); // Adjust if your API response wraps data in .data
      } catch (error) {
        console.error("Failed to fetch meetings:", error);
      }
    }
    getData();
  }, []);

  const filteredMeetings = meetings.filter(
    (meeting) =>
      meeting.name?.toLowerCase().includes(search.toLowerCase()) ||
      meeting.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 min-h-[80%]">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mb-6 px-4 py-2 border rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-2  xl-1800:grid-cols-3 max-w-[1240px]">
  <Suspense fallback={<CubeLoader />}>
    {filteredMeetings.map((meeting, idx) => {
      const {
        id,
        name,
        email,
        Meeting_type,
        
      } = meeting;

      return (
        <Link to={`details/id/${id}`}>
        <MeetingCard
          key={idx}
          name={name}
          MeetingType={Meeting_type}
          email={email}
          
          
        />
        </Link>
      );
    })}
  </Suspense>

     
        {filteredMeetings.length === 0 && (
          <div className="text-gray-500 text-sm col-span-full text-center">
            No meetings found.
            <CubeLoader/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Meetings;
