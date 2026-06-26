const yesBtn = document.getElementById("yesBtn");
const noBteBtn = document.getElementById("noBtn");
const continueBtn = document.getElementById("continueBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const openLetterBtn = document.getElementById("openLetterBtn");
const page5 = document.getElementById("page5");
const quizPage = document.getElementById("quizPage");
const finalPage = document.getElementById("finalPage");

const wrongBtn1 = document.getElementById("wrongBtn1");
const wrongBtn2 = document.getElementById("wrongBtn2");
const correctBtn = document.getElementById("correctBtn");

const quizBtn = document.getElementById("quizBtn");

const letter = document.getElementById("letter");

const page4 = document.getElementById("page4");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

// Nope button runs away
noBtn.addEventListener("mouseenter", () => {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// Yes button
yesBtn.addEventListener("click", () => {

    page1.classList.add("hidden");
    page2.classList.remove("hidden");

});

// Continue button
const page3 = document.getElementById("page3");

continueBtn.addEventListener("click", () => {

    page2.classList.add("hidden");

    page3.classList.remove("hidden");

});

surpriseBtn.addEventListener("click", () => {

    page3.classList.add("hidden");

    page4.classList.remove("hidden");

});

const message = `Happy Birthday ml ❤️

I honestly don't know where to start...
Thank you for being the person who makes my ordinary days feel special.
Thank you for making me laugh.
Thank you for making me feel loved.
Najua this website isn't perfect 😂
but every single line of code was written with you in mind.
I hope today reminds you just how amazing you are.
Happy Birthday once again.

I love you so much.

❤️ Jeniffer`;

let index = 0;

function typeLetter(){

    if(index < message.length){

        letter.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,40);

    }

}

openLetterBtn.addEventListener("click",()=>{

    page4.classList.add("hidden");

    page5.classList.remove("hidden");

    letter.innerHTML="";

    index=0;

    typeLetter();

});

musicBtn.addEventListener("click", () => {

    window.open(
        "https://open.spotify.com/track/3CEXwOz5DRkZNlIiHFgPet?si=mMw-RLv-QaCA6jy6LYHRuw",
        "_blank"
    );

});

quizBtn.addEventListener("click",()=>{

    page5.classList.add("hidden");

    quizPage.classList.remove("hidden");

});

function moveButton(button){

    const x=Math.random()*300;

    const y=Math.random()*300;

    button.style.position="relative";

    button.style.left=x+"px";

    button.style.top=y+"px";

}

wrongBtn1.addEventListener("mouseenter",()=>{

    moveButton(wrongBtn1);

});

wrongBtn2.addEventListener("mouseenter",()=>{

    moveButton(wrongBtn2);

});

correctBtn.addEventListener("click",()=>{

    quizPage.classList.add("hidden");

    finalPage.classList.remove("hidden");

});

// Loading Screen

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("readyMessage").classList.remove("hidden");

    }, 3000);

    setTimeout(() => {

        document.getElementById("loadingScreen").style.display = "none";

    }, 4000);

});