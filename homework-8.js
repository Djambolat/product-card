//3
const person = {
  name: "Джамболат-Гаджи",
  age: 19,
  city: "Махачкала",
  country: "Россия",
  isMarried: false,
  email: "dbatyrbiev@yandex.ru",
  phone: 89288888888,
  hobbies: ["Программирование", "Футбол", "Путешествия"]
}

//4
const automobile = {
  brand: "BMW",
  model: "X5",
  year: 2020,
  color: "Черный",
  transmission: "Автоматическая",
}

automobile.owner = person;

//5
function checkMaxSpeed(automobile){
  if(!("maxSpeed" in automobile)){
    automobile.maxSpeed = 200;
  }
  else{
    return;
  }
}
checkMaxSpeed(automobile);

//6
function getArrayInfo(array, property){
  console.log(property, array[property]);
}
getArrayInfo(person, "email");

//7
const product = ["apple", "banana", "orange", "kiwi", "watermelon"];

//8
const Iliada = {
  name: "Илиада",
  author: "Гомер",
  year: 750,
  genre: "Эпическая поэма",
  titleColor: "Желтая",
  copies: 23000,
  isRare: undefined
}
const Odyssey = {
  name: "Одиссея",
  author: "Гомер",
  year: 725,
  genre: "Эпическая поэма",
  titleColor: "Белая",
  copies: 14000,
  isRare: undefined
}
const booksGomer = [Iliada, Odyssey];

//9
const HarryPotter = {
  name: "Гарри Поттер и философский камень",
  author: "Джоан Роулинг",
  year: 1997,
  genre: "Фэнтези",
  titleColor: "Красная",
  copies: 10000,
  isRare: undefined
}
const HarryPotter2 ={
  name: "Гарри Поттер и Тайная комната",
  author: "Джоан Роулинг",
  year: 1998,
  genre: "Фэнтези",
  titleColor: "Синяя",
  copies: 16000,
  isRare: undefined
} 
const booksRowling = [HarryPotter, HarryPotter2];

const booksEveryone = [...booksGomer, ...booksRowling];

//10
function checkRarity(book){
  return book.map(item => item.copies < 15000? item.isRare = true: item.isRare = false)
  }

checkRarity(booksEveryone);

console.log(booksEveryone);