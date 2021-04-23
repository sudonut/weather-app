const apiKey = 'f06901ddfa0b553c54b46766f018b3b4';

const zipCode = document.getElementById("zip-code").value;

fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`)
.then(response => response.json())
.then(data => { 
  let location = document.getElementById("location");
  location.innerHTML = data.name;

  let weather = document.getElementById("weather");
  weather.innerHTML = data.weather[0].main;

  let temperature = document.getElementById("temp");
  console.log(data);
});
