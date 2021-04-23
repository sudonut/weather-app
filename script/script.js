const apiKey = 'f06901ddfa0b553c54b46766f018b3b4';


document.getElementById("city-search").addEventListener("click", getCity);

function getCity() {
  const zipCode = document.getElementById("zip-code").value;
  if (zipCode === "") {
    console.log("Please enter a valid zip code.");
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => { 

    let location = document.getElementById("location");
    if (data.name === undefined) {
      alert("Please enter a valid zipcode!");
    } else {
      location.innerHTML = data.name;
    }
    let weather = document.getElementById("weather");
    // weather.innerHTML = data.weather[0].main;

    let temperature = document.getElementById("temp");

    if (data.main === undefined) {
      console.log("Error retriving temperature.");
    } else {
      temperature.innerHTML = (Math.trunc((data.main.temp - 273) * (9 / 5) + 32)) 
      + "°F";
    }
    console.log(data);
  });
};
