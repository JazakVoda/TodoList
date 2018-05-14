
  document.getElementById('weather').addEventListener('click', getWeather);

  function getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.267136&lon=19.833549&APPID=c470d9117220df245654821524d1b0c2&units=metric')
      .then((res) => res.json())
      .then((data) => {
        var output = '';
          output += `
            <div class=" card-body weather">
              <h2>${data.name}</h2>
              <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" class="weather-img">
              <p class="weather-description">${data.weather[0].description.toUpperCase()}<p>

              <p>Temp: <span class="bold">${data.main.temp}c</span></p>
              <p>Temp-max: <span class="bold">${data.main.temp_max}c</span></p>
              <p>Temp-min: <span class="bold">${data.main.temp_min}c</span></p>
              <p>Wind-speed: <span class="bold">${data.wind.speed}m/s</span></p>
            </div>
          `;
        document.getElementById('show-weather').innerHTML = output;
    })
  }
