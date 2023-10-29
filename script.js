async function search(){
    locations=place.value;
    console.log(locations);
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=68b0b5f0db57621f8d1e51cddcf907aa&units=metric`)
        res.json().then((result) => {
        displayWeather(result);
    })
    function displayWeather(weathers){
        
        loc.innerHTML = weathers.name
        temp.innerHTML=weathers.main.temp+` °C`
        des.innerHTML=weathers.weather[0].description
        wind.innerHTML=weathers.wind.speed
        humidity.innerHTML=weathers.main.humidity
        pressure.innerHTML=weathers.main.pressure

    }
    

function clock(){

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let date = new Date()
        let todayD  = date.getDate()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let month = months[date.getMonth()]
        let year = date.getFullYear()
    
        todayHours.innerHTML=hours
        todayMinutes.innerHTML=minutes
    
        todayDate.innerHTML=todayD
        todayMonth.innerHTML=month
        todayYear.innerHTML=year
        setTimeout(()=>{
            clock()
        },1000)
}
    clock();
}