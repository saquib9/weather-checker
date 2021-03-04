const apiKey = 'b6cc4392568a3586e950307c86a22bbd';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('search_button').addEventListener('click', () => {
    const city  = document.getElementById('city').value
    getWeatherData(city);
})

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
        .catch(err => {
            document.getElementById('show_city').innerText = "City not found"
            document.getElementById('show_temperature').innerText = " "
            document.getElementById('weather_status').innerText = " "
        })
}

const updateUI = (data) => {
    //console.log(data)
    document.getElementById('show_city').innerText = data.name
    document.getElementById('show_temperature').innerText = data.main.temp
    document.getElementById('weather_status').innerText = data.weather[0].main
    document.getElementById('icon').setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

    document.getElementById('form-id').reset();
}

