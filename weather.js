 


  // var request = new XMLHttpRequest();

  // // Open a new connection, using the GET request on the URL endpoint
  // request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=45.267136&lon=19.833549&APPID=c470d9117220df245654821524d1b0c2', true);

  // request.onload = function () {
  //   // Begin accessing JSON data here
  //   var data = JSON.parse(this.response);

  //   if (request.status >= 200 && request.status < 400) {
  //       const city = data.name;
  //       const tem = data.main.temp;
  //       const wind = data.weather.id;
  //       const humidity = '';  

  //       document.getElementById('city').innerHTML = city;
  //       document.getElementById('weather').innerHTML = tem;
  //       document.getElementById('wind').innerHTML = wind;
  //   } else {
  //       const errorMessage = document.createElement('marquee');
  //       errorMessage.textContent = `Gah, it's not working!`;
  //       app.appendChild(errorMessage);
  //   }
  // }

  // // Send request
  // request.send();
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
