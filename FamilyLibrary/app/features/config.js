export const API_URI = "https://192.168.88.16:5000/api";
export const axiosConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
