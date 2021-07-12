// Town Information for Preston, Soda Springs, and Fish Haven on Home Page
const requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.04&lon=111.94&exclude=minutely,hourly,daily&appid=edd40baf43f2b3f80219cb8af5bd05d9';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    console.log(jsonObject); 
    let conditions = jsonObject['current'];
console.log(conditions);
    let first = document.createElement('p');
    //first.setAttribute('class', 'item');
    let second = document.createElement('p');
   let third = document.createElement('p');
  // let fourth = document.createElement('p');
    first.textContent = conditions.temp;
     
   second.textContent = conditions.humidity;
   console.log(third);
   third.textContent = conditions.weather[0].description;
  // fourth.textContent = conditions.alerts.description;
   //console.log(first);
   //first.appendChild();

    document.querySelector('div.towndata').appendChild(first);
    document.querySelector('div.towndata').appendChild(second);
    document.querySelector('div.towndata').appendChild(third);
  });