import './style.css';
import { addFooter } from './footer';

const currentTemp = document.getElementById('currentTemp');
const condition = document.getElementById('condition');
const locationElem = document.getElementById('location');
const country = document.getElementById('country');
const icon = document.getElementById('icon');
const searchLocation = document.getElementById('search');
const btn = document.getElementById('btn');
const FahrenheitBtn = document.getElementById('cToFBtn');

currentTemp.classList.add('temp');
condition.classList.add('condition-text');
locationElem.classList.add('location-text');
country.classList.add('country-text');
icon.classList.add('weather-icon');
searchLocation.classList.add('search-input');
btn.classList.add('search-button');
FahrenheitBtn.classList.add('temp-toggle');

function weatherFetcher(location) {
    return new Promise((resolve, reject) => {
        const apiKey = '57bfa963400a4f5d9fc124848241705';
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
        fetch(url, { mode: 'cors' })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject('Network Error');
                }
            })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function weatherBackground() {
    /* Set background depending on weather*/
    
}

function displayWeather(response) {
    currentTemp.innerText = response.current.temp_c + '°C';
    condition.innerText = response.current.condition.text;
    locationElem.innerText = response.location.name + ',';
    country.innerText = response.location.country;
    icon.src = 'https:' + response.current.condition.icon;

    switch (condition.innerText) {
        case 'Clear':
        case 'Sunny':
            document.body.style.backgroundImage = 'url("./Asset/clear.jpg")';
            break;
        case 'Partly cloudy':
        case 'Cloudy':
        case 'Overcast':
            document.body.style.backgroundImage = 'url("./Asset/cloudy.jpg")';
            break;
      }
}

function weatherDisplay() {
    weatherFetcher('Rohtak')
        .then(response => {
            displayWeather(response);
        })
        .catch(error => {
            alert(error);
        });

    btn.addEventListener('click', () => {
        const searchLocationValue = searchLocation.value;
        weatherFetcher(searchLocationValue)
            .then(response => {
                displayWeather(response);
            })
            .catch(error => {
                alert(error.message);
            });
    });

    FahrenheitBtn.addEventListener('click', () => {
        const tempText = currentTemp.innerText;
        const tempValue = parseFloat(tempText);

        if (FahrenheitBtn.classList.contains('celsius')) {
            currentTemp.innerText = celsiusToFahrenheit(tempValue).toFixed(1) + '°F';
            FahrenheitBtn.classList.remove('celsius');
            FahrenheitBtn.classList.add('fahrenheit');
            FahrenheitBtn.innerText = 'Convert to Celsius';
        } else {
            currentTemp.innerText = fahrenheitToCelsius(tempValue).toFixed(1) + '°C';
            FahrenheitBtn.classList.remove('fahrenheit');
            FahrenheitBtn.classList.add('celsius');
            FahrenheitBtn.innerText = 'Convert to Fahrenheit';
        }
    });
}

weatherDisplay();
