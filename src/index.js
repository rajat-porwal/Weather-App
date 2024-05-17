const currentTemp = document.getElementById('currentTemp');
const condition = document.getElementById('condition');
const locationElem = document.getElementById('location'); 
const country = document.getElementById('country');
const icon = document.getElementById('icon');
const searchLocation = document.getElementById('search');
const btn = document.getElementById('btn');
const FahrenheitBtn = document.getElementById('cToFBtn');

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
        if (FahrenheitBtn.classList.contains('celsius')) {
            const tempCelsius = parseFloat(currentTemp.innerText);
            currentTemp.innerText = celsiusToFahrenheit(tempCelsius) + '°F';
            FahrenheitBtn.classList.remove('celsius');
            FahrenheitBtn.classList.add('fahrenheit');
            FahrenheitBtn.innerText = 'Convert to Celsius';
        } else {
            const tempFahrenheit = parseFloat(currentTemp.innerText);
            currentTemp.innerText = fahrenheitToCelsius(tempFahrenheit) + '°C';
            FahrenheitBtn.classList.remove('fahrenheit');
            FahrenheitBtn.classList.add('celsius');
            FahrenheitBtn.innerText = 'Convert to Fahrenheit';
        }
    });
}

weatherDisplay();
