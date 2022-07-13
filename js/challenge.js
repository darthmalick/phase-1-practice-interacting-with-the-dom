window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded');
    // setInterval(interval, 1000);

    let interval = setInterval(increment, 1000);
    let counter = document.querySelector('#counter');
    let seconds = 0;
function increment() {
    counter.textContent = seconds;
    seconds += 1;
}


const minus = document.querySelector('#minus');
minus.addEventListener('click', (event) => counter.innerHTML -= 1);

const plus = document.querySelector('#plus');
plus.addEventListener('click', (event) => counter.innerHTML = parseInt(counter.innerHTML, 10) + 1);


const heart = document.querySelector('#heart');
let likesObj = {};
heart.addEventListener('click', (event) => {
    const ul = document.querySelector(".likes");
    const li = document.createElement("li");
    
    let counterValue = document.querySelector('#counter').textContent;
    let likesCount = counter.textContent;
    let foundLi = document.getElementById(likesCount)

    if(foundLi) {
        likesObj[counterValue] ++
        foundLi.textContent = `${likesCount} has been liked ${likesObj[counterValue]} times`;
    } else {
       likesObj[counterValue] = 1 
       li.id = likesCount
       li.textContent = `${likesCount} has been liked ${likesObj[counterValue]} time`;
       ul.appendChild(li);
    }
})

const submit = document.querySelector('#submit');
const pause = document.querySelector('#pause');

pause.addEventListener('click', (event) => {
    if (pause.innerHTML === "resume") {
        pause.innerHTML = "pause"
        interval = setInterval(increment, 1000)
    } else {
        clearInterval(interval)
        pause.innerHTML = "resume";
    }
    minus.disabled = !minus.disabled;
    plus.disabled = !plus.disabled;
    heart.disabled = !heart.disabled;
    submit.disabled = !submit.disabled;
});



document.getElementById("comment-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const div = document.querySelector("#list");
    const p = document.createElement("p");
    div.appendChild(p);
    let input = document.querySelector("#comment-input")
    p.append(`${input.value}`)
    input.value = ""
})

});
