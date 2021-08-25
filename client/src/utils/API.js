// IMPORT DATA FROM USER INPUT
// cityName = this is what the user types into input field to search by city

// const artistName = artist.toLowerCase().split(" ").join("+");

export async function SearchConcertData(city) {
  const capitalizeCity = city.charAt(0).toUpperCase() + city.slice(1);
  const cityName = capitalizeCity.replace(/"/g, "");

  let apiKey = process.env.REACT_APP_API_KEY;

  const openWeatherParams = new URLSearchParams({
    q: `${cityName}`,
    units: "imperial",
    appid: `${apiKey}`,
  }).toString();

  const data = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${openWeatherParams}`
    )
  ).json();
      if (data.cod == 404) {
        console.log(data)
        window.alert("Please input a valid city")
        return
      }
  const lat = data.coord.lat;
  const lon = data.coord.lon;
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  const todaysDate = yyyy + "-" + mm + "-" + dd;

  const predictHQParams = new URLSearchParams({
    category: "concerts",
    country: "US",
    limit: "20",
    "location_around.origin": `${lat},${lon}`,
    within: "10000m@" + `${lat},${lon}`,
    sort: "start",
    "start.gt": `${todaysDate}`,
  }).toString();

  const apiPredict = process.env.REACT_APP_EVENT_KEY;

  const res = await (
    await fetch(`https://api.predicthq.com/v1/events?${predictHQParams}`, {
      headers: {
        Authorization: `Bearer ${apiPredict}`,
      },
    })
  ).json();
  return res;
}

export async function SearchArtistData(artist) {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  const todaysDate = yyyy + "-" + mm + "-" + dd;

  const predictHQParams = new URLSearchParams({
    category: "concerts",
    country: "US",
    limit: "20",
    q: `${artist}`,
    sort: "start",
    "start.gt": `${todaysDate}`,
  }).toString();

  console.log(predictHQParams);

  const apiPredict = process.env.REACT_APP_EVENT_KEY;

  const res = await (
    await fetch(`https://api.predicthq.com/v1/events?${predictHQParams}`, {
      headers: {
        Authorization: `Bearer ${apiPredict}`,
      },
    })
  ).json();
  return res;
}

export async function findArtistImage(artist) {
  const artistName = artist.toLowerCase()
  console.log(artistName)
  const res = await(
    await fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`
    )
  ).json();

  const artistid = res.artists[0].idArtist
  console.log(artistid)

  
  const apiaudiodb = process.env.REACT_APP_AUDIODB_KEY;

  const response = await(
    await fetch(`https://theaudiodb.com/api/v1/json/${apiaudiodb}/artist.php?i=${artistid}`, {

    })
  ).json();
const image = response.artists[0].strArtistThumb
console.log(image)  
return image;
  
}
