const rightPlane = document.querySelector(".right-plane");
const Cards = document.querySelectorAll(".card");
const leftBtn = document.querySelector(".left-btn");
const leftBtn2 = document.querySelector(".left-btn2");
const rightBtn = document.querySelector(".right-btn");
const rightBtn2 = document.querySelector(".right-btn2");
console.log(Cards);

// initial

Cards.forEach((element) => {
  element.classList.add("flex-hide");
});

leftBtn.addEventListener("click", () => {
  Cards[currentCard].classList.add("flex-hide");
  currentCard = currentCard === 0 ? Cards.length - 1 : currentCard - 1;
  Cards[currentCard].classList.remove("flex-hide");
  console.log(currentCard);
});

leftBtn2.addEventListener("click", () => {
  Cards[currentCard].classList.add("flex-hide");
  currentCard = currentCard === 0 ? Cards.length - 1 : currentCard - 1;
  Cards[currentCard].classList.remove("flex-hide");
  console.log(currentCard);
});

rightBtn.addEventListener("click", () => {
  Cards[currentCard].classList.add("flex-hide");
  currentCard = currentCard === Cards.length - 1 ? 0 : currentCard + 1;
  Cards[currentCard].classList.remove("flex-hide");
  console.log(currentCard);
});

rightBtn2.addEventListener("click", () => {
  Cards[currentCard].classList.add("flex-hide");
  currentCard = currentCard === Cards.length - 1 ? 0 : currentCard + 1;
  Cards[currentCard].classList.remove("flex-hide");
  console.log(currentCard);
});

let currentCard = 0;
Cards[currentCard].classList.remove("flex-hide");

{
  setTimeout(() => {
    rightPlane.classList.add("hide");
  }, 100000);

  setTimeout(() => {
    rightPlane.classList.remove("hide");
  }, 200000);

  setTimeout(() => {
    rightPlane.classList.add("hide");
  }, 300000);
}
