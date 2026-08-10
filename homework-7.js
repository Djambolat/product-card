function checkWeather(city, temperature){
console.log(`сейчас в ${city} температура- ${temperature} градусов по цельсию`)
}
checkWeather("Махачкала", 50)


const LIGHT_SPEED = 299792458
function checkSpeed(mySpeed){
  if(mySpeed > LIGHT_SPEED){
    console.log("Сверхсветовая скорость")
  }
  else if(mySpeed === LIGHT_SPEED){
    console.log("Скорость света") 
  }
  else{
    console.log("Субсветовая скорость") 
  }
}
checkSpeed(123122321412)


let product="КитКат";
let productPrice=70;

function checkMoney(myMoney){
  myMoney >= productPrice? console.log(`${product} приобретён. Спасибо за покупку!`):
   console.log(`Вам не хватает ${productPrice-myMoney}$, пополните баланс.`)
}
checkMoney(60)


function outDescriminant(a, b, c){
  let d = b*b -(4*a) *c
  if (d>=0) {
    let x1= (-b + Math.sqrt(d))/2*a
    let x2= (-b - Math.sqrt(d))/2*a
    console.log(`Дескриминант = ${d}, xПервое = ${x1}, xВторое=${x2}`)
  }
  else{
    console.log("Дескриминант меньше нуля, корней нет")

  }
}
outDescriminant(1, 2, 1)

let country = "Эфиопия"
let age = 12
const PI= 3.14
