export const API_URI = "https://familylibrary-api.onrender.com/api";
export const axiosConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
