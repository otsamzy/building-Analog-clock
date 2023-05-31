const body = document.querySelector("body"),
secondHand = document.querySelector(".second"),
minuteHand = document.querySelector(".minute"),
hourHand = document.querySelector(".hour"),
switchMode = document.querySelector(".switch-btn");


if(localStorage.getItem("mode") === "Dark Mode"){
body.classList.add("dark")
}


const upDateTime = () =>{
    let date = new Date()
    secToDeg = (date.getSeconds() / 60) *360;
    minToDeg = (date.getMinutes()/ 60) * 360;
    hrToDeg = (date.getHours()/ 12) *360;

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = ` rotate(${minToDeg}deg)`;
    hourHand.style.transform = ` rotate(${hrToDeg}deg)`;
const isDarkModeOn = body.classList.contains("dark")
switchMode.textContent = isDarkModeOn ? " Light Mode" : "Dark Mode"

localStorage.setItem("mode", isDarkModeOn ? "Dark Mode" : "Light Mode")

}


switchMode.addEventListener("click", () =>{
    body.classList.toggle("dark")


})


setInterval(upDateTime,1000)