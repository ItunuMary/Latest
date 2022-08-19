//  
// let hour = date.getHours();
// let minute = date.getMinutes();
// let second = date.getSeconds();
// let day = date.getDay();
// document.write(day);

// document.write(date,hour,minute,second);

// let customDate = new Date("June 6 2022");
// document.write(customDate);

const hourSpan = document.getElementById("hour");
const minuteSpan = document.getElementById("minute");
const secondsSpan = document.getElementById("seconds");
const amorpmSpan = document.getElementById("amorpm");

function changeTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let amorpm;

    hourSpan.textContent = hour;
    minuteSpan.textContent = minute;
    secondsSpan.textContent = seconds;

    if(hour >=0 || hour <=12) {
        amorpm = "PM"
    } else {
        amorpm = "AM"
    }
    amorpmSpan.textContent =  amorpm;
    
}
changeTime();

setInterval(changeTime, 1000)
