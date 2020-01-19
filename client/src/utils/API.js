import axios from "axios";

const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q="

// Getting the campgrounds by their ID

function getCampgroundById(parkCode) {
  return axios
      .get(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&api_key=O4VdhmolNStlPLj2bo2DfPKWks3F8J9xfihpGqTf`)
      .then(result => result.data);
}
export default {
  // API request from National Park Service 
  getCampground: function (query) {
      return axios.get(`https://developer.nps.gov/api/v1/campgrounds?q=${query}&api_key=O4VdhmolNStlPLj2bo2DfPKWks3F8J9xfihpGqTf`);
  },
  // API request from OpenWeather 
  getWeather: function (lat, lon, cnt) {
      return axios.get(`api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}`)
  },
  // API request from Hiking Project
  getTrails: function (lat, lng) {
      return axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=10&key=200542336-9cc42e1d5b620d5f44636b1bd9dc58f3`)
      .then(result => result.data);
  }
}