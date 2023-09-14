var city=" ";
//define variables
var APIKey = "f92d40b25d362f56142c7d9e8a8addc1";
var baseURL = "https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=" + APIKey;
var weatherID = "3163858"
var weatherdata = { high: 0, low: 0, temp: 0, con: 'none', wind: 0, humidity: 0 }

function test() {
    var apiWeather = baseURL;

    fetch(apiWeather).then(function (response) {
        console.log(response);
        if (response.ok) {
            return response.json()
        }

    }).then(function (data) {

        var tempContainer = document.createElement('p')
        tempContainer.innerText = 'Temp: ' + (data.main.temp * 1.8 - 459) + '*F'
        temperature.appendChild(tempContainer)

        var humidityContainer = document.createElement('p')
        humidityContainer.innerText = 'Humidity: ' + (data.main.humidity) + '%'
        humidity.appendChild(humidityContainer)

        var windContainer = document.createElement('p')
        windContainer.innerText = 'Wind: ' + (data.main.wind)
        wind.appendChild(windContainer)

        var indexContainer = document.createElement('p')
        indexContainer.innerText = 'Index: ' + (data.main.wind)
        index.appendChild(indexContainer)
        
    });
}

let createImg1 = document.createElement('img');
let createImg2 = document.createElement('img');
let createImg3 = document.createElement('img');

test();
// user to enter city name in the input
// user to click search

function historyClear(event) {
    event.preventDefault();
    localStorage.removeItem('cityname');
    document.location.reload()
}

$('#search').on('click', displayWeather);
$('#history-clear').on('click', historyClear)