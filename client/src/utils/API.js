const axios = require("axios").default;
const fetch = require("node-fetch");

// IMPORT DATA FROM USER INPUT
// cityName = this is what the user types into input field to search by city

async function SearchConcertData(city) {
  const capitalizeCity = city.charAt(0).toUpperCase() + city.slice(1);
  const cityName = capitalizeCity.replace(/"/g, "");

  // const artistName = artist.toLowerCase().split(" ").join("+");

  const apiKey = "72a52a72e7a14c1a47a69d46ea5e7322";

  let options1 = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      q: `${cityName}`,
      units: "imperial",
      appid: `${apiKey}`,
    },
  };

  const { data } = await axios.request(options1);
  console.log(data)

  const lat = data.coord.lat;
  const lon = data.coord.lon;

  const url = "https://api.predicthq.com/v1/events";

  const options2 = {
    method: "GET",
    qs: {
      "brand_unsafe.exclude": "true",
      category: "concerts",
      country: "US",
      limit: "10",
      "location_around.origin": `${lat},${lon}`,
      q: "harry styles",
      sort: "start",
      "start.gt": "2021-08-04",
    },
    headers: {
      Authorization: "Bearer UCPQh7iuieqQpZWV4NOqoJPMhKvavlBNoAfad84K",
    },
  };

  const res = await fetch(url, options2);
  return res.json();
}

export default SearchConcertData;
