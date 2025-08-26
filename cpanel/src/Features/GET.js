const API_URL = import.meta.env.VITE_API_BASE_URL;

export default async function GET(path) {
  try {
    const response = await fetch(`${API_URL}/${path}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
