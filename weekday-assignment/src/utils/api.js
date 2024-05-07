import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.weekday.technology",
    headers: {
      "Content-Type": "application/json",
    },
  });


export const fetchJobsFromAPI = async (offset, filters) => {
    try {
      const response = await instance.post("/adhoc/getSampleJdJSON", {
        limit: 10,
        offset,
        ...filters,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };