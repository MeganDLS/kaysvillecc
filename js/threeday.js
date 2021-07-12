const getURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.04&lon=111.94&exclude=minutely,hourly&appid=edd40baf43f2b3f80219cb8af5bd05d9';

fetch(getURL)
   .then(function (response) {
     return response.json();
   })
   .then(function (jsonObject) {
  
    let forecast = jsonObject['daily'];

    let e = document.createElement('p');
    e.textContent = forecast[0].temp.day;

    let f = document.createElement('p');
    f.textContent = forecast[1].temp.day;

    let g = document.createElement('p');
    g.textContent = forecast[2].temp.day;


 document.querySelector('div.daily').appendChild(e);
 document.querySelector('div.daily').appendChild(f);
 document.querySelector('div.daily').appendChild(g);
   
 });