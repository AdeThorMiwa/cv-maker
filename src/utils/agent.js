import axios from "axios";

let BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/"
    : "https://cv-builder-api-production.up.railway.app/";

let axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.defaults.headers["Content-Type"] = "application/json";

export default axiosInstance;