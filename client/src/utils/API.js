const axios = require("axios").default;
const fetch = require('node-fetch');

// IMPORT DATA FROM USER INPUT
// cityName = this is what the user types into input field to search by city


function searchConcertData (city) {

  const capitalizeCity = city.charAt(0).toUpperCase() + city.slice(1); 
  const cityName = capitalizeCity.replace(/"/g,"");
  
  // const artistName = artist.toLowerCase().split(" ").join("+");

  const apiKey = "72a52a72e7a14c1a47a69d46ea5e7322";
    
  const options = {
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather",
      params: {
          q: `${cityName}`,
          units: "imperial",
          appid: `${apiKey}`
      }
  }

  axios.request(options).then(function (response) {
      // console.log(response.data);

      const data = response.data;

      const lat = data.coord.lat;
      const lon = data.coord.lon;

      const url = 'https://api.predicthq.com/v1/events';

      const options = {
        method: 'GET',
        qs: {
          'brand_unsafe.exclude': 'true',
          category: 'concerts',
          country: 'US',
          limit: '10',
          'location_around.origin': `${lat},${lon}`,
          q: 'harry styles',
          sort: 'start',
          'start.gt': '2021-08-04'
        },
        headers: {Authorization: 'Bearer UCPQh7iuieqQpZWV4NOqoJPMhKvavlBNoAfad84K'}
      };

      fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));

      // const options = {
      //     method: 'GET',
      //     url: 'https://api.predicthq.com/v1/events',
      //     params: {
      //       'brand_unsafe.exclude': 'true',
      //       category: 'concerts',
      //       country: 'US',
      //       limit: '10',
      //       'location_around.origin': `${lat},${lon}`,
      //       // q: `${artistName}`,
      //       q: "harry+styles",
      //       sort: 'start',
      //       'start.gt': '2021-08-04'
      //     },
      //     headers: {Authorization: 'Bearer UCPQh7iuieqQpZWV4NOqoJPMhKvavlBNoAfad84K'}
      //   };
  
      //   axios.request(options).then(function (response) {
      //     //this is where we should get the array of objects with the concert information
      //     console.log(response.data);

      //     // return response.json(data);

      //   }).catch(function (error) {
      //     console.error(error);
      //   });


  }).catch(function (error) {
      console.error(error);
  });

}

export default searchConcertData;


