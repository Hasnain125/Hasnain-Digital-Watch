// let daydate = new Date();


let hrspan = document.getElementById('hr');
let mintspan = document.getElementById('mint');
let secspan = document.getElementById('sec');
setInterval( function() {
    let daydate = new Date();
    if(daydate.getHours() > 12){
        hrspan.innerText = now.getHours() - 12;
    }
    else if(daydate.getHours() === 0){
        hrspan.innerText = 12;
    }
    else{
        hrspan.innerText =  daydate.getHours();
    }
    hrspan.innerText = daydate.getHours(); 
mintspan.innerText = daydate.getMinutes(); 
secspan.innerText = daydate.getSeconds();    
}, 1000);