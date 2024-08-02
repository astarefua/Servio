import axios from "axios";

const API_KEY = "d3a40885941e80a55a0d8e04";
const BASE_URL = "https://v6.exchangerate-api.com/v6";

export const getLatestRates = async (baseCurrency) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${API_KEY}/latest/${baseCurrency}`
    );
    return {
      ...response.data,
    };
  } catch (error) {
    console.error("Error getting exchange rates", error);
    throw error;
  }
};
