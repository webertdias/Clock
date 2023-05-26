const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const clock = setInterval(function time () {

    let today = new Date();

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    console.log(hour, minutes, seconds);
})

