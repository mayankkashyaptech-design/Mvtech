// pages/MeetingDetails.jsx
import { useParams } from "react-router-dom";

export default function MeetingDetails() {
  const { id } = useParams();
  return (
    <div className="min-h-screen flex items-center justify-center text-center text-lg dark:text-white">
      Details for Meeting ID: {id}
    </div>
  );
}
