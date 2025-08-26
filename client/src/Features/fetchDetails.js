import GET from "../js/GET";

const getServices = async () => {
  try {
    const response = await GET('services');
    return response;
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return null;
  }
};

export { getServices };
