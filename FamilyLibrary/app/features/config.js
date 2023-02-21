// export const API_URI = "http://192.168.88.16:5000/api";
export const API_URI = "http://192.168.164.67:5000/api";
export const axiosConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
