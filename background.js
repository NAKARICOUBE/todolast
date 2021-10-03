const background = document.querySelector(".background");
const dot = document.querySelectorAll(".dot");
const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");
const backgroundText = document.querySelector("backgroundText");
const ACITVE_CLASS = "active";

const bgArr = ["austria.jpg","amsterdam.jpg","czech.jpg","italyvenice.jpg"];


let counter = 0;

function prevNextBg(e) {
    if(e === 1){
        counter++;
        if(dot[counter] === undefined) {
            counter = 0;
            dotBg(counter);
        } else {
            dotBg(counter);
        }
        
    } else if(e === -1) {
        counter--;
        if(dot[counter] === undefined) {
            counter = dot.length-1;
            dotBg(counter);
        } else {
            dotBg(counter);
        }
    }
}

function dotBg(e) {
    const countArr = [];
    for(let i=0; i<dot.length; i++) {
        countArr[i] = i;
    }
    background.style = `background-image: url(${bgArr[e]})`;
    dot[e].classList.add(ACITVE_CLASS);
    countArr.splice(e,1);
    
    for(let i=0; i<countArr.length; i++) {
        dot[countArr[i]].classList.remove(ACITVE_CLASS);
    }
}

function randomBg() {
    const randomValue = Math.floor(Math.random()*bgArr.length);
    background.style = `background-image: url(${bgArr[randomValue]})`;
    dotBg(randomValue);
}

randomBg();
