// let getInfo = document.querySelector('#getInfo');
function loadFile(city) {
  
    var xhr = new XMLHttpRequest();
    // we want to get back the content of the file, the GET method is enough to do it :
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=01c2bc1dcb3b00d2c48729ca98905baa`);
    xhr.addEventListener('readystatechange', () => { // We manage here an asynchronous request

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { // if the file is loaded without error
            // document.getElementById('text').innerHTML = '<span>' + xhr.responseText + '</span>'; // We display
            let weatherObj = JSON.parse(xhr.responseText);
            console.log(weatherObj);
            let temp = weatherObj.list[0].main.temp;
            let humidity = weatherObj.list[0].main.humidity;
            let cel = temp - 273.15;
            let celFixed = cel.toFixed(2);
            let cityName = weatherObj.city.name
            let precipitation = weatherObj.list[0].weather[0].description;
            let windsp = weatherObj.list[0].wind.speed;
            let pressure = weatherObj.list[0].main.pressure;
            let cloudiness = weatherObj.list[0].clouds.all;
            let day = weatherObj.list[0].dt_txt;
            let day1A = weatherObj.list[7].dt_txt;
            let temp1A = weatherObj.list[7].main.temp;
            let cel1A = temp1A - 273.15;
            let precipitation1 = weatherObj.list[7].weather[0].description;
            let day2A = weatherObj.list[15].dt_txt;
            console.log(day2A)
            let temp2A = weatherObj.list[15].main.temp;
            let cel2A = temp2A - 273.15;
            let precipitation2 = weatherObj.list[15].weather[0].description;
            let day3A = weatherObj.list[23].dt_txt;
            let temp3A = weatherObj.list[23].main.temp;
            let cel3A = temp3A - 273.15;
            let precipitation3 = weatherObj.list[23].weather[0].description;
            let day4A = weatherObj.list[31].dt_txt;
            let temp4A = weatherObj.list[31].main.temp;
            let cel4A = temp4A - 273.15;
            let precipitation4 = weatherObj.list[31].weather[0].description;


            console.log(cel,humidity);
            let dDiv = document.getElementById('temperature');
            let degrees = document.createTextNode(`Temperature : ${celFixed}°`)
            dDiv.appendChild(degrees);
            let cty = document.getElementById('city');
            let ctyT = document.createTextNode(`City : ${cityName}`);
            cty.appendChild(ctyT);
            let humid = document.getElementById('humidity');
            let humidT = document.createTextNode(`Humidity : ${humidity}`)
            humid.appendChild(humidT);
            let precip = document.getElementById('precip')
            let precipT = document.createTextNode(`${precipitation}`)
            precip.appendChild(precipT);
            let wind = document.getElementById('wind')
            let windT = document.createTextNode(`wind : ${windsp} m/s`)
            wind.appendChild(windT);
            let press = document.getElementById('pressure');
            let pressT = document.createTextNode(`Pressure : ${pressure} hPa`);
            press.appendChild(pressT);
            let cloud = document.getElementById('cloud');
            let cloudT = document.createTextNode(`Cloudiness : ${cloudiness} %`);
            cloud.appendChild(cloudT);

            let dt = new Date(day);
            let date = document.getElementById('day')
            let dateTT = `${dt}`.split(' ');
            let getday = dateTT[0];
            let dateT = document.createTextNode(`${getday}day`)
            date.appendChild(dateT)
            let dt1 = new Date(`${day1A}`);
            let day1 = document.getElementById('day1');
            let dateTT1 = `${dt1}`.split(' ');
            let getday1 = dateTT1[0];
            let dateT1 = document.createTextNode(`${getday1}urday`);
            console.log(dateT1)
            day1.appendChild(dateT1);
            let dt2 = new Date(`${day2A}`);
            let day2 = document.getElementById('day2');
            let dateTT2 = `${dt2}`.split(' ');
            let getday2 = dateTT2[0];
            let dateT2 = document.createTextNode(`${getday2}day`);
            console.log(dateT2)
            day2.appendChild(dateT2);
            let dt3 = new Date(`${day3A}`);
            let day3 = document.getElementById('day3');
            let dateTT3 = `${dt3}`.split(' ');
            let getday3 = dateTT3[0];
            let dateT3 = document.createTextNode(`${getday3}day`);
            day3.appendChild(dateT3);
            let dt4 = new Date(`${day4A}`);
            let day4 = document.getElementById('day4');
            let dateTT4 = `${dt4}`.split(' ');
            let getday4 = dateTT4[0];
            let dateT4 = document.createTextNode(`${getday4}day`);
            day4.appendChild(dateT4);
            
            let logo1 = document.getElementById('Logo1');
            let temp1 = document.getElementById('Temp1');
            let precip1 = document.getElementById('Precip1');
            let cel1Fixed = cel1A.toFixed(2);
            let temp1T = document.createTextNode(`${cel1Fixed}°`);
            let precipitation1T = document.createTextNode(`${precipitation1}`);
            temp1.appendChild(temp1T);
            precip1.appendChild(precipitation1T);
            let logo2 = document.getElementById('Logo2');
            let temp2 = document.getElementById('Temp2');
            let cel2Fixed = cel2A.toFixed(2);
            let precip2 = document.getElementById('Precip2');
            let temp2T = document.createTextNode(`${cel2Fixed}°`);
            let precipitation2T = document.createTextNode(`${precipitation2}`);
            temp2.appendChild(temp2T);
            precip2.appendChild(precipitation2T);
            let logo3 = document.getElementById('Logo3');
            let temp3 = document.getElementById('Temp3');
            let cel3Fixed = cel3A.toFixed(2);
            let precip3 = document.getElementById('Precip3');
            let temp3T = document.createTextNode(`${cel3Fixed}°`);
            let precipitation3T = document.createTextNode(`${precipitation3}`);
            temp3.appendChild(temp3T);
            precip3.appendChild(precipitation3T);
            document.getElementById('Logo4');
            let temp4 = document.getElementById('Temp4');
            let cel4Fixed = cel4A.toFixed(2);
            let precip4 = document.getElementById('Precip4');
            let temp4T = document.createTextNode(`${cel4Fixed}°`);
            let precipitation4T = document.createTextNode(`${precipitation4}`);
            temp4.appendChild(temp4T);
            precip4.appendChild(precipitation4T);
            let divTop = document.getElementById('topContainer');
            let divL = document.getElementById('bottomL');
            let divLM = document.getElementById('bottomLM');
            let divRM = document.getElementById('bottomRM');
            let divR = document.getElementById('bottomR');
            if(precipitation==='few clouds'||precipitation==='clear sky'|| precipitation ==='scattered clouds') {
                divTop.setAttribute('class',"sunny")
            } else if (precipitation==='light rain'||precipitation==='moderate rain') {
                divTop.setAttribute('class','rainy')
            } else if (precipitation==='overcast clouds'|| precipitation==='broken clouds') {
                divTop.setAttribute('class','cloudy')
            }
            if(precipitation1==='few clouds'||precipitation1==='clear sky'|| precipitation1 ==='scattered clouds') {
                divL.setAttribute('class',"sunny")
            } else if (precipitation1==='light rain'||precipitation1==='moderate rain') {
                divL.setAttribute('class','rainy')
            } else if (precipitation1==='overcast clouds'|| precipitation1==='broken clouds') {
                divL.setAttribute('class','cloudy')
            }
            if(precipitation2==='few clouds'||precipitation2==='clear sky'|| precipitation2 ==='scattered clouds') {
                divLM.setAttribute('class',"sunny")
            } else if (precipitation2==='light rain'||precipitation2==='moderate rain') {
                divLM.setAttribute('class','rainy')
            } else if (precipitation2==='overcast clouds'|| precipitation2==='broken clouds') {
                divLM.setAttribute('class','cloudy')
            }
            if(precipitation3==='few clouds'||precipitation3==='clear sky'|| precipitation3 ==='scattered clouds') {
                divRM.setAttribute('class',"sunny")
            } else if (precipitation3==='light rain'||precipitation3==='moderate rain') {
                divRM.setAttribute('class','rainy')
            } else if (precipitation3==='overcast clouds'|| precipitation3==='broken clouds') {
                divRM.setAttribute('class','cloudy')
            }
            if(precipitation4==='few clouds'||precipitation4==='clear sky'|| precipitation4 ==='scattered clouds') {
                divR.setAttribute('class',"sunny")
            } else if (precipitation4==='light rain'||precipitation4==='moderate rain') {
                divR.setAttribute('class','rainy')
            } else if (precipitation4==='overcast clouds'|| precipitation4==='broken clouds') {
                divR.setAttribute('class','cloudy')
            }


            

            
            


                    
    }   else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status != 200) { // in case of error
            
        alert('There is an error !\n\nCode :' + xhr.status + '\nText : ' + xhr.statusText);

    }
   });

    xhr.send(null); // the request is ready we send everything !

}
let city = ''
let text = document.querySelector('#text');
text.addEventListener('keyup',function(e){
    if(e.key==='Enter') {
        city = text.value;
        loadFile(city);
    }
})






