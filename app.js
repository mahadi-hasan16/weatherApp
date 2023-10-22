async function weatherInfo(city) {
    const key = "e53b1b8b0ba5397bff2729780c8d46e5";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    let data = await response.json();
    console.log(data);
    if (data.cod == 404) {
        document.querySelector(".card").style.display = "none";
        const msg = document.getElementById("msg");
        msg.innerHTML = `Sorry <br> Weather information of ${city.toUpperCase()} is not found.`
        document.querySelector(".error").style.display = "block";
    }
    else {
        const search = document.querySelector(".search");
        search.style.borderBottomLeftRadius = "0px";
        search.style.borderBottomRightRadius = "0px";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".city").innerHTML = city.toUpperCase();
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "° C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind_speed").innerHTML = data.wind.speed + " km/h";

        const weatherImg = document.querySelector(".icon");
        if(data.weather[0].main=="Clouds"){
            weatherImg.src = "./img/clouds.png";
        }
        else if(data.weather[0].main=="Haze"){
            weatherImg.src = "./img/haze.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherImg.src = "./img/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherImg.src = "./img/rain.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherImg.src = "./img/snow.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherImg.src = "./img/mist.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherImg.src = "./img/drizzle.png";
        }
        else if(data.weather[0].main=="Wind"){
            weatherImg.src = "./img/wind.png";
        }
        else if(data.weather[0].main=="Humidity"){
            weatherImg.src = "./img/humidity.png";
        }
    }
}

function main() {
    const city = document.getElementById("input").value;
    weatherInfo(city);
}

window.onload = function () {
    document.getElementById("btn").addEventListener("click", main);
};