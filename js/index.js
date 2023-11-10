function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector(".today-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
}

function detectPosition(position) {
  let unit = "metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}lat=${lat}&lon=${lon}&units=${unit}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);
}
navigator.geolocation.getCurrentPosition(detectPosition);

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".search-field").value;
  document.querySelector("#city").innerHTML = cityInput;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

let now = new Date();
function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let formattedDate = `${day}, ${month} ${date}`;
  let displayedDate = document.querySelector("#current-date");
  displayedDate.innerHTML = formattedDate;
  return displayedDate;
}
formatDate();

function formatTime() {
  let hours = now.getHours();
  hours = hours.toString().padStart(2, "0");
  let minutes = now.getMinutes();
  minutes = minutes.toString().padStart(2, "0");
  let formattedTime = `${hours}:${minutes}`;
  let displayedTime = document.querySelector("#current-time");
  displayedTime.innerHTML = formattedTime;
  return displayedTime;
}
formatTime();
