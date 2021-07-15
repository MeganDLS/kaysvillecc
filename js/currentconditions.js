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
let warning = "There are no alerts in your area";

if (alerts == undefined) {
  document.querySelector('#warning') = warning;
}
else {
  document.querySelector('#warning') = 'Weather alert today: ' + alerts[0].event + '!';
  //warning.textContent = 'Weather alert today: ' + alerts[0].event + '!';
}

var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}});