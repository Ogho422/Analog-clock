// function updateclock() {
//     const hourhand = document.getElementById('hour');
//     const minutehand = document.getElementById('minute');
//     const secondhand = document.getElementById('second')

//     const now = new Date();
//     const hours = now.gethours % 24;
//     const minutes = now.getMinutes;
//     const seconds = now.getSeconds();

//     //calculate the rotation for each hand

//     const hourRotation = (hours + minutes / 60) * 30; // 360° / 12 = 30° per hour
//     const minuteRotation = (minutes + seconds / 60) *6; // 360° / 60 = 6° per minute 
//     const secondRotation = seconds * 6; // 360° /  60 = 6° per second

//     // apply rotation to each hand

//     hourhand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
//     minutehand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`
//     secondhand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`
// }

// setInterval(updateclock, 1000); updateclock();

function clockTick(){

    const hourhand = document.getElementById('hour');
    const minutehand = document.getElementById('minute');
    const secondhand = document.getElementById('second')

    const date = new Date();
    const seconds = date.getSeconds()/ 60;
    const minutes = (seconds + date.getMinutes())/ 60;
    const hours = (minutes + date.getHours())/12;


    rotateClockHand(secondhand, seconds);
    rotateClockHand(minutehand, minutes);
    rotateClockHand(hourhand, hours);



}

function rotateClockHand(element,rotation){
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick, 1000);