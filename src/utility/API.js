import axios from "axios";

export const countryApi = axios.create({
  baseURL: process.env.REACT_APP_COUNTRY_API,
});

export const weatherApi = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API,
});
