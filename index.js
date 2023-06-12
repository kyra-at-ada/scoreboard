
const homeScore = document.querySelector("#home-score")
const homeOne = document.querySelector("#home-one")
const homeTwo = document.querySelector("#home-two")
const homeThree = document.querySelector("#home-three")

const guestScore = document.querySelector("#guest-score")
const guestOne = document.querySelector("#guest-one")
const guestTwo = document.querySelector("#guest-two")
const guestThree = document.querySelector("#guest-three")




homeOne.addEventListener("click", () => {
    const currentScore = Number(homeScore.textContent);
    homeScore.textContent = currentScore + 1;
})


homeTwo.addEventListener("click", () => {
    const currentScore = Number(homeScore.textContent);
    homeScore.textContent = currentScore + 2;
})

homeThree.addEventListener("click", () => {
    const currentScore = Number(homeScore.textContent);
    homeScore.textContent = currentScore + 3;
})


guestOne.addEventListener("click", () => {
    const currentScore = Number(guestScore.textContent);
    guestScore.textContent = currentScore + 1;
})


guestTwo.addEventListener("click", () => {
    const currentScore = Number(guestScore.textContent);
    guestScore.textContent = currentScore + 2;
})

guestThree.addEventListener("click", () => {
    const currentScore = Number(guestScore.textContent);
    guestScore.textContent = currentScore + 3;
})

