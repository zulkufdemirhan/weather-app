const weather = {
    
    apiKey:"write your API key here",
    fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
        )
        .then((response) =>response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp} = data.main;
        console.log(name,icon,description,temp)
        document.querySelector(".sehir").innerText = "Weather in " + name ;
        document.querySelector(".simge").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".durum").innerText = description[0].toUpperCase() + description.substring(1);
        document.querySelector(".derece").innerText= Math.floor(temp) + "°C";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        
    },
    search: function () {
    this.fetchWeather(document.querySelector(".find").value);
},
    
}

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".find").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
    weather.search();
    }
});

weather.fetchWeather("");


