// Town Information for Preston, Soda Springs, and Fish Haven on Home Page
const requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.0352&lon=-111.9386&units=imperial&exclude=minutely,hourly,daily&appid=edd40baf43f2b3f80219cb8af5bd05d9';
// lat=41.0352&lon=111.9386
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {

  let conditions = jsonObject['current'];

  let first = document.createElement('p');
    //first.setAttribute('class', 'item');
  let second = document.createElement('p');
  let third = document.createElement('p');
  first.textContent = conditions.temp + ' °F';
  second.textContent = 'Humidity: ' + conditions.humidity + '%';
  third.textContent = conditions.weather[0].description.charAt(0).toUpperCase() + conditions.weather[0].description.slice(1);  
  document.querySelector('p.towndata').appendChild(first);
  document.querySelector('p.towndata').appendChild(second);
  document.querySelector('p.towndata').appendChild(third);


let alerts = jsonObject['alerts'];
console.log(alerts);
let warning = document.createElement('p');
if (alerts == undefined) {
document.querySelector('.popup').style.display ='block';  
  }
  else {
    document.querySelector('.popup').style.display ='none';  
// document.createElement('span');
warning.textContent = 'Weather alert today: ' + alerts[0].event + '!';
  }

function closeAlert() {
  document.getElementById("alert").style.width = "0";

}
  });