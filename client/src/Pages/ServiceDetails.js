// pages/ServiceDetails.jsx
import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { id } = useParams();
  return (
    <div className="min-h-screen flex items-center justify-center text-center text-lg dark:text-white">
      Details for Service Request ID: {id}
    </div>
  );
}
