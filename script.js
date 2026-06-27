const startBtn = document.getElementById("startBtn");
const lightsBtn = document.getElementById("lightsBtn");
const messageBtn = document.getElementById("messageBtn");
const continueBtn = document.getElementById("continueBtn");

const welcome = document.getElementById("welcome");
const lightsScreen = document.getElementById("lightsScreen");
const messageScreen = document.getElementById("messageScreen");
const galleryScreen = document.getElementById("galleryScreen");

const balloons = document.getElementById("balloons");
const typedMessage = document.getElementById("typedMessage");

const finalBtn = document.getElementById("finalBtn");

const message = `Hey Sheey ❤️

Happy Birthday to the most beautiful and amazing girl.

Today is your day, and I honestly couldn't let it pass without creating something special just for you.

As I sit here writing this, I find myself thinking about all the moments we've shared together—the conversations, the laughter, the smiles, and all the little memories that have become so meaningful to me.

You have a way of making ordinary days feel brighter without even trying.

On your birthday, I want you to know how much you are appreciated.

There is only one Mary, only one Katchee, and to me there will always be only one Sheey ❤️

I hope this new year of your life brings you happiness, success, peace of mind, and countless reasons to smile.

No matter how many birthdays come and go, you'll always hold a special place in my heart.

Happy Birthday Mary 🎂

Happy Birthday Katchee ❤️

Happy Birthday, my Sheey 💖

With love,

Lawrence ❤️`;

startBtn.addEventListener("click", () => {

    welcome.classList.add("hidden");
    lightsScreen.classList.remove("hidden");

});

lightsBtn.addEventListener("click", () => {

    document.body.classList.add("lights-on");

    balloons.classList.remove("hidden");

    setTimeout(() => {
        messageBtn.classList.remove("hidden");
    }, 2000);

});

messageBtn.addEventListener("click", () => {

    lightsScreen.classList.add("hidden");
    messageScreen.classList.remove("hidden");

    typedMessage.textContent = "";

    startTyping();

});

function startTyping() {

    let index = 0;

    const typing = setInterval(() => {

        typedMessage.textContent += message.charAt(index);

        index++;

        if (index >= message.length) {

            clearInterval(typing);

            continueBtn.classList.remove("hidden");

        }

    }, 35);

}

continueBtn.addEventListener("click", () => {

    messageScreen.classList.add("hidden");

    galleryScreen.classList.remove("hidden");

});

finalBtn.addEventListener("click", () => {

    alert("More surprises coming in V4 ❤️🎂✨");

});
