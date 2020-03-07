let cityName = document.querySelector("#inputCityName").value;
let stateName = document.querySelector("#inputStateName").value;
let countryName = document.querySelector("#inputCountryName").value;
let buttonElement = document.querySelector('button');
const key = "4de906a7381ed6420744cd8f4f88c9f9";
let= location = JSON.stringify("cityName"+"stateName"+"countryName")
console.log(cityName)
console.log(typeof cityName,typeof stateName,typeof countryName)



buttonElement.addEventListener('click',(function(){
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateName},${countryName}&appid=${key}`)
    // .value parse calander input date only
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        response.forEach((el.main.temp) => {
        let p = document.createElement('p');
        let location = document.querySelector('h2').innerHTML;

        }
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

}
))
