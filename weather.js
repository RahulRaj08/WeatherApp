function search(){
    cityname=cityname.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5b4bee0ba241d092159faf007e166080`).then(d=>d.json()).then(res=>displaydata(res))
  
}

function displaydata(details){

    place = details.name
    temp = Math.floor(details.main.temp-273.15)

    desc = details.weather[0].main
    humidity = details.main.humidity
    wind_speed = details.wind.speed
    sunrise = details.sys.sunrise
    sunset = details.sys.sunset


    city.innerHTML = `${place}`
    temperature.innerHTML = `${temp} <sup>0</sup>C`
    type.innerHTML = `${desc}`
    hum.innerHTML = `${humidity} g.m<sup>-3</sup>`
    speed.innerHTML = `${wind_speed} Km/hr`
    rise.innerHTML = `${sunrise}`
    set.innerHTML = `${sunset}`

}