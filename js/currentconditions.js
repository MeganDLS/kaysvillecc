// Town Information for Preston, Soda Springs, and Fish Haven on Home Page
const requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.04&lon=111.94&exclude=minutely,hourly,daily&appid=edd40baf43f2b3f80219cb8af5bd05d9'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject); 
    let conditions = jsonObject['current'];
console.log(conditions);
    let first = document.createElement('p');
    //first.setAttribute('class', 'item');
   first.textContent = conditions.lat;
   console.log(first);
   //first.appendChild();

    document.querySelector('div.towndata').appendChild(first);
  });