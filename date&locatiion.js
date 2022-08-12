let timer = 1000;
var a = document.querySelector("#id");
let dat = new Date();
let year = dat.getFullYear();
let month = dat.getMonth();
let date = dat.getDate();
let hour = dat.getHours();
let minutes = dat.getUTCMinutes();
let sec = dat.getSeconds();
    
setInterval(function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    sec+=1;
    let msec = (sec<10)?"0"+sec:sec;
    let minut = (minutes<10)?"0"+ minutes: minutes;

    if(sec==59){
        minutes += 1;
        sec = -1;
    }
    if(minutes==59){
        hour+=1;
        minutes=-1;
    }
    a.innerHTML ="Date: " +month + "/" + date +"/"+year+"  Time: " + hour+":"+minut+":"+msec;
    function showPosition(position) {
        a.innerHTML += "&emsp;  Latitude: " + position.coords.latitude +
        " Longitude: " + position.coords.longitude;
    }
    
},timer);




