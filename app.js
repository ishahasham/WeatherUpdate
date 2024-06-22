const apiKey="777fb1dc6be61b5d9cdcabe605d29494";
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const getWeather = async(search) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
    const response = await fetch(url);
    console.log(response)
    const data = await response.json()
    return goWeather(data)
}

const goWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        //  <div>
        //         <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
        //     </div>
        // <div>
        //     <h2>${data.main.temp}℃</h2>
        //     <h4>&nbsp;&nbsp; ${data.weather[0].main} </h4>
        // </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)