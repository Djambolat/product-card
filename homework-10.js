const productCards= [
  { image:"images/mouss.png",
    description:"Для нормальной кожи",
    title:"Увлажняющий мусс",
    comment:"Глубоко увлажняет кожу лица оставляя ее мягкой и гладкой",
    listTitle:"Состав",
    li_1:"Актиные натуральные комплексы",
    li_2:"Витамины C, A, PP, B и E",
    li_3:"Солнцезащитные компоненты",
    priceTitle:"Цена",
    priceValue:"2750"
  },
  { image:"images/maska.png",
    description:"Для нормальной кожи",
    title:"Увлажняющая маска",
    comment:"Способствует удерживанию влаги в верхних слоях кожи.",
    li_1:"Воски",
    li_2:"Минералы",
    li_3:"масла",
    priceValue:"3500"
  },
  { image:"images/gel.png",
    description:"Для нормальной кожи",
    title:"Гель для умывания",
    comment:"Интенсивно очищает, не повреждает защитный барьер кожи.",
    li_1:"Актиные натуральные комплексы",
    li_2:"Витамины C, A, PP, B и E",
    li_3:"Солнцезащитные компоненты",
    priceValue:"1650"
  },
  { image:"images/present_1.png",
    description:"Для нормальной кожи",
    title:"Подарочный набор №1",
    comment:"Набор, состоящий из увлажняющего крема и маски.",
    li_1:"Воски",
    li_2:"Минералы",
    li_3:"масла",
    priceValue:"4750"
  },
  { image:"images/present_5.png",
    description:"Для нормальной кожи",
    title:"Подарочный набор №5",
    comment:"Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.",
    li_1:"Воски",
    li_2:"Минералы",
    li_3:"масла",
    priceValue:"7520"
  },
   
]
const byReduceArray= productCards.reduce((accum, product) =>{ 
  accum[product.title]=product.comment 
return accum},{})

  console.log(byReduceArray)

const productTemplate = document.querySelector(".product-template")
const productList = document.querySelector(".product-list")
const input = document.querySelector(".input")
const inputButton = document.querySelector(".input-button")
console.log(productTemplate)
inputButton.addEventListener("click", getCards)

function getCards(){
  const count = Number(input.value)
  if(isNaN(count)){
    alert("введите число, я же сказал вам, вах!")
  }
  else{
  productList.innerHTML = ""
  const newCards = productCards.slice(0,count)

  newCards.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector(".product-card__image").src = product.image
    productClone.querySelector(".product-card__description").textContent = product.description
    productClone.querySelector(".product-card__title").textContent = product.title
    productClone.querySelector(".product-card__comment").textContent = product.comment
    productClone.querySelector(".product-card__list-title").textContent = "состав"
    productClone.querySelector(".li-1").textContent = product.li_1
    productClone.querySelector(".li-2").textContent = product.li_2
    productClone.querySelector(".li-3").textContent = product.li_3
    productClone.querySelector(".product-card__price-title").textContent = "Цена"
    productClone.querySelector(".product-card__price-value").textContent = `${product.priceValue}\u20BD`;
    productList.append(productClone)
  })
  }
} 

