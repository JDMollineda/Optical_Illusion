

leftCircle.style.left = window.innerWidth * 0.2 + "px";
rightCircle.style.left = window.innerWidth * 0.8 + "px";
rightCircle.style.filter = "brightness(1.2)"

setInterval(()=>{
    const t = Math.sin(new Date().getTime() / 1000)
    circle.style.filter = "brightness("+ (1+0.2 * (t+1) /2) + ")";
    circle.style.left = window.innerWidth / 2 + t * window.innerWidth * 0.3 + "px"; //this means that the circle will travel 60% of the screen
}, 30)

