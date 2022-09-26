
const cityName =document.getElementById('city')
let celcius  =document.getElementById('celsius')
let condition= document.getElementById('condition')
let icon = document.getElementById('weather-icon')
let API_KEY ='993912ee76cb62db3fe8bd153f6ea58f'

const weather=()=>{
     let input =document.getElementById('inputs').value
    let URL =`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
    
    fetch(URL)
    .then(res=>res.json())
    .then(data=>showWeather(data))
    .catch(res => alert("Please Enter Right City Name!!!"))
}


const showWeather =temperature=>{
    console.log(temperature)
    cityName.innerHTML=temperature.name 
    celcius.innerHTML=temperature.main.temp
    condition.innerHTML=temperature.weather[0].main
    
    //set weather icons -->

    let iconUrl =`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
     
    icon.setAttribute('src',iconUrl)
   // icon.src=iconUrl
}