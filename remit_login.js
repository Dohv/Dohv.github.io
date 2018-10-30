const timeBasedGreeting = () => {
    let greeting = "";
    let time = new Date().getHours();
    if (time < 10) {
        greeting = "Good Morning!";
    } else if (time < 20) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
document.querySelector(".greeting").innerHTML = greeting;
}
console.log('connected');

timeBasedGreeting();