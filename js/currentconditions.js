// Town Information for Preston, Soda Springs, and Fish Haven on Home Page
const requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.04&lon=111.94&exclude=minutely,hourly,daily&appid=edd40baf43f2b3f80219cb8af5bd05d9';

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
  first.textContent = conditions.temp;
  second.textContent = conditions.humidity;
  third.textContent = conditions.weather[0].description;

  
  document.querySelector('p.towndata').appendChild(first);
  document.querySelector('p.towndata').appendChild(second);
  document.querySelector('p.towndata').appendChild(third);

  });