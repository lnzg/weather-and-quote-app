// geo location

function retrievePosition(position) {
  navigator.geolocation.getCurrentPosition(accessPosition);
}

function accessPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "0577bd96999db21b7c2f3eef1b033562";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(searchWeather);
}

let geolocation = document.querySelector("#geolocation");
geolocation.addEventListener("click", retrievePosition);

// New Search Location

function newLocation(event) {
  event.preventDefault();
  let setPlace = document.querySelector("#new-location");

  let apiKey = "0577bd96999db21b7c2f3eef1b033562";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${setPlace.value}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(searchWeather);
}

function searchWeather(response) {
  let location = document.querySelector("#location");
  location.innerHTML = response.data.name;
  let newTemp = document.querySelector("#temp");
  newTemp.innerHTML = Math.round(response.data.main.temp);
  currentFar = response.data.main.temp;

  let weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = response.data.weather[0].description;
  let lowHigh = document.querySelector("#low-high");
  lowHigh.innerHTML = `Low/High: ${Math.round(
    response.data.main.temp_min
  )}°/${Math.round(response.data.main.temp_max)}°`;
  let icon = document.querySelector("#top-icon");
  iconElement = response.data.weather[0].icon;

  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconElement}@2x.png`
  );
}

let submit = document.querySelector("#set-location");
submit.addEventListener("submit", newLocation);

// Default Location

function getWeather(response) {
  let newTemp = document.querySelector("#temp");
  let location = document.querySelector("#location");
  let weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = response.data.weather[0].description;
  currentFar = response.data.main.temp;
  let lowHigh = document.querySelector("#low-high");
  lowHigh.innerHTML = `Low/High: ${Math.round(
    response.data.main.temp_min
  )}°/${Math.round(response.data.main.temp_max)}°`;
  newTemp.innerHTML = Math.round(response.data.main.temp);
  location.innerHTML = "Paris";
  let icon = document.querySelector("#top-icon");
  iconElement = response.data.weather[0].icon;

  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconElement}@2x.png`
  );
}

let apiKey = "0577bd96999db21b7c2f3eef1b033562";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=imperial&appid=${apiKey}`;
axios.get(apiUrl).then(getWeather);

function threeDayMain(response) {
  let dayOneTemp = document.querySelector("#day-one-temp");
  let dayTwoTemp = document.querySelector("#day-two-temp");
  let dayThreeTemp = document.querySelector("#day-three-temp");
  dayOneTemp.innerHTML = Math.round(response.data.list[0].main.temp);
  dayTwoTemp.innerHTML = Math.round(response.data.list[1].main.temp);
  dayThreeTemp.innerHTML = Math.round(response.data.list[2].main.temp);
  let iconOne = document.querySelector("#icon-one");
  let iconTwo = document.querySelector("#icon-two");
  let iconThree = document.querySelector("#icon-three");
  iconIdOne = response.data.list[0].weather[0].icon;
  iconIdTwo = response.data.list[1].weather[0].icon;
  iconIdThree = response.data.list[2].weather[0].icon;

  iconOne.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconIdOne}@2x.png`
  );

  iconTwo.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconIdTwo}@2x.png`
  );

  iconThree.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconIdThree}@2x.png`
  );

  // smaller icon day

  let dayOne = document.querySelector("#day-one");
  let dayOneDate = new Date(response.data.list[1].dt * 1000);
  let dayTwo = document.querySelector("#day-two");
  let dayTwoDate = new Date(response.data.list[10].dt * 1000);
  let dayThree = document.querySelector("#day-three");
  let dayThreeDate = new Date(response.data.list[20].dt * 1000);

  console.log(response);

  dayOne.innerHTML = day[dayOneDate.getDay()];
  dayTwo.innerHTML = day[dayTwoDate.getDay()];
  dayThree.innerHTML = day[dayThreeDate.getDay()];
}

let apiKeyOne = "0577bd96999db21b7c2f3eef1b033562";
let apiUrlOne = `https://api.openweathermap.org/data/2.5/forecast?q=Paris&units=imperial&appid=${apiKeyOne}`;
axios.get(apiUrlOne).then(threeDayMain);

// Smaller Weather Search
function threeDay(response) {
  let dayOneTemp = document.querySelector("#day-one-temp");
  let dayTwoTemp = document.querySelector("#day-two-temp");
  let dayThreeTemp = document.querySelector("#day-three-temp");
  dayOneTemp.innerHTML = Math.round(response.data.list[0].main.temp);
  dayTwoTemp.innerHTML = Math.round(response.data.list[1].main.temp);
  dayThreeTemp.innerHTML = Math.round(response.data.list[2].main.temp);
  let iconOne = document.querySelector("#icon-one");
  let iconTwo = document.querySelector("#icon-two");
  let iconThree = document.querySelector("#icon-three");
  iconIdOne = response.data.list[0].weather[0].icon;
  iconIdTwo = response.data.list[1].weather[0].icon;
  iconIdThree = response.data.list[2].weather[0].icon;

  iconOne.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconIdOne}@2x.png`
  );

  iconTwo.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconIdTwo}@2x.png`
  );

  iconThree.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconIdThree}@2x.png`
  );
}

function newSearch(event) {
  event.preventDefault();
  let setPlace = document.querySelector("#new-location");
  let apiKey = "0577bd96999db21b7c2f3eef1b033562";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${setPlace.value}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(threeDay);
}

let submitNew = document.querySelector("#set-location");
submitNew.addEventListener("submit", newSearch);

// current time and date

let time = document.querySelector("#time");

let now = new Date();
let day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = day[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hours = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let dayOne = document.querySelector("#day-one");
let dayTwo = document.querySelector("#day-two");
let dayThree = document.querySelector("#day-three");

dayOne.innerHTML = day[now.getDay() + 1];
dayTwo.innerHTML = day[now.getDay() + 2];
dayThree.innerHTML = day[now.getDay() + 3];

time.innerHTML = `${currentDay} ${hour}:${minutes}`;

// metric and imperial

function changeTempC(event) {
  event.preventDefault();
  celcius.classList.add("active");
  farenheight.classList.remove("active");

  let temp = document.querySelector("#temp");
  temp.innerHTML = Math.round((currentFar - 32) * 0.5556);
}

let currentFar = null;

let celcius = document.querySelector("#c");
celcius.addEventListener("click", changeTempC);

function changeTempF(event) {
  event.preventDefault();
  celcius.classList.remove("active");
  farenheight.classList.add("active");

  temp.innerHTML = Math.round(currentFar);
}

let farenheight = document.querySelector("#f");
farenheight.addEventListener("click", changeTempF);
