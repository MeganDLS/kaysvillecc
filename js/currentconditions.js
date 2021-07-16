// Kaysville: 41.0672,-111.9398

const requestURL1 = 'https://api.weather.gov/alerts/active?point=31.0753%2C-85.8757';
// lat=41.0352&lon=111.9386
fetch(requestURL1)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    let alert = {};
    let severity = '';
    let description = '';

    if (jsonObject.features.length) {
      alert = jsonObject.features[0].properties;
      severity = alert.severity;
      description = alert.description;
    }

    if (severity) {
      let alertElem = document.createElement('li');
      let alertSeverityElem = document.createElement('p');
      let alertDescriptionElem = document.createElement('p');
    
      alertElem.textContent = severity;
      alertDescriptionElem.textContent = description;
    
      alertElem.appendChild(alertSeverityElem);
      alertElem.appendChild(alertDescriptionElem);
    
      document.querySelector('.alerts-list').appendChild(alertElem);
    }
  });

const requestURL2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.5957&lon=-121.9400&units=imperial&exclude=minutely,hourly,daily&appid=edd40baf43f2b3f80219cb8af5bd05d9'; 
fetch(requestURL2)
  .then(function (response2) {
    return response2.json();
  })

  .then(function (jsonObject2) { 

let conditions = jsonObject2['current'];

 let first = document.createElement('p');
 let second = document.createElement('p');
 let third = document.createElement('p');

 first.textContent = conditions.temp + ' °F';
 second.textContent = 'Humidity: ' + conditions.humidity + '%';
 third.textContent = conditions.weather[0].description.charAt(0).toUpperCase() + conditions.weather[0].description.slice(1);  

 document.querySelector('p.currents').appendChild(first);
 document.querySelector('p.currents').appendChild(second);
 document.querySelector('p.currents').appendChild(third);
  
  // let alerts = jsonObject['alerts'];
  // console.log(alerts);
  //let warning = "There are no alerts in your area";
  //document.querySelector('#warning') = warning;
  // if (alerts == undefined) {
  //   document.querySelector('#warning') = warning;
  // }
  // else {
  //   document.querySelector('#warning') = 'Weather alert today: ' + alerts[0].event + '!';
  //   //warning.textContent = 'Weather alert today: ' + alerts[0].event + '!';
  // }


  // let warning = document.createElement('li');
  // warning.textContent = alerts[0].event;
  // document.querySelector('span.#warning').appendChild(warning);


  var closebtn = document.getElementsByClassName("close");
  var i;

  for (i = 0; i < closebtn.length; i++) {
    closebtn[i].addEventListener("click", function() {
      this.parentElement.style.display = 'none';
    });
  }
});