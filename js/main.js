let cityName = document.querySelector("#inputCityName").value;
let stateName = document.querySelector("#inputStateName").value;
let countryName = document.querySelector("#inputCountryName").value;
let buttonElement = document.querySelector('button');
JSON.stringify(cityName,stateName,countryName)
console.log(cityName)
console.log(typeof cityName,typeof stateName,typeof countryName)



buttonElement.addEventListener('click',(function(){
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateName},${countryName}&appid=7c76bce7e335ad38fcf1dff70de1b0d6}`)
    // .value parse calander input date only
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

}
))
