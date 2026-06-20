const startBtn = document.getElementById("startBtn");
const lightsBtn = document.getElementById("lightsBtn");

const welcome = document.getElementById("welcome");
const lightsScreen = document.getElementById("lightsScreen");

startBtn.addEventListener("click", () => {
    welcome.classList.add("hidden");
    lightsScreen.classList.remove("hidden");
});

lightsBtn.addEventListener("click", () => {
    document.body.classList.add("lights-on");
});
