const buttonChangeFirst = document.querySelector(".change-color-card-button")//изменить цвет первой
const buttonChangeAll = document.querySelector(".change-color-allcards-button")//изменить цвет всем
const buttonChangeButton = document.querySelector(".change-color-button")//изменить цвет кнопки
const buttonOpenGoogle = document.querySelector(".open-google-button")//открыть google
const title = document.querySelector(".title")
const card = document.querySelector(".product-card")
const cardAll = document.querySelectorAll(".product-card")

function changeColorCard(){
  card.style.backgroundColor="green";
}
function changeColorCardAll(){
 cardAll.forEach(function(card){
  card.style.backgroundColor="red"
 })
}
function changeColorButton(){
  buttonChangeButton.classList.toggle("change-color-button");
}
function googleOpen(){
window.open("https://google.com")
}
function logTitle(event){
  console.log(event.target.textContent)
}
buttonChangeFirst.addEventListener("click", changeColorCard);
buttonChangeAll.addEventListener("click", changeColorCardAll);
buttonChangeButton.addEventListener("click", changeColorButton);
buttonOpenGoogle.addEventListener("click", googleOpen);
title.addEventListener("mouseover", logTitle);

