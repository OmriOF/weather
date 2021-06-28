const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "3a1af54e2713f4472e8ae2942b6d6ab9"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        })
        .then(showWeather);


}

function showWeather(data) {
    console.log(data);
    document.querySelector(".out-1").innerHTML = data.weather[0]["description"];
    document.querySelector(".out-2").innerHTML =
        Math.round(data.main.temp) + "&deg;";

}

const cities = {
    857690: "Moskow",
    519336: "Velikiy Novgorod",
    520555: "Nizhniy Novgorod",
    569223: "Cherepovets"
}

for (key in cities) {
    let out = cities[key];
    let opt = document.createElement("option");
    opt.textContent = out;
    opt.value = key;
    city.appendChild(opt);
}

getWeather();
document.querySelector('#city').onchange = getWeather;


