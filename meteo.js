var humidity = 75;
var pressure = 761;
var visibility = 28;
var sunrise = '8:42';
var sunset = '16:37';
var wind = 2;
var windDirection = "Северо-Западный";

document.getElementById("value-humidity").textContent = humidity;
var rangeHumidity = document.getElementById("range-humidity");
rangeHumidity.value = humidity;

document.getElementById("value-pressure").textContent = pressure;
var rangePressure = document.getElementById("range-pressure");
rangePressure.value = pressure;

document.getElementById("value-visibility").textContent = visibility + " км";
var rangeVisibility = document.getElementById("range-visibility");
rangeVisibility.value = visibility;

document.getElementById("value-sunrise").textContent = sunrise;

document.getElementById("value-sunset").textContent = sunset;

document.getElementById("value-wind").textContent = wind + " м/с";

document.getElementById("wind-direction").textContent = windDirection;




