const cityEl = document.getElementById('city');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
//const cityEl = document.getElementById('city');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');
const currentWindSpeedEl = document.getElementById('current-wind-speed');
const currentHumidityEl = document.getElementById('current-humidity');
const currentUvIndexEl = document.getElementById('current-uv-index');
let currentSave = 1;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY = 'e90da1f1a464bcf9dcc30119783e76bd';
let data1;
let data2
let last = 0
window.onload = function()//Will load when the program starts
{
    
    let inputs = document.getElementsByClassName("cityInput2"); //Grab all elements that have classname of input2 
    for(let i = 0; i <8; i++)
    {
        /*For loop will go from 0 to 8. 
        For every number, it will try to grab item in localstorage if it's there*/
        let getData = localStorage.getItem(i);
        if(getData != null)
        {
            inputs[i].value = getData
            last = i+1
            let data1 =inputs[i].value   
            fetch("http://api.openweathermap.org/data/2.5/forecast?q="+data1+"&appid=e90da1f1a464bcf9dcc30119783e76bd")
            .then(response => response.json())
            .then(data => {
                for(let i = 0; i < 5; i++)
                {
                    document.getElementById("city").innerHTML=(data.city.name)
                document.getElementById("divHum").innerText="Humidity: "+(data.list[i].main.humidity)+"%"
                document.getElementById("divTemp").innerText="Temp:  "+Number(data.list[i].main.temp_max).toFixed(1)+"° F"
                document.getElementById("divWind").innerText="Wind:  "+(data.list[i].wind.speed)+" MPH" 
                
                document.getElementById("temp"+(i+1)).innerText="Temp:  "+Number(data.list[i].main.temp_max).toFixed(1)+"° F"
                document.getElementById("wind"+(i+1)).innerText="Wind:  "+(data.list[i].wind.speed)+" MPH"
                document.getElementById("humidity"+(i+1)).innerText="Humidity: "+(data.list[i].main.humidity)+"%"
                }
                //list
             //   alert(data1)
            })
        }
       
       // alert(getData);
    }

    // <div id ="divTemp">Temp: 74.01&#176; F</div>
    // </div>
    // <div class="weather-item">
    //     <div id="divWind"> Wind: 6.67MPH</div>                      
    // </div>
    // <div class="weather-item">
    //     <div id="divHum">Humidity: 46 %</div>
    // </div>
    // <div class="weather-item">
    //     <div id="divUV">UV Index: 
  // alert(last);
  getWeatherData() 
 // alert(data1.data)
//  let info = "https://api.openweathermap.org/data/2.5/weather?q="
//  alert(info)
//  fetch(info)
//      .then(response => response.json())
//      .then(data=>alert(data))
//api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid={API key}
//http://api.openweathermap.org/data/2.5/forecast?q=London&appid=e90da1f1a464bcf9dcc30119783e76bd
let city = "New York"
// fetch("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=e90da1f1a464bcf9dcc30119783e76bd")
// .then(response => response.json())
// .then(data => {
//     for(let i = 0; i < 5; i++)
//     {
//         alert(data.city.name)
//     }
// })
 
}

 



setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12hrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    dateEl.innerHTML = days[day] + ',' + date+ '' + months[month]

}, 1000);
 
///https://api.openweathermap.org/data/2.5/weather?lat=$(latitude)&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=$e90da1f1a464bcf9dcc30119783e76bd
   
    function getWeatherData () {
        navigator.geolocation.getCurrentPosition((success) => {
            console.log(success);

            let {latitude, longitude} = success.coords;
             
           // data1 =  fetch('https://api.openweathermap.org/data/2.5/weather?lat=$(latitude)&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=$'+{API_KEY}).then(res => res.json()).then(data => {console.log(data)}
            // data2 =  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}')//.then(res => res.json()).then(data => {console.log(data)}
            // showWeatherData(data);
        })
    
    }

    document.getElementById("clckBTN").addEventListener("click", saveData);

    function saveData()
    {  
    //localStorage.clear()
        currentSave=last
        let data = document.getElementById("cityinput").value;  
        localStorage.setItem(currentSave,data);
        currentSave++
    }

//    function showWeatherData (data){
//         let {temp, wind_speed, humidity, UV_Index} = data.current;

        
//        // UV index output

//      $(document).ready(function(){//Code runs when the page loads    

//         if( $("uv-index").text()[0] < firstV)
//         {
//             $("btn2").css("background-color","green") 
//         }
//           if( $("uv-index").text()[0] < firstV)
//         {
//             $("btn2").css("background-color","green") 
//         }
//           if( $("uv-index").text()[0] < firstV)
//         {
//             $("btn2").css("background-color","yellow") 
//         }
//           if( $("uv-index").text()[0] < firstV)
//         {
//             $("btn2").css("background-color","yellow") 
//         }
//           if( $("uv-index").text()[0] < firstV)
//         {
//             $("btn2").css("background-color","yellow") 
//         }
//           if( $("uv-index").text()[0] < firstV)
//         {
//             $("btn2").css("background-color","red") 
//         }
//           if( $("uv-index").text()[0] < firstV)
//         {
//             $("btn2").css("background-color","red") 
//         }
//           if( $("uv-index").text()[0] < firstV)
//         {
//             $("btn2").css("background-color","red") 
//         }
//           if( $("uv-index").text()[0] < firstV)
//         {
//             $("btn2").css("background-color","red")         
//         }
//         if( $("uv-index").text()[0] > firstV)
//         {
//             $("btn2").css("background-color","red") 
//         }
//        if( $("uv-index").text()[0] > firstV)
//         {
//             $("btn2").css("background-color","red") 
//         }
//     }
// }