import clearImg from './Asset/clear.jpg';
import cloudyImg from './Asset/cloudy.jpg';
import rainImg from './Asset/rain.jpg';
import thunderstormImg from './Asset/thunderstorm.jpg';
import snowImg from './Asset/snow.jpg';
import mainBackgroundImg from './Asset/main-background.jpg';
import {addFooter} from '../node_modules/footer-component-by-rajat-porwal/src';

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

function displayWeather(response) {
    currentTemp.innerText = response.current.temp_c + '°C';
    condition.innerText = response.current.condition.text;
    locationElem.innerText = response.location.name + ',';
    country.innerText = response.location.country;
    icon.src = 'https:' + response.current.condition.icon;

    function setBackground(image) {     //add this function because images were not rendering correctly so create the whole function
        document.body.style.backgroundImage = `url(${image})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.width = '100vw';
        document.body.style.height = '100vh';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.overflow = 'hidden';
    }

    switch (condition.innerText) {
        case 'Clear':
        case 'Sunny':
            setBackground(clearImg);
            break;
        case 'Partly cloudy':
        case 'Cloudy':
        case 'Overcast':
            setBackground(cloudyImg);
            break;
        case 'Mist':
        case 'Patchy rain possible':
        case 'Patchy sleet possible':
        case 'Patchy freezing drizzle possible':
        case 'Fog':
        case 'Freezing fog':
        case 'Patchy light drizzle':
        case 'Light drizzle':
        case 'Freezing drizzle':
        case 'Heavy freezing drizzle':
        case 'Patchy light rain':
        case 'Light rain':
        case 'Moderate rain at times':
        case 'Moderate rain':
        case 'Heavy rain at times':
        case 'Heavy rain':
        case 'Light freezing rain':
        case 'Moderate or heavy freezing rain':
        case 'Light rain shower':
        case 'Moderate or heavy rain shower':
        case 'Torrential rain shower':
        case 'Patchy light rain with thunder':
        case 'Moderate or heavy rain with thunder':
            setBackground(rainImg);
            break;
        case 'Thundery outbreaks possible':
        case 'Patchy light snow with thunder':
        case 'Moderate or heavy snow with thunder':
            setBackground(thunderstormImg);
            break;
        case 'Blowing snow':
        case 'Blizzard':
        case 'Light sleet':
        case 'Moderate or heavy sleet':
        case 'Light sleet showers':
        case 'Moderate or heavy sleet showers':
        case 'Light snow':
        case 'Patchy light snow':
        case 'Patchy moderate snow':
        case 'Moderate snow':
        case 'Patchy heavy snow':
        case 'Heavy snow':
        case 'Light snow showers':
        case 'Moderate or heavy snow showers':
        case 'Light showers of ice pellets':
        case 'Moderate or heavy showers of ice pellets':
        case 'Ice pellets':
            setBackground(snowImg);
            break;
        default:
            setBackground(mainBackgroundImg);
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
addFooter();