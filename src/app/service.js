import axios from "axios";

export const service = axios.create({
  baseURL: "https://anything-1.onrender.com/users",
  headers: { "Content-Type": "application/json" },
});
